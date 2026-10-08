import { describe, expect, it } from "bun:test";

import { createVirtual } from "../src/index";
import { collectFiles } from "./setup";

async function renderMain(
  frontend: "none" | "htmx",
  orm: "none" | "seaorm" | "diesel" | "sqlx-rust",
) {
  const result = await createVirtual({
    projectName: "rocket-example",
    language: "rust",
    framework: "rocket",
    frontend,
    orm,
    database: orm === "none" ? "none" : "sqlite",
    migrations: "none",
    packageManager: "cargo",
    addons: [],
  });
  if (result.isErr()) throw result.error;
  return collectFiles(result.value.root, result.value.root.path).get("src/main.rs")!;
}

describe("Rocket generated project", () => {
  for (const frontend of ["none", "htmx"] as const) {
    it(`${frontend} binds every interface`, async () => {
      const main = await renderMain(frontend, "none");
      expect(main).toContain("address: std::net::Ipv4Addr::UNSPECIFIED.into(),");
    });

    it(`${frontend} with diesel calls the synchronous connect`, async () => {
      const main = await renderMain(frontend, "diesel");
      expect(main).toContain("db::connect() {");
      expect(main).not.toContain("db::connect().await");
    });

    for (const orm of ["seaorm", "sqlx-rust"] as const) {
      it(`${frontend} with ${orm} awaits connect`, async () => {
        expect(await renderMain(frontend, orm)).toContain("db::connect().await");
      });
    }
  }

  it("htmx uses Rocket 0.5 RawHtml", async () => {
    const main = await renderMain("htmx", "none");
    expect(main).toContain("use rocket::response::content::RawHtml;");
    expect(main).not.toMatch(/\bHtml</);
  });
});

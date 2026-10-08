import { describe, expect, it } from "bun:test";

import { createVirtual } from "../src/index";
import { collectFiles } from "./setup";

async function render(frontend: "none" | "htmx", orm: "none" | "seaorm" | "diesel" | "sqlx-rust") {
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
  return collectFiles(result.value.root, result.value.root.path);
}

describe("Rocket generated project", () => {
  for (const frontend of ["none", "htmx"] as const) {
    it(`${frontend} binds every interface`, async () => {
      const main = (await render(frontend, "none")).get("src/main.rs")!;
      expect(main).toContain("address: std::net::Ipv4Addr::UNSPECIFIED.into(),");
    });

    for (const orm of ["seaorm", "diesel", "sqlx-rust"] as const) {
      it(`${frontend} with ${orm} awaits connect and exits when the database is down`, async () => {
        const main = (await render(frontend, orm)).get("src/main.rs")!;
        expect(main).toContain("let db = db::connect().await.unwrap_or_else(|err| {");
        expect(main).toContain("std::process::exit(1);");
        expect(main).toContain(".manage(state)");
      });
    }
  }

  it("htmx pages use Rocket 0.5 RawHtml", async () => {
    const pages = (await render("htmx", "none")).get("src/pages.rs")!;
    expect(pages).toContain("use rocket::response::content::RawHtml;");
    expect(pages).not.toMatch(/\bHtml</);
  });
});

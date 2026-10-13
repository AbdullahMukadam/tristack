import { describe, expect, it, mock } from "bun:test";

const actual = await import("../src/prompts/navigable");
const promptShown = () => {
  throw new Error("prompt shown for a value that was already provided");
};
mock.module("../src/prompts/navigable", () => ({
  ...actual,
  navigableSelect: promptShown,
  navigableConfirm: promptShown,
  navigableMultiselect: promptShown,
  navigableGroupMultiselect: promptShown,
}));

const { gatherConfig } = await import("../src/prompts/config-prompts");

describe("provided flags skip their prompts", () => {
  it("does not prompt when every option is passed", async () => {
    const config = await gatherConfig(
      {
        language: "go",
        framework: "gin",
        frontend: "none",
        orm: "sqlc",
        migrations: "goose",
        database: "sqlite",
        packageManager: "go",
        addons: ["docker"],
        git: true,
        install: false,
      },
      "go-api",
      "/tmp/go-api",
      "go-api",
    );

    expect(config).toMatchObject({
      language: "go",
      framework: "gin",
      orm: "sqlc",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: ["docker"],
      git: true,
      install: false,
    });
  });
});

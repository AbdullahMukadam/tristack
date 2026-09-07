import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { getTriStackConfigFileJsonSchema } from "@tristack/types/json-schema";

const schema = getTriStackConfigFileJsonSchema();
const tempPath = join(tmpdir(), "tristack-schema.json");

writeFileSync(tempPath, JSON.stringify(schema, null, 2));
execSync(`npx wrangler r2 object put "bucket/schema.json" --file="${tempPath}" --remote`, {
  stdio: "inherit",
});

console.log("Uploaded schema.json to R2");

import { type ProjectConfig } from "@tristack/types";
import Handlebars from "handlebars";

Handlebars.registerHelper("eq", (a, b) => a === b);
Handlebars.registerHelper("ne", (a, b) => a !== b);
Handlebars.registerHelper("and", (...args) => args.slice(0, -1).every(Boolean));
Handlebars.registerHelper("or", (...args) => args.slice(0, -1).some(Boolean));
Handlebars.registerHelper("not", (a) => !a);
Handlebars.registerHelper("includes", (arr, val) => Array.isArray(arr) && arr.includes(val));

export function toProjectSlug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "app"
  );
}

export interface PrecompiledTemplate {
  kind: "precompiled";
  spec: object;
}

export type TemplateSource = string | PrecompiledTemplate;

export function isPrecompiledTemplate(content: TemplateSource): content is PrecompiledTemplate {
  return content instanceof Object;
}

export function processTemplateString(content: TemplateSource, context: ProjectConfig): string {
  const renderContext = {
    ...context,
    project_slug: toProjectSlug(context.projectName),
  };
  if (!isPrecompiledTemplate(content)) return content;
  return Handlebars.template(content.spec)(renderContext);
}

export function isBinaryFile(filePath: string): boolean {
  const ext = filePath.split(".").pop()?.toLowerCase() || "";
  return ["png", "jpg", "jpeg", "gif", "ico", "woff", "woff2", "ttf", "eot"].includes(ext);
}

export function transformFilename(filename: string): string {
  let result = filename.endsWith(".hbs") ? filename.slice(0, -4) : filename;

  const basename = result.split("/").pop() || result;
  if (basename === "_gitignore") result = result.replace(/_gitignore$/, ".gitignore");
  else if (basename === "_dockerignore") result = result.replace(/_dockerignore$/, ".dockerignore");

  return result;
}

export function processFileContent(
  filePath: string,
  content: TemplateSource,
  context: ProjectConfig,
): string {
  if (isBinaryFile(filePath)) return "[Binary file]";

  if (!isPrecompiledTemplate(content)) return content;

  return processTemplateString(content, context);
}

export { Handlebars };

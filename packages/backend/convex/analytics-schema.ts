import { z } from "zod";

/** Operating-system values accepted from CLI events. */
export const ANALYTICS_PLATFORM_VALUES = [
  "aix",
  "android",
  "cygwin",
  "darwin",
  "freebsd",
  "haiku",
  "linux",
  "netbsd",
  "openbsd",
  "sunos",
  "win32",
] as const;

/** How the CLI was driven for the run that produced the event. */
export const ANALYTICS_MODE_VALUES = ["interactive", "flags", "yes", "json", "api", "mcp"] as const;

const CLIVersionSchema = z
  .string()
  .trim()
  .min(1)
  .max(64)
  .regex(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/);

const NodeVersionSchema = z
  .string()
  .trim()
  .min(1)
  .max(64)
  .regex(/^v?\d+(?:\.\d+){0,2}(?:-[0-9A-Za-z.-]+)?$/);

/** Any stack option value: bounded cardinality but not enumerated, so the
 *  backend keeps accepting events as the supported option sets evolve. */
const BoundedStringSchema = z.string().trim().min(1).max(64);

function hasUniqueValues(values: string[]): boolean {
  return new Set(values).size === values.length;
}

function hasNoMixedNone(values: string[]): boolean {
  return values.length <= 1 || !values.includes("none");
}

export function normalizeAnalyticsSelection<T extends string>(values: T[] | undefined): T[] {
  return values && values.length > 0 ? values : (["none"] as T[]);
}

const AnalyticsListSchema = z
  .array(BoundedStringSchema)
  .max(32)
  .refine(hasUniqueValues)
  .refine(hasNoMixedNone)
  .transform(normalizeAnalyticsSelection);

export function normalizeAnalyticsCLIVersion(version: string): string {
  const match = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
  if (!match) return "other";
  return `${match[1]}.${match[2]}.${match[3]}`;
}

export function normalizeAnalyticsNodeVersion(version: string): string {
  const match = /^v?(\d+)/.exec(version);
  if (!match) return "other";
  return `v${match[1]}`;
}

/**
 * The public analytics ingestion contract. Project fields stay optional so
 * older CLI releases remain compatible, while every supplied value has bounded
 * cardinality. Unknown properties are intentionally stripped before storage.
 */
export const AnalyticsEventSchema = z.object({
  database: BoundedStringSchema.optional(),
  orm: BoundedStringSchema.optional(),
  backend: BoundedStringSchema.optional(),
  runtime: BoundedStringSchema.optional(),
  frontend: AnalyticsListSchema.optional(),
  addons: AnalyticsListSchema.optional(),
  examples: AnalyticsListSchema.optional(),
  auth: BoundedStringSchema.optional(),
  payments: BoundedStringSchema.optional(),
  git: z.boolean().optional(),
  packageManager: BoundedStringSchema.optional(),
  install: z.boolean().optional(),
  dbSetup: BoundedStringSchema.optional(),
  api: BoundedStringSchema.optional(),
  webDeploy: BoundedStringSchema.optional(),
  serverDeploy: BoundedStringSchema.optional(),
  cli_version: CLIVersionSchema,
  node_version: NodeVersionSchema,
  platform: z.enum(ANALYTICS_PLATFORM_VALUES),
  mode: z.enum(ANALYTICS_MODE_VALUES).optional(),
});

export type AnalyticsEvent = z.infer<typeof AnalyticsEventSchema>;

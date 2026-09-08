import type { StackState } from "./constant";
import { REPOSITORY_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "./site";
import {
  generateStackCommand,
  generateStackSharingUrl,
  generateStackSummary,
  generateStackUrlFromState,
  getSelectedTechs,
} from "./stack-utils";
import type { SelectedTech } from "./stack-utils";

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

export const agentPageSlugByPath = {
  "/about": "about",
  "/contact": "contact",
  "/new": "builder",
  "/privacy": "privacy",
  "/sponsors": "sponsors",
  "/stack": "stack",
} as const;

export type AgentPageSlug = (typeof agentPageSlugByPath)[keyof typeof agentPageSlugByPath];

type DocumentationPage = {
  data: {
    description?: string;
    title: string;
  };
  url: string;
};

const agentPageMarkdown = {
  about: `# About ${SITE_NAME}

${SITE_DESCRIPTION}

TriStack is a free, MIT-licensed open-source project forked from Better-T-Stack. It generates source code under the developer's control and does not add a required hosted runtime.
- [Documentation](${SITE_URL}/docs)
- [Source code](${REPOSITORY_URL})
- [Contact](${SITE_URL}/contact)`,
  builder: `# TriStack browser builder

Use the stack builder to choose a language, framework, ORM, database, migrations, package manager, and addons. It produces a reproducible \`create-tristack\` command.

- [Open the builder](${SITE_URL}/new)
- [CLI options](${SITE_URL}/docs/cli/options.mdx)
- [Compatibility rules](${SITE_URL}/docs/cli/compatibility.mdx)

For agent automation, prefer \`create-json\` or the programmatic API documented in the agent workflow guide.`,
  contact: `# Contact TriStack

Use GitHub issues for reproducible bugs and feature requests. Include the CLI version, command, selected stack, operating system, and a minimal reproduction when possible. General project questions can be sent to ${SUPPORT_EMAIL}.

- [Open a GitHub issue](${REPOSITORY_URL}/issues/new/choose)
- [Project repository](${REPOSITORY_URL})
- [Documentation](${SITE_URL}/docs)`,
  privacy: `# TriStack privacy

The CLI accepts a \`--disable-analytics\` flag; CLI telemetry is not active in Phase 1, and when it ships it will follow the contract in the analytics documentation — no project names, paths, file contents, secrets, environment variables, or persistent user identifiers.

- [Full privacy notice](${SITE_URL}/privacy)
- [Analytics and telemetry details](${SITE_URL}/docs/analytics.mdx)
- Disable CLI telemetry with \`--disable-analytics\`.`,
  sponsors: `# TriStack sponsors

The sponsors page recognizes the companies and developers funding TriStack development and infrastructure.

- [View sponsors](${SITE_URL}/sponsors)
- [Sponsor the project](https://github.com/sponsors/AbdullahMukadam)`,
  stack: `# Shared TriStack configuration

The stack page renders a configuration encoded in its query string. Open the linked page to inspect the selected technologies, copy the generated CLI command, or continue editing in the browser builder.

- [Open the default stack](${SITE_URL}/stack)
- [Open the builder](${SITE_URL}/new)
- [CLI documentation](${SITE_URL}/docs/cli)`,
} satisfies Record<AgentPageSlug, string>;

const stackCategoryLabels = {
  addons: "Addon",
  database: "Database",
  framework: "Framework",
  git: "Git",
  install: "Dependency installation",
  language: "Language",
  migrations: "Migrations",
  orm: "ORM",
  packageManager: "Package manager",
} satisfies Record<SelectedTech["category"], string>;

export const MARKDOWN_NOT_FOUND = `# 404: Page not found

The requested resource does not exist. Use one of these indexes to recover:

- [Agent instructions](${SITE_URL}/llms.txt)
- [Documentation](${SITE_URL}/docs)
- [Sitemap](${SITE_URL}/sitemap.xml)
- [Homepage](${SITE_URL}/)
`;

export function getAgentPageMarkdown(slug: string) {
  return agentPageMarkdown[slug as AgentPageSlug] ?? null;
}

export function buildStackMarkdown(stack: StackState) {
  const projectName = (stack.projectName || "my-tristack-app").replaceAll(/\s+/g, " ").trim();
  const escapedProjectName = projectName.replaceAll("`", "\\`");
  const selectedTechnologies = getSelectedTechs(stack)
    .map(({ category, name }) => `- ${stackCategoryLabels[category]}: ${name}`)
    .join("\n");
  const command = generateStackCommand(stack);
  const backtickRuns = command.match(/`+/g)?.map((run) => run.length) ?? [];
  const codeFence = "`".repeat(Math.max(3, ...backtickRuns.map((length) => length + 1)));

  return `# Shared TriStack configuration

- Project name: \`${escapedProjectName}\`
- Summary: ${generateStackSummary(stack)}

## Selected technologies

${selectedTechnologies || "No technologies selected."}

## Generated CLI command

${codeFence}bash
${command}
${codeFence}

## Links

- [Open this exact configuration](${generateStackSharingUrl(stack)})
- [Edit this configuration](${generateStackUrlFromState(stack)})
- [CLI documentation](${SITE_URL}/docs/cli)
`;
}

export function getDocumentationMarkdownUrl(pageUrl: string) {
  return pageUrl === "/docs" ? "/docs/index.mdx" : `${pageUrl}.mdx`;
}

export function buildLlmsIndex(pages: DocumentationPage[]) {
  const documentationLinks = [...pages]
    .sort((a, b) => {
      if (a.url === "/docs") return -1;
      if (b.url === "/docs") return 1;
      return a.url.localeCompare(b.url);
    })
    .map((page) => {
      const description = page.data.description ? ` — ${page.data.description}` : "";
      return `- [${page.data.title}](${SITE_URL}${getDocumentationMarkdownUrl(page.url)})${description}`;
    })
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

## When to use TriStack

Use TriStack when a developer or coding agent needs to scaffold a new backend project (currently Python with FastAPI, Litestar, Django, or Flask; Go and Rust coming), reproduce a selected stack from a command, inspect compatibility rules, or generate a project through a structured interface.

TriStack does not expose a public hosted application API. The supported automation interfaces are the CLI, its JSON-first \`create-json\` command, and the programmatic npm API. A native MCP plugin is planned for a later phase.

## Quick start

\`\`\`bash
uvx tristack my-api
\`\`\`

Non-interactive default project:

\`\`\`bash
uvx tristack my-api --yes
\`\`\`

## Agent interfaces

- JSON project creation: \`tristack create-json --input '{...}'\`
- Dry-run validation: \`tristack create-json --input '{"projectName":"my-api","dryRun":true}'\`
- [Agent workflow guide](${SITE_URL}/docs/cli/agent-workflows.mdx)
- [Programmatic API](${SITE_URL}/docs/cli/programmatic-api.mdx)

## Documentation

${documentationLinks}

## Project resources

- [Complete documentation in one Markdown file](${SITE_URL}/llms-full.txt)
- [Browser stack builder](${SITE_URL}/new)
- [GitHub repository](${REPOSITORY_URL})
- [Sitemap](${SITE_URL}/sitemap.xml)
- [Privacy notice](${SITE_URL}/privacy)
- [Contact](${SITE_URL}/contact)
`;
}

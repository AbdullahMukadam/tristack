import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

import { OG_SIZE, OgShell, ogColors, ogFonts } from "@/lib/og";
import { loadStackParams } from "@/lib/stack-url-state";
import { getSelectedTechs } from "@/lib/stack-utils";

const MAX_CHIPS = 15;

const categoryChipColors = {
  language: "#a6e3a1",
  framework: "#89b4fa",
  orm: "#94e2d5",
  migrations: "#f5c2e7",
  database: "#a6e3a1",
  packageManager: "#f9e2af",
  addons: "#cba6f7",
  git: "#fab387",
  install: "#74c7ec",
} satisfies Partial<Record<string, string>>;

function hasCategoryColor(category: string): category is keyof typeof categoryChipColors {
  return Object.hasOwn(categoryChipColors, category);
}

function commandBase(language: string) {
  return language === "go" || language === "rust" ? "tristack" : "uvx tristack";
}

export async function GET(req: NextRequest) {
  const stack = await loadStackParams(
    Promise.resolve(Object.fromEntries(req.nextUrl.searchParams)),
  );
  const projectName = (stack.projectName || "my-tristack-app").slice(0, 40);
  const techs = getSelectedTechs(stack);
  const visible = techs.slice(0, MAX_CHIPS);
  const overflow = techs.length - visible.length;

  return new ImageResponse(
    <OgShell
      path={`~/stack/${projectName}`}
      section="stack"
      footerRight={`${techs.length} techs · tristack.space`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "44px 56px",
          flex: 1,
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
          }}
        >
          <span style={{ color: ogColors.accent, display: "flex" }}>$</span>
          <span style={{ color: ogColors.subtext, display: "flex" }}>
            {commandBase(stack.language)} {projectName}
          </span>
        </div>

        <div
          style={{
            fontSize: "52px",
            fontWeight: 500,
            color: ogColors.text,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            display: "flex",
          }}
        >
          {projectName}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "1020px" }}>
          {visible.map((tech) => {
            const color = hasCategoryColor(tech.category)
              ? categoryChipColors[tech.category]
              : "#a6adc8";
            return (
              <div
                key={`${tech.category}-${tech.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 16px",
                  borderRadius: "4px",
                  border: `1px solid ${color}4d`,
                  background: `${color}1a`,
                  color,
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                {tech.name}
              </div>
            );
          })}
          {overflow > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: "4px",
                border: `1px solid ${ogColors.border}`,
                color: ogColors.overlay,
                fontSize: "20px",
              }}
            >
              +{overflow} more
            </div>
          )}
        </div>
      </div>
    </OgShell>,
    { ...OG_SIZE, fonts: await ogFonts() },
  );
}

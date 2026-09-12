"use client";

import {
  Django,
  Docker,
  FastAPI,
  FlaskDark,
  FlaskLight,
  GoDark,
  GoLight,
  MySQLDark,
  MySQLLight,
  PostgreSQL,
  Python,
  RustDark,
  RustLight,
  SQLite,
  UV,
} from "@ridemountainpig/svgl-react";
import { useTheme } from "next-themes";
import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

type SvglComponent = ComponentType<SVGProps<SVGSVGElement>>;
type SvglVariants = { light: SvglComponent; dark: SvglComponent };

const SVGLS = {
  Python: { light: Python, dark: Python },
  Go: { light: GoLight, dark: GoDark },
  Rust: { light: RustLight, dark: RustDark },
  FastAPI: { light: FastAPI, dark: FastAPI },
  Django: { light: Django, dark: Django },
  Flask: { light: FlaskLight, dark: FlaskDark },
  SQLite: { light: SQLite, dark: SQLite },
  PostgreSQL: { light: PostgreSQL, dark: PostgreSQL },
  MySQL: { light: MySQLLight, dark: MySQLDark },
  UV: { light: UV, dark: UV },
  Docker: { light: Docker, dark: Docker },
} satisfies Record<string, SvglVariants>;

export function SvglIcon({
  svgl,
  name,
  className,
}: {
  svgl?: string;
  name: string;
  className?: string;
}) {
  const { theme } = useTheme();

  if (!svgl) return null;

  const candidates = SVGLS[svgl as keyof typeof SVGLS];
  if (!candidates) return null;

  const Logo = candidates[theme === "dark" ? "dark" : "light"];
  return (
    <Logo
      aria-hidden="true"
      role="img"
      aria-label={`${name} icon`}
      className={cn("inline-block", className)}
    />
  );
}

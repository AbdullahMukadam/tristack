import { useTheme } from "next-themes";
import Image from "next/image";

import { SvglIcon } from "@/components/ui/svgl-icon";
import { cn } from "@/lib/utils";

export function TechIcon({
  icon,
  svgl,
  name,
  className,
}: {
  icon: string;
  svgl?: string;
  name: string;
  className?: string;
}) {
  const { theme } = useTheme();

  if (svgl) {
    return <SvglIcon svgl={svgl} name={name} className={cn("inline-block", className)} />;
  }

  if (!icon) return null;

  if (!icon.startsWith("https://") && !icon.startsWith("/")) {
    return <span className={cn("inline-flex items-center text-lg", className)}>{icon}</span>;
  }

  let iconSrc = icon;
  if (
    theme === "light" &&
    (icon.includes("drizzle") ||
      icon.includes("prisma") ||
      icon.includes("express") ||
      icon.includes("clerk") ||
      icon.includes("planetscale") ||
      icon.includes("nx") ||
      icon.includes("polar") ||
      icon.includes("astro") ||
      icon.includes("vercel"))
  ) {
    iconSrc = icon.replace(".svg", "-light.svg");
  }

  return (
    <Image
      suppressHydrationWarning
      src={iconSrc}
      alt={`${name} icon`}
      width={20}
      height={20}
      className={cn("inline-block", className)}
      unoptimized
    />
  );
}

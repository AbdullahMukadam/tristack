"use client";

import { motion } from "motion/react";

import { SectionTitle } from "./section-header";

const features = [
  {
    category: "Scaffold",
    title: "One command to start",
    description:
      "Run a single CLI command and get a production-ready project. Python with FastAPI, Go with Gin, Rust with Axum, and more. Every template is idiomatic with zero bloat.",
    gradient:
      "from-blue-500/10 via-indigo-500/5 to-purple-500/10 dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-purple-500/20",
    mockup: (
      <div className="flex h-[260px] w-full flex-col overflow-hidden rounded-xl border border-border/80 bg-fd-background shadow-md">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-3.5 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-fd-muted-foreground/80">bash — 80x24</span>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 font-mono text-[12px] leading-relaxed">
          <div className="flex items-center gap-2 text-fd-foreground">
            <span className="text-emerald-500 font-bold">$</span>
            <span className="font-medium">uvx tristack create my-api</span>
          </div>

          <div className="mt-3 space-y-1.5 text-fd-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-sky-500">◇</span>
              <span>Project name</span>
              <span className="text-fd-muted-foreground/40">..............</span>
              <span className="text-fd-foreground font-medium">my-api</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">◆</span>
              <span>Language</span>
              <span className="text-fd-muted-foreground/40">..............</span>
              <span className="inline-flex items-center gap-1 rounded bg-sky-500/10 px-1.5 py-0.5 text-[11px] font-medium text-sky-500">
                Python
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">◆</span>
              <span>Framework</span>
              <span className="text-fd-muted-foreground/40">.............</span>
              <span className="inline-flex items-center gap-1 rounded bg-indigo-500/10 px-1.5 py-0.5 text-[11px] font-medium text-indigo-500">
                FastAPI
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">◆</span>
              <span>ORM</span>
              <span className="text-fd-muted-foreground/40">...................</span>
              <span className="text-fd-foreground">SQLModel</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-border/40 pt-3 text-emerald-500">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-bold">
              ✓
            </span>
            <span className="font-medium">Project created in 2.4s</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Builder",
    title: "Visual stack builder",
    description:
      "Browse every option in your browser. The builder validates compatibility between frameworks, ORMs, and databases, then generates the exact CLI command.",
    gradient:
      "from-amber-500/10 via-orange-500/5 to-yellow-500/10 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-yellow-500/20",
    mockup: (
      <div className="flex h-[260px] w-full flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-fd-background p-4 shadow-md">
        {/* App Window Header */}
        <div>
          <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold text-fd-foreground">my-api</span>
            </div>
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
              5 components active
            </span>
          </div>

          {/* Stack Badges */}
          <div className="mt-3.5 space-y-2.5">
            <p className="text-[10px] font-medium uppercase tracking-wider text-fd-muted-foreground">
              Core Tech
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "FastAPI", "SQLModel", "SQLite"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {tech}
                </span>
              ))}
            </div>

            <p className="pt-1 text-[10px] font-medium uppercase tracking-wider text-fd-muted-foreground">
              Dev Tools
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["docker", "ruff", "pytest"].map((addon) => (
                <span
                  key={addon}
                  className="rounded-md border border-border/60 bg-muted/60 px-2 py-0.5 text-[10px] font-mono text-fd-muted-foreground"
                >
                  +{addon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CLI Command Box */}
        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 p-2.5 font-mono text-[11px]">
          <span className="truncate text-fd-muted-foreground">
            <span className="text-amber-500">$</span> uvx tristack create my-api
          </span>
          <span className="ml-2 cursor-pointer rounded bg-background px-1.5 py-0.5 text-[10px] font-sans text-fd-muted-foreground shadow-sm border border-border/40 hover:bg-muted transition-colors">
            Copy
          </span>
        </div>
      </div>
    ),
  },
  {
    category: "Automation",
    title: "JSON-first for agents",
    description:
      "Non-interactive JSON output lets coding agents and CI jobs scaffold projects programmatically. Every generated project records its stack in tristack.jsonc.",
    gradient:
      "from-emerald-500/10 via-teal-500/5 to-green-500/10 dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-green-500/20",
    mockup: (
      <div className="flex h-[260px] w-full flex-col overflow-hidden rounded-xl border border-border/80 bg-fd-background shadow-md">
        {/* Code Tab Header */}
        <div className="flex items-center border-b border-border/60 bg-muted/40 px-3">
          <div className="flex items-center gap-2 border-b-2 border-emerald-500 bg-fd-background px-3 py-2 text-xs font-medium text-fd-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            tristack.jsonc
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-hidden p-3.5 font-mono text-[11px] leading-relaxed">
          <pre className="text-fd-muted-foreground">
            <code>
              {"{\n"}
              {"  "}
              <span className="text-sky-500">&quot;projectName&quot;</span>:{" "}
              <span className="text-emerald-500">&quot;my-api&quot;</span>,{"\n"}
              {"  "}
              <span className="text-sky-500">&quot;language&quot;</span>:{" "}
              <span className="text-emerald-500">&quot;python&quot;</span>,{"\n"}
              {"  "}
              <span className="text-sky-500">&quot;framework&quot;</span>:{" "}
              <span className="text-emerald-500">&quot;fastapi&quot;</span>,{"\n"}
              {"  "}
              <span className="text-sky-500">&quot;orm&quot;</span>:{" "}
              <span className="text-emerald-500">&quot;sqlmodel&quot;</span>,{"\n"}
              {"  "}
              <span className="text-sky-500">&quot;addons&quot;</span>: [
              <span className="text-emerald-500">&quot;docker&quot;</span>,{" "}
              <span className="text-emerald-500">&quot;ruff&quot;</span>]{"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        {/* Command Footer */}
        <div className="border-t border-border/40 bg-muted/20 px-3.5 py-2 font-mono text-[10px] text-fd-muted-foreground/70">
          <span className="text-emerald-500">▶</span> create-json --input payload.json
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section className="px-4 py-16 sm:py-24 max-md:px-2">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <h1 className="text-center text-3xl font-sans gambarino font-normal tracking-tight sm:text-5xl md:text-6xl">
          Build Your{" "}
          <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]">Stack</span>.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
          Everything you need to go from idea to running project in seconds.
        </p>
      </motion.div>

      {/* Grid Features */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col overflow-hidden rounded-2xl bg-fd-background p-3 transition-all duration-300 hover:border-border hover:shadow-lg"
          >
            {/* Visual Container */}
            <div
              className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-4 sm:p-5 transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              {feature.mockup}
            </div>

            {/* Text Details */}
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-fd-muted-foreground">
                  {feature.category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-fd-foreground sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-fd-muted-foreground sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

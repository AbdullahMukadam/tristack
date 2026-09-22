"use client";

import { motion } from "motion/react";

import { SectionTitle } from "./section-header";

const features = [
  {
    category: "Scaffold",
    title: "One command to start",
    description:
      "Run a single CLI command and get a production-ready project. Python with FastAPI, Go with Gin, Rust with Axum, and more. Every template is idiomatic with zero bloat.",
  },
  {
    category: "Builder",
    title: "Visual stack builder",
    description:
      "Browse every option in your browser. The builder validates compatibility between frameworks, ORMs, and databases, then generates the exact CLI command.",
  },
  {
    category: "Automation",
    title: "JSON-first for agents",
    description:
      "Non-interactive JSON output lets coding agents and CI jobs scaffold projects programmatically. Every generated project records its stack in tristack.jsonc.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-md:px-0 px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
      >
        <h1 className="text-center text-3xl font-sans gambarino font-normal tracking-tight sm:text-5xl md:text-6xl">
          Build Your
          <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]"> Stack</span>.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
          Everything you need to go from idea to running project in seconds.
        </p>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="rounded-lg border border-border p-6"
          >
            <h3 className="mt-2 text-lg font-semibold text-fd-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

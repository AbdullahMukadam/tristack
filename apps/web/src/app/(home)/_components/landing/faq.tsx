"use client";

import { motion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionTitle } from "./section-header";

const faqs = [
  {
    value: "what-is-tristack",
    question: "What is TriStack?",
    answer:
      "TriStack is a CLI and browser-based Stack Builder that scaffolds projects. It installs as `tristack` or `uvx tristack`.",
  },
  {
    value: "which-languages",
    question: "Which languages and frameworks are supported?",
    answer:
      "Python is the first and most complete target today. Go and Rust are on the roadmap — the CLI already knows how to run for each, and maturing framework support lands milestone by milestone.",
  },
  {
    value: "builder-install",
    question: "Do I need to install anything to use the Stack Builder?",
    answer:
      "No. The builder at /new generates a ready-to-run CLI command from your selections, with a shareable link. You only install the CLI when you want to scaffold locally.",
  },
  {
    value: "agents",
    question: "How do coding agents use TriStack?",
    answer:
      "TriStack offers non-interactive JSON output for scripts and automation, plus a JSON-first `create-json` command so agents can scaffold projects directly. See the agent workflows docs for details.",
  },
  {
    value: "where-does-it-run",
    question: "Where does the CLI run?",
    answer:
      "As a standalone native binary via the install script or as a Python command with uvx. Everything runs locally — no account, no server, no lock-in.",
  },
] as const;

export function Faq() {
  return (
    <section className="max-md:px-0 mx-auto px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
      >
        <h1 className="text-center text-3xl font-sans gambarino font-normal tracking-tight sm:text-5xl md:text-6xl">
          Frequently{" "}
          <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]">Asked </span>
          Questions.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
          Here are answers to some of the most common questions about our platform.
        </p>
      </motion.div>

      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 rounded-lg border border-border w-4xl"
        >
          <Accordion className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.value}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <AccordionItem value={faq.value}>
                  <AccordionTrigger className="px-6 py-5! font-medium text-[15px]! text-fd-foreground hover:no-underline! sm:text-base!">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-sm! leading-relaxed text-fd-muted-foreground sm:text-base!">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

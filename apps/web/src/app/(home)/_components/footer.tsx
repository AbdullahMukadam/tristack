import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { REPOSITORY_URL, SUPPORT_EMAIL } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="relative w-full border-border border-t">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-base font-bold text-foreground sm:mb-4">TriStack</h3>
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed sm:mb-6 sm:text-base lg:pr-4">
              Stack-composable scaffolding for Python, Go, and Rust projects.
            </p>
            <p className="mb-4 text-[13px] text-muted-foreground leading-relaxed sm:mb-6 sm:text-sm lg:pr-4">
              Built as a fork of{" "}
              <a
                href="https://github.com/AmanVarshney01/create-better-t-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary"
              >
                Better-T-Stack
              </a>{" "}
              (MIT licensed) — the CLI engine and Stack Builder UI are adapted from the original
              project, extended to scaffold Python, Go, and Rust projects.
            </p>
            <Link
              href={REPOSITORY_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </Link>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-foreground sm:mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:space-y-3 sm:text-base">
              <li>
                <Link
                  target="_blank"
                  href={REPOSITORY_URL}
                  className="inline-block transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-block transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-foreground sm:mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground text-sm sm:space-y-4 sm:text-base">
              <div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-block break-all transition-colors hover:text-primary focus:text-primary focus:outline-none sm:break-normal"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                Have questions or feedback? Feel free to reach out or open an issue on GitHub.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-border border-t pt-6 sm:flex-row sm:gap-6 sm:pt-8">
          <p className="text-center text-muted-foreground text-xs sm:text-left sm:text-sm">
            © {new Date().getFullYear()} TriStack. All rights reserved. Fork of Better-T-Stack,
            released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

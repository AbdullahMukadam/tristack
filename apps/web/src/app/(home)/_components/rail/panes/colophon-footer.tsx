export function ColophonFooter() {
  return (
    /* The rail's skip link lands here, so it needs a focusable target rather
       than the start of the last pane. */
    <div
      id="site-links"
      tabIndex={-1}
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-fd-muted-foreground"
    >
      <span>© {new Date().getFullYear()} TriStack · fork of Better-T-Stack (MIT)</span>
      <nav aria-label="Project information" className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <a
          href="/about"
          className="builder-focus-ring transition-colors duration-150 hover:text-primary"
        >
          About
        </a>
        <a
          href="/privacy"
          className="builder-focus-ring transition-colors duration-150 hover:text-primary"
        >
          Privacy
        </a>
        <a
          href="/contact"
          className="builder-focus-ring transition-colors duration-150 hover:text-primary"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

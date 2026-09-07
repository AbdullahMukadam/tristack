export const getBadgeColors = (category: string): string => {
  switch (category) {
    case "language":
      return "border-primary/30 bg-primary/10 text-primary";
    case "framework":
      return "border-primary/40 bg-primary/15 text-primary";
    case "orm":
      return "border-primary/35 bg-primary/12 text-primary";
    case "migrations":
      return "border-accent/30 bg-accent/10 text-accent";
    case "database":
      return "border-accent/40 bg-accent/15 text-accent";
    case "addons":
      return "border-accent/50 bg-accent/20 text-accent";
    case "git":
    case "install":
    case "packageManager":
      return "border-muted-foreground/30 bg-muted text-muted-foreground";
    default:
      return "border-muted-foreground/30 bg-muted text-muted-foreground";
  }
};

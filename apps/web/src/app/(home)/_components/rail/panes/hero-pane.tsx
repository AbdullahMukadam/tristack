export default function HeroPane() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-[clamp(2rem,7vw,3.5rem)] font-bold tracking-tight">TriStack</p>

      <p className="text-[15px] leading-[1.5] text-fd-muted-foreground">
        Modern CLI for scaffolding backend projects across Python, Go, and Rust — roll your own
        stack.
      </p>
    </div>
  );
}

import HeroPane from "./hero-pane";
import InstallPane from "./install-pane";

function Divider() {
  return <span aria-hidden="true" className="h-px w-full bg-fd-border" />;
}

export default function InitPane() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 self-stretch">
      <HeroPane />
      <Divider />
      <InstallPane />
    </div>
  );
}

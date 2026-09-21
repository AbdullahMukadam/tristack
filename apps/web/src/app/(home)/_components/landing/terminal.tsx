"use client";
import { TerminalIcon } from "lucide-react";
import Image from "next/image";
import { ComponentProps, Fragment, ReactElement, useEffect, useState } from "react";

const BRAND = "text-[#f6a510]";
const SUCCESS = "text-[#28C780]";
const MUTED = "text-fd-muted-foreground";

function Terminal() {
  return (
    <div className="relative p-4 rounded-2xl col-span-full z-2 overflow-hidden md:p-8">
      <Image
        src={"/cli-2.png"}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        priority
      />
      <div className="mx-auto w-full max-w-[800px] p-2 bg-fd-card text-fd-card-foreground border rounded-2xl shadow-lg">
        <div className="relative bg-fd-secondary rounded-xl mt-2 border shadow-md">
          <div className="flex flex-row items-center gap-2 border-b p-2 text-fd-muted-foreground">
            <TerminalIcon className="size-4" />
            <span className="text-xs font-medium">Terminal</span>
            <div className="ms-auto me-2 size-2 rounded-full bg-red-400" />
          </div>
          <CreateAppAnimation className="p-2 text-fd-secondary-foreground/80" />
        </div>
      </div>
    </div>
  );
}

export function CreateAppAnimation(props: ComponentProps<"div">) {
  const installCmd = "tristack my-app";
  const tickTime = 80;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 2;
  const timeName = timeCommandRun + 1;
  const timeLanguage = timeName + 1;
  const timeFramework = timeLanguage + 1;
  const timeORM = timeFramework + 1;
  const timeDatabase = timeORM + 1;
  const timePM = timeDatabase + 1;
  const timeAddons = timePM + 1;
  const timeGit = timeAddons + 1;
  const timeInstall = timeGit + 1;
  const timeEnd = timeInstall + 1;

  const [tick, setTick] = useState(timeEnd);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: ReactElement[] = [];

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && <div className={`inline-block h-3 w-1 animate-pulse ${BRAND}`} />}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        {tick > timeName && (
          <div className="py-0.5">
            <span className={BRAND}>◇</span> <span className="font-medium">Project name</span>{" "}
            <span className={MUTED}>│</span> <span>my-app</span>
          </div>
        )}
        {tick > timeLanguage && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span>{" "}
            <span className="font-medium">Which language do you want?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● Python</span>
            <div className={`ml-4 ${MUTED}`}>○ Go</div>
            <div className={`ml-4 ${MUTED}`}>○ Rust</div>
          </div>
        )}
        {tick > timeFramework && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span> <span className="font-medium">Which framework?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● FastAPI</span>
            <div className={`ml-4 ${MUTED}`}>○ Django</div>
            <div className={`ml-4 ${MUTED}`}>○ Flask</div>
          </div>
        )}
        {tick > timeORM && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span> <span className="font-medium">Which ORM?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● SQLModel</span>
            <div className={`ml-4 ${MUTED}`}>○ SQLAlchemy</div>
            <div className={`ml-4 ${MUTED}`}>○ Tortoise ORM</div>
          </div>
        )}
        {tick > timeDatabase && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span> <span className="font-medium">Which database?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● SQLite</span>
            <div className={`ml-4 ${MUTED}`}>○ PostgreSQL</div>
            <div className={`ml-4 ${MUTED}`}>○ MySQL</div>
          </div>
        )}
        {tick > timePM && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span>{" "}
            <span className="font-medium">Which package manager?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● uv</span>
            <div className={`ml-4 ${MUTED}`}>○ pip</div>
            <div className={`ml-4 ${MUTED}`}>○ Poetry</div>
          </div>
        )}
        {tick > timeAddons && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span> <span className="font-medium">Additional addons?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● None</span>
          </div>
        )}
        {tick > timeGit && (
          <div className="py-0.5">
            <span className={BRAND}>◆</span> <span className="font-medium">Initialize git?</span>{" "}
            <span className={MUTED}>│</span> <span className={BRAND}>● Yes</span>
          </div>
        )}
        {tick > timeInstall && (
          <div className={`mt-2 pt-2 border-t border-fd-muted-foreground/20`}>
            <span className={SUCCESS}>✓</span>{" "}
            <span className={`${SUCCESS} font-medium`}>Project ready in 2.4s</span>
          </div>
        )}
      </Fragment>,
    );

  return (
    <div
      {...props}
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      <div className="h-[440px] overflow-hidden">
        <pre className="font-mono text-sm">
          <code className="grid">{lines}</code>
        </pre>
      </div>
    </div>
  );
}

export default Terminal;

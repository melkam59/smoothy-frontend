"use client";

import { useEffect, useState } from "react";

const TITLE_TEXT = `
 ███████╗███╗   ███╗ ██████╗  ██████╗ ████████╗██╗  ██╗██╗   ██╗
 ██╔════╝████╗ ████║██╔═══██╗██╔═══██╗╚══██╔══╝██║  ██║╚██╗ ██╔╝
 ███████╗██╔████╔██║██║   ██║██║   ██║   ██║   ███████║ ╚████╔╝
 ╚════██║██║╚██╔╝██║██║   ██║██║   ██║   ██║   ██╔══██║  ╚██╔╝
 ███████║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝   ██║   ██║  ██║   ██║
 ╚══════╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝   ╚═╝
`;

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now?.toLocaleTimeString(undefined, { hour12: true });
  const date = now?.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const tz = now
    ? `GMT${-now.getTimezoneOffset() / 60 >= 0 ? "+" : ""}${-now.getTimezoneOffset() / 60}`
    : "";

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>

      <div className="mt-6 grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <p className="text-sm text-muted-foreground">
            This website is currently under development.
          </p>
        </section>

        <section className="rounded-lg border p-4">
          <div className="font-mono text-lg">{time ?? "--:--:-- --"}</div>
          <div className="text-sm text-muted-foreground">
            {date ? `${date} at ${tz}` : "Loading…"}
          </div>
        </section>
      </div>
    </div>
  );
}

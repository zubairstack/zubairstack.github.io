"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-0">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[11px]"
        aria-hidden
      />
      {items.map((item, index) => (
        <FadeIn key={item.id} delay={index * 0.05}>
          <li className="relative pb-10 pl-8 last:pb-0 md:pl-12">
            <span
              className={cn(
                "absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-accent bg-background shadow-[0_0_12px_rgba(56,189,248,0.4)] md:size-[23px]"
              )}
              aria-hidden
            />
            <div className="rounded-xl border border-border bg-surface/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/25 md:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent">
                    {item.company}
                    <span className="text-muted"> · {item.location}</span>
                  </p>
                </div>
                <time
                  dateTime={item.period}
                  className="font-mono text-xs text-muted sm:text-sm"
                >
                  {item.period}
                </time>
              </div>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm text-muted md:text-base"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

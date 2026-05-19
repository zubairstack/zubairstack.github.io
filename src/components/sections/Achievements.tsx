"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(
    achievements[0]?.id ?? null
  );

  return (
    <section
      id="achievements"
      className="section-padding border-t border-border"
      aria-labelledby="achievements-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="achievements"
          label="05 — Achievements"
          title="Notable technical work"
          description="Architecture decisions and systems that moved the needle."
        />
        <div className="space-y-3">
          {achievements.map((item, index) => {
            const isOpen = expandedId === item.id;
            return (
              <FadeIn key={item.id} delay={index * 0.05}>
                <article
                  className={cn(
                    "rounded-xl border transition-colors",
                    isOpen
                      ? "border-accent/40 bg-surface"
                      : "border-border bg-surface/40 hover:border-accent/20"
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                    onClick={() =>
                      setExpandedId(isOpen ? null : item.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`achievement-panel-${item.id}`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.summary}</p>
                    </div>
                    <span
                      className={cn(
                        "mt-1 shrink-0 font-mono text-accent transition-transform",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`achievement-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`achievement-title-${item.id}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:pb-6">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

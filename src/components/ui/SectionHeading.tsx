"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <p
        id={`${id}-label`}
        className="mb-2 font-mono text-sm uppercase tracking-widest text-accent"
      >
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      ) : null}
    </FadeIn>
  );
}

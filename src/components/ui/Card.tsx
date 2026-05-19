import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "motion";
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-accent/30",
        className
      )}
    >
      {children}
    </article>
  );
}

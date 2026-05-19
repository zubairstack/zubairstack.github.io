import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

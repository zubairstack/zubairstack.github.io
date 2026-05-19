import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}
        </p>
        <p className="text-xs text-muted">
          Built with Next.js · TypeScript · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { about } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="section-padding border-t border-border"
      aria-labelledby="about-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="about"
          label="01 - About"
          title="Building systems that scale"
        />
        <FadeIn>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            {about.bio}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-3xl rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-foreground">
            <span className="font-mono text-sm text-accent">Highlight · </span>
            {about.highlight}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-8">
            <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
              Education
            </h3>
            <ul className="space-y-2">
              {about.education.map((item) => (
                <li key={item} className="flex gap-2 text-muted">
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

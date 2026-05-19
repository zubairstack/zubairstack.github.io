import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border"
      aria-labelledby="experience-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="experience"
          label="02 — Experience"
          title="Career timeline"
          description="From freelance builds to leading engineering orgs across fintech, Web3, and AI."
        />
        <Timeline items={experience} />
      </div>
    </section>
  );
}

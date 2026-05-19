"use client";

import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-t border-border"
      aria-labelledby="skills-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="skills"
          label="04 — Skills"
          title="Technical stack"
          description="Languages, platforms, and domains I work across day to day."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.id} delay={index * 0.04}>
              <div>
                <h3 className="mb-3 font-mono text-sm font-medium text-accent">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

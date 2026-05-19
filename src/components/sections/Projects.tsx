"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding border-t border-border"
      aria-labelledby="projects-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="projects"
          label="03 — Projects"
          title="Selected work"
          description="Production systems across Web3, quant finance, civic tech, and developer tooling."
        />
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <li>
                <Card className="group flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    <a
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {project.title}
                      {project.external ? (
                        <span className="ml-1 inline-block text-accent" aria-hidden>
                          ↗
                        </span>
                      ) : null}
                    </a>
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

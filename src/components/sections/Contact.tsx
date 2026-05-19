import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-border"
      aria-labelledby="contact-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="contact"
          label="06 - Contact"
          title="Let's connect"
          description="Open to engineering leadership roles, consulting, and ambitious technical projects."
        />

        <FadeIn>
          <ul className="mx-auto max-w-md space-y-4">
            <ContactLink
              label="Email"
              href={`mailto:${profile.email}`}
              value={profile.email}
            />
            <ContactLink
              label="WhatsApp"
              href={profile.whatsappUrl}
              value={profile.whatsapp}
            />
            <ContactLink
              label="GitHub"
              href={profile.github}
              value="github.com/zubairstack"
            />
            <ContactLink
              label="LinkedIn"
              href={profile.linkedin}
              value="linkedin.com/in/zubairstack"
            />
          </ul>

          <div className="mt-10 flex justify-center">
            <Button href={profile.whatsappUrl} variant="primary" size="lg">
              Message on WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <li>
      <span className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </span>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="mt-0.5 block text-foreground transition-colors hover:text-accent"
      >
        {value}
      </a>
    </li>
  );
}

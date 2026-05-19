"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = (await response.json()) as { error?: string };
      throw new Error(data.error ?? "Failed to send");
    } catch {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
    }
  }

  return (
    <section
      id="contact"
      className="section-padding border-t border-border"
      aria-labelledby="contact-label"
    >
      <div className="container-narrow">
        <SectionHeading
          id="contact"
          label="06 — Contact"
          title="Let's connect"
          description="Open to engineering leadership roles, consulting, and ambitious technical projects."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <ul className="space-y-4">
              <ContactLink
                label="Email"
                href={`mailto:${profile.email}`}
                value={profile.email}
              />
              <ContactLink
                label="GitHub"
                href={profile.github}
                value="github.com/izubaire"
              />
              <ContactLink
                label="LinkedIn"
                href={profile.linkedin}
                value="linkedin.com/in/zubaire"
              />
              <li className="pt-2 text-sm text-muted">
                {profile.location}
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <FormField label="Name" id="contact-name" name="name" required />
              <FormField
                label="Email"
                id="contact-email"
                name="email"
                type="email"
                required
              />
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className={inputClass}
                  placeholder="Tell me about your project or role..."
                />
              </div>

              {status === "error" && errorMessage ? (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="text-sm text-accent" role="status">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              ) : null}

              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </Button>
              <p className="text-xs text-muted">
                Falls back to your email client if the API is unavailable.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const inputClass = cn(
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground",
  "placeholder:text-muted/60 transition-colors",
  "focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
);

function FormField({
  label,
  id,
  name,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className={inputClass}
      />
    </div>
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

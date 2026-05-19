"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24 pb-16 md:px-12 lg:px-20"
      aria-labelledby="hero-heading"
    >
      <GradientMesh />
      <ParticlesBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <FadeIn>
          <motion.h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.name}
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 text-xl font-medium text-accent md:text-2xl">
            {profile.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary" size="lg">
              View Work
            </Button>
            <Button href={profile.whatsappUrl} variant="secondary" size="lg">
              WhatsApp Me
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-12 font-mono text-xs text-muted/80">
            {profile.headline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

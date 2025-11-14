import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Button } from "../../components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef } from "react";

interface HeroSectionProps {
  heroImage: string;
}

const HERO_STATS = [
  { value: "3", label: "Talents connectés", delay: 0 },
  { value: "2", label: "Profils certifiés", delay: 0.1 },
  { value: "0", label: "Visites mensuelles", delay: 0.2 },
  { value: "8", label: "Pays couverts", delay: 0.3 },
];

export function HeroSection({ heroImage }: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const heroParticles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        left: `${Math.random() * 90 + 5}%`,
        bottom: `${Math.random() * 80 + 5}%`,
        delay: `${index * 0.8}s`,
      })),
    []
  );

  const backgroundImage =
    heroImage && heroImage.trim().length > 0
      ? heroImage
      : "/image/acceuil-nexusconnect-2.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#03133c] via-[#051f58]/95 to-[#010b1e] text-white">
      <ImageWithFallback
        src={backgroundImage}
        alt="Carte stylisée de l'Afrique connectée"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.25),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 md:flex-row md:items-center">
        <div className="w-full md:w-3/5 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#ffd700]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#ffd700]">
            <Target className="h-4 w-4" />
            Vision 2030 Nexus Connect
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Et si l’Afrique de l’Ouest devenait le nouveau centre de l’innovation ?
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Nous connectons les entrepreneurs, startups et institutions pour bâtir une Afrique numérique, unie et visionnaire.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="group rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffec7c] px-8 py-4 text-base font-semibold text-[#123079] shadow-lg hover:-translate-y-1 transition">
              Je rejoins le mouvement
              <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/50 bg-white/5 px-8 py-4 text-base font-medium text-white hover:bg-white/15"
            >
              Découvrir les entrepreneurs
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[150px] flex-1 flex-col rounded-3xl border border-white/20 bg-white/10 p-4 sm:min-w-[180px]"
              >
                <p className="text-3xl font-semibold text-[#ffd700]">{stat.value}</p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-2/5">
          <div className="relative rounded-[48px] border border-white/20 bg-gradient-to-br from-white/15 via-white/10 to-[#091a44]/40 p-6 backdrop-blur-xl">
            <div className="relative h-72 overflow-hidden rounded-[36px]">
              <img
                src="/image/acceuil-nexusconnect-1.jpg"
                alt="Ecosystème Nexus Connect"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#041640]/50 via-transparent to-[#ffd700]/30" />
              {heroParticles.map((particle, idx) => (
                <span
                  key={`particle-${idx}`}
                  className="absolute h-2 w-2 rounded-full bg-white/70"
                  style={{
                    left: particle.left,
                    bottom: particle.bottom,
                    animation: `float 8s linear infinite`,
                    animationDelay: particle.delay,
                  }}
                />
              ))}
            </div>
            <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#ffd700]">
                Nos partenaires croient en nous
              </p>
              <div className="flex items-center gap-4">
                <img src="/logo/logo.png" alt="Logo Nexus Connect" className="h-12 w-auto" />
                <p className="text-sm text-white/80">
                  Une plateforme soutenue par les institutions béninoises et les investisseurs d’Afrique de l’Ouest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

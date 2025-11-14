import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Button } from "../../components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef } from "react";

interface HeroSectionProps {
  heroImage: string;
}

const HERO_STATS = [
  { value: "3", label: "Talents connectés" },
  { value: "2", label: "Profils certifiés" },
  { value: "8", label: "Pays couverts" },
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
    <motion.section
      ref={ref}
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0D1F44",
      }}
    >
      <img
        src={backgroundImage}
        alt="Carte stylisée de l'Afrique connectée"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,31,68,0.95),rgba(13,31,68,0.85))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f44]/90 via-[#0b204c]/80 to-[#040b1e]/90" />

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 md:flex-row md:items-center"
        style={{ opacity, scale }}
      >
        <div className="w-full space-y-8 md:w-3/5">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-white/80">
              <div className="h-10 w-10 rounded-full bg-white/10 p-2 backdrop-blur">
                <ImageWithFallback
                  src="/logo/logo.png"
                  alt="Logo Nexus Connect"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#DDE7F2]">
                Nexus Connect
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#ffd700]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#ffd700]">
              <Target className="h-4 w-4" />
              Vision 2030
            </div>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Et si l’Afrique de l’Ouest devenait le nouveau centre de l’innovation ?
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[#DDE7F2]">
            Nous connectons les entrepreneurs, startups et institutions pour bâtir une Afrique numérique, unie et visionnaire.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="group rounded-full border-none bg-[#FFD700] px-8 py-4 text-base font-semibold text-[#0D1F44] shadow-lg transition hover:-translate-y-1">
              Je rejoins le mouvement
              <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-white/40 bg-transparent px-8 py-4 text-base font-medium text-white hover:bg-white/10"
            >
              Découvrir les entrepreneurs
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-white/15 bg-white/10 p-5 text-center backdrop-blur"
                style={{ boxShadow: "0 15px 45px rgba(12,31,66,0.35)" }}
              >
                <p className="text-4xl font-semibold text-[#FFD700]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#DDE7F2]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-2/5">
          <div className="relative rounded-[40px] border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <div className="relative h-72 overflow-hidden rounded-[30px] border border-white/10">
              <ImageWithFallback
                src="/image/acceuil-nexusconnect-1.jpg"
                alt="Ecosystème Nexus Connect"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F44]/60 via-transparent to-[#FFD700]/40" />
              {heroParticles.map((particle, idx) => (
                <span
                  key={`particle-${idx}`}
                  className="absolute h-2 w-2 rounded-full bg-white/80"
                  style={{
                    left: particle.left,
                    bottom: particle.bottom,
                    animation: `float 8s linear infinite`,
                    animationDelay: particle.delay,
                  }}
                />
              ))}
            </div>
            <div className="mt-6 space-y-4 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">
                Nos partenaires croient en nous
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white p-2 shadow-inner">
                  <ImageWithFallback src="/logo/logo.png" alt="Logo Nexus Connect" className="h-full w-full object-contain" />
                </div>
                <p className="text-sm leading-relaxed text-[#DDE7F2]">
                  Une plateforme soutenue par les institutions béninoises et les investisseurs d’Afrique de l’Ouest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

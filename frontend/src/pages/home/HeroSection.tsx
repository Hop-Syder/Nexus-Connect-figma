import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef } from "react";

interface HeroSectionProps {
  heroImage: string;
}

const stats = [
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

  const particles = useMemo(
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
    <section
      id="accueil"
      ref={ref}
      className="relative overflow-hidden bg-[#020c27] text-white"
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          alt="Carte stylisée de l'Afrique connectée"
          src={backgroundImage}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#021840]/95 via-[#03245c]/90 to-[#010b1e]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#041c46]/50 to-[#041c46]/40" />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 md:flex-row md:items-center"
        style={{ opacity, scale }}
      >
        {/* Left Column */}
        <div className="w-full md:w-3/5">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#e7b100]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#ffd700]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Target className="h-4 w-4" />
            Vision 2030 Nexus Connect
          </motion.div>

          <motion.h1
            className="text-4xl font-extrabold leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Et si l’Afrique de l’Ouest devenait le nouveau centre de
            l’innovation ?
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Nous connectons les entrepreneurs, startups et institutions pour bâtir
            une Afrique numérique, unie et visionnaire.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="button-shimmer group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffea7a] px-8 py-4 text-base font-semibold text-[#041640] shadow-lg transition duration-300 hover:-translate-y-1">
              Je rejoins le mouvement
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/15">
              Découvrir les entrepreneurs
            </button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex min-w-[150px] flex-1 flex-col rounded-3xl border border-white/20 bg-white/10 p-4 sm:min-w-[180px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + stat.delay }}
              >
                <p className="text-3xl font-semibold text-[#ffd700]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          className="relative w-full md:w-2/5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative rounded-[48px] border border-white/20 bg-gradient-to-br from-white/15 via-white/10 to-[#0b204c]/40 p-6 backdrop-blur-xl">
            <div className="relative h-72 overflow-hidden rounded-[36px]">
              <ImageWithFallback
                alt="Écosystème Nexus Connect soutenu par ses partenaires"
                src="/image/acceuil-nexusconnect-1.jpg"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#041640]/50 via-transparent to-[#ffd700]/30" />
              {particles.map((particle, index) => (
                <span
                  key={index}
                  className="particle absolute block h-2 w-2 rounded-full bg-white/70"
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
                <ImageWithFallback
                  alt="Logo Nexus Connect"
                  src="/logo/logo.png"
                  className="h-12 w-auto"
                />
                <p className="text-sm text-white/80">
                  Une plateforme soutenue par les institutions béninoises et les
                  investisseurs d’Afrique de l’Ouest.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

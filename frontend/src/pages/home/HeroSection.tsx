import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Button } from "../../components/ui/button";
import { ArrowRight, Shield, Sparkles, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const stats = [
    { value: "3", label: "Talents connectés" },
    { value: "2", label: "Profils certifiés" },
    { value: "0", label: "Visites mensuelles" },
    { value: "8", label: "Pays couverts" },
  ];

  const heroBackground =
    heroImage ||
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600";

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#041640]"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(3, 15, 40, 0.95), rgba(4, 26, 86, 0.92)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        perspective: "1000px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#041640]/60 to-[#020817]" />

      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 border-2 border-white/20 rounded-3xl"
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-32 h-32 border-2 border-[#FFD700]/40 rounded-full"
          animate={{ rotate: [0, -360], scale: [1, 1.25, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid gap-10 items-center lg:grid-cols-12">
          {/* Left column */}
          <motion.div
            className="space-y-6 text-white lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wide backdrop-blur"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-[#004AAD]">
                <Sparkles className="h-4 w-4" />
              </div>
              Vision 2030 Nexus Connect
            </motion.div>

            <motion.h1
              className="text-white"
              style={{
                fontSize: "clamp(32px, 5.5vw, 58px)",
                fontWeight: 800,
                lineHeight: "110%",
              }}
            >
              Et si l'Afrique de l'Ouest devenait le nouveau centre de
              l'innovation ?
            </motion.h1>

            <motion.p
              className="text-white/80 max-w-2xl"
              style={{ fontSize: "16px", lineHeight: "1.8" }}
            >
              Nous connectons les entrepreneurs, startups et institutions pour
              bâtir une Afrique numérique, unie et visionnaire.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-[#FFD700] px-8 py-6 text-[#004AAD] shadow-xl hover:bg-[#FFD700]/90"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                Je rejoins le mouvement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 px-8 py-6 text-white hover:bg-white/10"
                style={{ fontSize: "14px" }}
              >
                Découvrir les entrepreneurs
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-center backdrop-blur"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="mt-1 text-xs text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="rounded-[32px] border border-white/20 bg-white/10 p-4 backdrop-blur shadow-2xl"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <ImageWithFallback
                  src={heroBackground}
                  alt="Communauté Nexus Connect"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center gap-3 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD700] text-[#004AAD] font-extrabold">
                  NX
                </div>
                <div>
                  <p className="text-xs uppercase text-white/60">
                    Nos partenaires
                  </p>
                  <p className="text-lg font-semibold">Croient en nous</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[28px] border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Shield className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#FFD700]">
                    Nos partenaires croient en nous
                  </p>
                  <p className="text-sm text-white/80">
                    Une plateforme soutenue par les institutions béninoises et
                    les investisseurs d'Afrique de l'Ouest.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#FFD700]" />
                  500+ entrepreneurs
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#FFD700]" />
                  Institutions partenaires
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-[#FFD700]/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}

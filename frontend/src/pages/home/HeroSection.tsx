import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Button } from '../../components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useMemo, useRef } from 'react';

const STATS = [
    { label: 'Talents connectés', value: '3' },
    { label: 'Profils certifiés', value: '2' },
    { label: 'Visites mensuelles', value: '0' },
    { label: 'Pays couverts', value: '8' },
];

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
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

    return (
        <section
            ref={ref}
            id="accueil"
            className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#03133c] via-[#03133c]/95 to-[#010a1c] text-white"
        >
            <div className="absolute inset-0">
                <img
                    src="/image/acceuil-nexusconnect-2.jpg"
                    alt="Carte stylisée de l'Afrique connectée"
                    className="h-full w-full object-cover opacity-20"
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#010a1c]/80 via-[#021b3a]/70 to-transparent" />

            <motion.div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 md:flex-row md:items-center" style={{ opacity, scale }}>
                <div className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#ffd700]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
                        <Sparkles className="h-4 w-4" />
                        Vision 2030 Nexus Connect
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                        Et si l’Afrique de l’Ouest devenait le nouveau centre de l’innovation ?
                    </h1>
                    <p className="max-w-xl text-lg text-white/80">
                        Nous connectons les entrepreneurs, startups et institutions pour bâtir une Afrique numérique, unie et visionnaire.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="group rounded-full bg-[#ffd700] px-8 py-4 text-base font-semibold text-[#0d1f44] shadow-lg transition duration-300 hover:-translate-y-1">
                            Je rejoins le mouvement
                            <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" className="rounded-full border-white/50 bg-white/10 px-8 py-4 text-base text-white transition hover:bg-white/20">
                            Découvrir les entrepreneurs
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex flex-1 min-w-[150px] flex-col rounded-3xl border border-white/20 bg-white/10 p-4 sm:min-w-[180px]">
                                <p className="text-3xl font-semibold text-[#ffd700]">{stat.value}</p>
                                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full md:w-2/5">
                    <div className="relative rounded-[40px] border border-white/20 bg-white/5 p-5 backdrop-blur-xl scale-90 md:scale-95">
                        <div className="relative h-72 overflow-hidden rounded-[36px]">
                            <ImageWithFallback
                                src="/image/acceuil-nexusconnect-1.jpg"
                                alt="Écosystème Nexus Connect"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#03133c]/40 via-transparent to-[#ffd700]/20" />
                            {particles.map((particle, index) => (
                                <span
                                    key={index}
                                    className="particle absolute block h-2 w-2 rounded-full bg-white/80"
                                    style={{ left: particle.left, bottom: particle.bottom, animationDelay: particle.delay }}
                                />
                            ))}
                        </div>
                        <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-5 text-white">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#ffd700]">Nos partenaires croient en nous</p>
                            <div className="flex items-center gap-4">
                                <img src="/logo/logo.png" alt="Logo Nexus Connect" className="h-10 w-auto" />
                                <p className="text-sm text-white/80">
                                    Une plateforme soutenue par les institutions béninoises et les investisseurs d’Afrique de l’Ouest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

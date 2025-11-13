import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
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

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFD700 0%, #FFF8E1 100%)",
        perspective: "1000px",
      }}
    >
      {/* Animated Decorative patterns */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border-4 border-[#004AAD]"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border-4 border-[#004AAD] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-[#004AAD]"
          animate={{
            rotate: [0, 45, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="md:col-span-8">
            <motion.h1
              className="text-[#004AAD] mb-6"
              style={{
                fontSize: "48px",
                fontWeight: 800,
                lineHeight: "120%",
                maxWidth: "800px",
              }}
              initial={{ opacity: 0, x: -100, rotateX: 90 }}
              animate={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 8px rgba(0, 74, 173, 0.3)",
              }}
            >
              Et si l'Afrique de l'Ouest devenait le nouveau
              centre de l'innovation ?
            </motion.h1>
            <motion.p
              className="text-[#004AAD]/80 mb-8"
              style={{
                fontSize: "20px",
                maxWidth: "480px",
                lineHeight: "1.6",
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Rejoignez la première vitrine numérique qui
              connecte les talents, les artisans et les startups
              d'Afrique.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                size="lg"
                className="bg-[#004AAD] text-white hover:bg-[#FFD700] hover:text-[#004AAD] transition-all duration-300 rounded-[10px] px-8 py-6 shadow-2xl"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                </motion.div>
                Je rejoins le mouvement
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: 100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute -inset-4 bg-[#004AAD]/10 rounded-3xl"
                animate={{
                  rotate: [3, -3, 3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(-20px)",
                }}
              />
              <motion.div
                whileHover={{
                  boxShadow:
                    "0 30px 60px rgba(0, 74, 173, 0.3)",
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={heroImage}
                  alt="Entrepreneurs africains modernes"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  style={{ transform: "translateZ(40px)" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles effect */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#004AAD]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
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
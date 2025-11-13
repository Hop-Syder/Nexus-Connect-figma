import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonialImages: string[];
}

export function TestimonialsSection({ testimonialImages }: TestimonialsSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  const testimonials: Testimonial[] = [
    {
      name: 'Aminata Diallo',
      role: 'Fondatrice, EcoTech Bénin',
      quote: 'Nexus Connect m\'a permis de trouver mes premiers clients et investisseurs. Une plateforme indispensable pour tout entrepreneur africain.',
      image: testimonialImages[0]
    },
    {
      name: 'Kwame Mensah',
      role: 'CEO, Digital Solutions Ghana',
      quote: 'Grâce à Nexus Connect, j\'ai pu collaborer avec des talents exceptionnels à travers l\'Afrique de l\'Ouest. Un vrai réseau de confiance.',
      image: testimonialImages[1]
    },
    {
      name: 'Fatou Sow',
      role: 'Artisane & Designer, Dakar',
      quote: 'Une vitrine qui valorise vraiment le savoir-faire africain. J\'ai triplé mes commandes en ligne en seulement 6 mois.',
      image: testimonialImages[2]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-[#004AAD]" 
            style={{
              fontSize: '32px',
              fontWeight: 700
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 8px rgba(0, 74, 173, 0.3)"
            }}
          >
            Ils ont cru en Nexus Connect
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -90,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                rotateX: 5,
                z: 50,
                scale: 1.05
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <Card 
                className="bg-white p-8 rounded-3xl border-0 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 74, 173, 0.05) 100%)'
                  }}
                />

                {/* Floating quote icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Quote className="w-16 h-16 text-[#FFD700]" />
                </motion.div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-[#FFD700]/30"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
                    }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.h4 
                    className="text-[#004AAD] mb-1" 
                    style={{
                      fontSize: '18px',
                      fontWeight: 600
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      color: '#FFD700'
                    }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-[#999] mb-6" 
                    style={{
                      fontSize: '14px'
                    }}
                    animate={{ 
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {testimonial.role}
                  </motion.p>
                  <motion.p 
                    className="text-[#333] italic" 
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </div>

                {/* 3D corner decoration */}
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#004AAD]/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ 
                    filter: 'blur(30px)',
                    transformStyle: 'preserve-3d'
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute left-1/4 top-1/2"
          style={{ y }}
        >
          <motion.div
            className="w-3 h-3 bg-[#FFD700] rounded-full"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

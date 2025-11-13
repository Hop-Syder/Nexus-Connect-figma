import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Aïcha Diallo',
    role: 'CEO - Wax & Style',
    location: 'Dakar, Sénégal',
    image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI0MjQ2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: "Grâce à Nexus Connect, j'ai pu développer ma clientèle au-delà de Dakar. Le profil vérifié m'a donné une crédibilité instantanée auprès des boutiques internationales.",
    rating: 5,
  },
  {
    name: 'Kwame Mensah',
    role: 'Fondateur - AgriTech Solutions',
    location: 'Accra, Ghana',
    image: 'https://images.unsplash.com/photo-1758874385393-3ef15b394a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyJTIwbWFufGVufDF8fHx8MTc2MjQyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: "Le tableau de bord et les statistiques m'ont permis de comprendre d'où venaient mes visiteurs. En 3 mois, j'ai triplé mes demandes de devis grâce à l'annuaire.",
    rating: 5,
  },
  {
    name: 'Fatou Bamba',
    role: 'Artisan - Bijouterie Sahel',
    location: 'Cotonou, Bénin',
    image: 'https://images.unsplash.com/photo-1688240817677-d28b8e232dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0aXNhbiUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NjI0MjQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: "Je ne savais pas créer un site web. Avec Nexus, en 5 minutes j'avais un profil professionnel. Les touristes me trouvent facilement maintenant !",
    rating: 5,
  },
];

export function ServiceTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating quote marks */}
      <motion.div
        className="absolute top-20 left-10 text-[#FFD700]/10"
        animate={{
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Quote className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-[#004AAD]/10"
        animate={{
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Quote className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/30"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
            <span className="text-[#004AAD] text-sm" style={{ fontWeight: 700 }}>
              Témoignages clients
            </span>
          </motion.div>

          <motion.h2
            className="text-[#004AAD]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              lineHeight: '120%',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ils ont transformé leur activité avec Nexus
          </motion.h2>

          <motion.p
            className="text-[#333]/80 text-base md:text-lg max-w-2xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Découvrez comment des entrepreneurs ouest-africains ont boosté leur visibilité et leurs ventes.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl bg-gradient-to-br from-white to-[#F7F7F7] p-6 md:p-8 shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: '0 30px 60px rgba(0, 74, 173, 0.2)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                {/* Quote Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD700]/20"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="w-6 h-6 text-[#FFD700]" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p 
                  className="text-[#333]/80 text-sm md:text-base italic"
                  style={{ lineHeight: '1.6' }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <motion.div
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-[#FFD700]/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div>
                    <p 
                      className="text-[#004AAD]"
                      style={{ fontSize: '16px', fontWeight: 700 }}
                    >
                      {testimonial.name}
                    </p>
                    <p className="text-[#333]/70 text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-[#FFD700] text-xs md:text-sm" style={{ fontWeight: 600 }}>
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: '500+', label: 'Entrepreneurs actifs' },
            { value: '95%', label: 'Satisfaction client' },
            { value: '8 pays', label: 'En Afrique de l\'Ouest' },
            { value: '24/7', label: 'Support disponible' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F7F7F7] to-white border border-gray-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div 
                className="text-[#004AAD] mb-2"
                style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800 }}
              >
                {stat.value}
              </div>
              <div className="text-[#333]/70 text-xs md:text-sm" style={{ fontWeight: 600 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

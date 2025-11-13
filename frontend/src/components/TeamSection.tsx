import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { staggerContainer, card3DVariants } from '../utils/animations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const team = [
  {
    name: 'Founder & CEO',
    role: 'Stratégie & Vision',
    quote: 'L\'Afrique ne doit plus être une promesse, mais une réalité entrepreneuriale.',
    image: 'team-ceo',
    linkedin: '#',
    email: 'ceo@nexusconnect.africa',
  },
  {
    name: 'CTO',
    role: 'Innovation Technique',
    quote: 'La technologie au service de l\'humain, pas l\'inverse.',
    image: 'team-cto',
    linkedin: '#',
    email: 'cto@nexusconnect.africa',
  },
  {
    name: 'Head of Partnerships',
    role: 'Écosystème & Relations',
    quote: 'Chaque partenariat est une nouvelle porte ouverte vers l\'excellence.',
    image: 'team-partnerships',
    linkedin: '#',
    email: 'partnerships@nexusconnect.africa',
  },
  {
    name: 'Community Manager',
    role: 'Engagement & Croissance',
    quote: 'Notre communauté est notre plus grande force.',
    image: 'team-community',
    linkedin: '#',
    email: 'community@nexusconnect.africa',
  },
];

export function TeamSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="absolute top-20 right-20 w-56 h-56 border-4 border-[#004AAD] rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 border-4 border-[#FFD700]"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#FFD700]/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              L'ÉQUIPE NEXUS PARTNERS
            </span>
          </motion.div>

          <motion.h2
            className="text-[#004AAD] mb-6"
            style={{
              fontSize: '40px',
              fontWeight: 800,
              lineHeight: '120%',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Les artisans du rêve africain
          </motion.h2>

          <motion.p
            className="text-[#333]/80 max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Une équipe passionnée et diversifiée, unie par la conviction que
            l'Afrique mérite sa place sur la scène mondiale de l'innovation.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={card3DVariants}
              initial="rest"
              whileHover="hover"
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-6 shadow-lg group"
              style={{
                transformStyle: 'preserve-3d',
                opacity: 0,
                y: 100,
                rotateX: -30,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
            >
              {/* Decorative glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#FFD700]/20 to-[#004AAD]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Photo placeholder with 3D effect */}
              <motion.div
                className="relative mb-6 overflow-hidden rounded-xl"
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  z: 30,
                }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="aspect-square bg-gradient-to-br from-[#FFD700]/30 to-[#004AAD]/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${
                      1560250097 + index
                    }748-75774715?w=400&h=400&fit=crop`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#004AAD]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={member.linkedin}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-6 h-6 text-[#004AAD]" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-6 h-6 text-[#FFD700]" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-[#004AAD] mb-1"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  {member.name}
                </h3>

                <p
                  className="text-[#FFD700] mb-4"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  {member.role}
                </p>

                <motion.p
                  className="text-[#333]/80 italic border-l-2 border-[#FFD700] pl-3"
                  style={{ fontSize: '14px', lineHeight: '1.6' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  "{member.quote}"
                </motion.p>
              </div>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#004AAD] rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#FFD700]/10 to-[#004AAD]/10 rounded-2xl p-8"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 74, 173, 0.2)',
            }}
          >
            <p
              className="text-[#004AAD] mb-4"
              style={{ fontSize: '20px', fontWeight: 700 }}
            >
              Vous partagez notre vision ?
            </p>
            <motion.a
              href="mailto:careers@nexusconnect.africa"
              className="inline-block px-8 py-3 bg-[#FFD700] text-[#004AAD] rounded-xl shadow-lg"
              style={{ fontSize: '16px', fontWeight: 600 }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Rejoignez notre équipe
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
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

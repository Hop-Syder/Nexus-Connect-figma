import { motion } from 'motion/react';
import { Users, Globe2, Sparkles } from 'lucide-react';

export function AnnuaireHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background patterns */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#004AAD]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#004AAD]" />
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Annuaire des Professionnels
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#004AAD] mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.2 }}
          >
            Connectez-vous avec les{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#004AAD] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Talents d'Afrique de l'Ouest
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#666] mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            Découvrez des entrepreneurs, freelancers, artisans et experts qualifiés 
            prêts à collaborer sur vos projets à travers l'Afrique de l'Ouest.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <StatItem icon={Users} value="500+" label="Professionnels" delay={0.7} />
            <StatItem icon={Globe2} value="8" label="Pays" delay={0.8} />
            <StatItem icon={Sparkles} value="25+" label="Professions" delay={0.9} />
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 opacity-20"
        style={{
          background: 'repeating-linear-gradient(45deg, #FFD700 0, #FFD700 4px, transparent 4px, transparent 12px)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-20 h-20 opacity-20"
        style={{
          background: 'repeating-linear-gradient(-45deg, #004AAD 0, #004AAD 4px, transparent 4px, transparent 12px)',
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </section>
  );
}

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
}

function StatItem({ icon: Icon, value, label, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 200
      }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center"
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          backgroundColor: 'rgba(255, 215, 0, 0.3)'
        }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-[#004AAD]" />
      </motion.div>
      <div className="text-[#004AAD]" style={{ fontSize: '24px', fontWeight: 700 }}>
        {value}
      </div>
      <div className="text-[#666]" style={{ fontSize: '14px' }}>
        {label}
      </div>
    </motion.div>
  );
}

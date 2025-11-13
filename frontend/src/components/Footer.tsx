import { Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Annuaire', href: '#annuaire' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#004AAD] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-1/4 w-40 h-40 border-4 border-white rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 border-4 border-white"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD700]"
                whileHover={{ 
                  rotate: 360,
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
                }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-[#004AAD]" style={{ fontWeight: 600, fontSize: '20px' }}>N</span>
              </motion.div>
              <span style={{ fontWeight: 600, fontSize: '18px' }}>Nexus Connect</span>
            </motion.div>
            <motion.p 
              className="text-white/80" 
              style={{ fontSize: '14px', lineHeight: '1.6' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              La première vitrine numérique qui connecte les talents et entrepreneurs d'Afrique de l'Ouest.
            </motion.p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-[#FFD700] transition-colors inline-block" 
                    style={{ fontSize: '14px' }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <motion.li 
                className="text-white/80" 
                style={{ fontSize: '14px' }}
                whileHover={{ x: 5 }}
              >
                Email: contact@nexusconnect.bj
              </motion.li>
              <motion.li 
                className="text-white/80" 
                style={{ fontSize: '14px' }}
                whileHover={{ x: 5 }}
              >
                Tél: +229 XX XX XX XX
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
              >
                <a 
                  href="https://wa.me/229XXXXXXXX" 
                  className="flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors" 
                  style={{ fontSize: '14px' }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </motion.div>
                  WhatsApp Business
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 4 - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: '#FFD700',
                      color: '#004AAD',
                      rotate: 360,
                      y: -5,
                      boxShadow: '0 10px 25px rgba(255, 215, 0, 0.4)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-white/80 flex items-center justify-center gap-2 flex-wrap" style={{ fontSize: '14px' }}>
            © 2025 Nexus Connect – Développé avec 
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <Heart className="h-4 w-4 text-[#FFD700] fill-current" />
            </motion.span>
            au Bénin par Nexus Partners
          </p>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </footer>
  );
}

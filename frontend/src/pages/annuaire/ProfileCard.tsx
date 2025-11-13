import { motion } from 'motion/react';
import { Mail, MessageCircle, Eye, Star, MapPin, Crown, Sparkles, Zap } from 'lucide-react';
import { Profile } from './types';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

interface ProfileCardProps {
  profile: Profile;
  index: number;
}

export function ProfileCard({ profile, index }: ProfileCardProps) {
  // Calcul des étoiles
  const fullStars = Math.floor(profile.rating);
  const hasHalfStar = profile.rating % 1 >= 0.5;

  // Badge de tier
  const tierConfig = {
    free: { 
      icon: null, 
      color: 'bg-gray-100 text-gray-700 border-gray-200',
      label: 'Gratuit'
    },
    freemium: { 
      icon: Sparkles, 
      color: 'bg-blue-50 text-[#004AAD] border-blue-200',
      label: 'Freemium'
    },
    premium: { 
      icon: Crown, 
      color: 'bg-[#FFD700]/20 text-[#004AAD] border-[#FFD700]',
      label: 'Premium'
    },
  };

  const tierInfo = tierConfig[profile.tier];
  const TierIcon = tierInfo.icon;

  // Badge de statut
  const statusLabels = {
    entreprise: 'Entreprise',
    pme: 'PME',
    mpe: 'MPE',
    'agence-cabinet': 'Agence',
    ong: 'ONG',
    freelancer: 'Freelancer',
    artisan: 'Artisan',
    etudiant: 'Étudiant',
    benevole: 'Bénévole',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Premium Glow Effect */}
        {profile.tier === 'premium' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#004AAD]/10 pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}

        {/* New Member Badge */}
        {profile.isNewMember && (
          <motion.div
            className="absolute top-3 right-3 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: index * 0.1 + 0.3
            }}
          >
            <div className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-xs shadow-lg">
              <Zap className="w-3 h-3" />
              <span style={{ fontWeight: 600 }}>Nouveau</span>
            </div>
          </motion.div>
        )}

        {/* Tier Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${tierInfo.color} shadow-sm`}>
            {TierIcon && <TierIcon className="w-3 h-3" />}
            <span style={{ fontWeight: 600 }}>{tierInfo.label}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 pt-14">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-[#004AAD] mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>
              {profile.title}
            </h3>
            <p className="text-[#333]" style={{ fontSize: '15px', fontWeight: 600 }}>
              {profile.name}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4 text-[#666]">
            <MapPin className="w-4 h-4 text-[#FFD700]" />
            <span style={{ fontSize: '14px' }}>
              {profile.city}, {profile.country}
            </span>
          </div>

          {/* Status Badge */}
          <div className="mb-4">
            <Badge variant="outline" className="text-xs border-[#004AAD]/30 text-[#004AAD]">
              {statusLabels[profile.status]}
            </Badge>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.tags.slice(0, 3).map((tag, i) => (
              <motion.div
                key={tag}
                className="px-3 py-1 bg-[#F7F7F7] rounded-lg text-[#333]"
                style={{ fontSize: '12px', fontWeight: 500 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#FFD700',
                  color: '#004AAD'
                }}
                transition={{ duration: 0.2 }}
              >
                #{tag}
              </motion.div>
            ))}
            {profile.tags.length > 3 && (
              <div className="px-3 py-1 bg-[#004AAD]/10 rounded-lg text-[#004AAD]" style={{ fontSize: '12px', fontWeight: 600 }}>
                +{profile.tags.length - 3}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < fullStars
                      ? 'fill-[#FFD700] text-[#FFD700]'
                      : i === fullStars && hasHalfStar
                      ? 'fill-[#FFD700]/50 text-[#FFD700]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              {profile.rating.toFixed(1)}
            </span>
            <span className="text-[#666]" style={{ fontSize: '13px' }}>
              ({profile.reviewCount} avis)
            </span>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2">
            <motion.a
              href={`https://wa.me/${profile.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-1 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group/btn"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 text-xs" style={{ fontWeight: 600 }}>
                WhatsApp
              </span>
            </motion.a>

            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-1 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group/btn"
            >
              <Mail className="w-5 h-5 text-[#004AAD]" />
              <span className="text-[#004AAD] text-xs" style={{ fontWeight: 600 }}>
                Email
              </span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-1 p-3 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 rounded-xl transition-colors group/btn"
            >
              <Eye className="w-5 h-5 text-[#004AAD]" />
              <span className="text-[#004AAD] text-xs" style={{ fontWeight: 600 }}>
                Voir profil
              </span>
            </motion.button>
          </div>
        </div>

        {/* Decorative Pattern */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 opacity-5 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(45deg, #004AAD 0, #004AAD 2px, transparent 2px, transparent 8px)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </motion.div>
  );
}

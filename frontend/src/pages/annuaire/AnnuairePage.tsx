import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { AnnuaireHero } from './AnnuaireHero';
import { SearchBar } from './SearchBar';
import { Filters } from './Filters';
import { ProfileCard } from './ProfileCard';
import { AfricanPatterns } from './AfricanPatterns';
import { FilterState } from './types';
import { MOCK_PROFILES } from './mockData';
import { SEO } from '../../components/SEO';

export function AnnuairePage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    countries: [],
    statuses: [],
    tags: [],
    newMembers: false,
    tiers: [],
  });

  // Filter logic
  const filteredProfiles = useMemo(() => {
    return MOCK_PROFILES.filter(profile => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          profile.name.toLowerCase().includes(searchLower) ||
          profile.title.toLowerCase().includes(searchLower) ||
          profile.city.toLowerCase().includes(searchLower) ||
          profile.country.toLowerCase().includes(searchLower) ||
          profile.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Country filter
      if (filters.countries.length > 0 && !filters.countries.includes(profile.country)) {
        return false;
      }

      // Status filter
      if (filters.statuses.length > 0 && !filters.statuses.includes(profile.status)) {
        return false;
      }

      // Tags/Professions filter
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => profile.tags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      // New members filter
      if (filters.newMembers && !profile.isNewMember) {
        return false;
      }

      // Tier filter
      if (filters.tiers.length > 0 && !filters.tiers.includes(profile.tier)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <>
      <SEO 
        title="Annuaire des Entrepreneurs - Nexus Connect | Trouvez Votre Partenaire Business"
        description="Découvrez 500+ entrepreneurs, artisans et startups d'Afrique de l'Ouest. Recherche par pays, secteur, profession. Connectez-vous avec des partenaires business qualifiés."
        keywords="annuaire entrepreneurs afrique, professionnels afrique ouest, partenaires business afrique, réseau entrepreneurs, recherche entreprises africaines, startups afrique"
        url="/#annuaire"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-[#F7F7F7] to-white relative">
        {/* African Patterns Background */}
        <AfricanPatterns />
        
        <AnnuaireHero />

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Search Bar */}
            <div className="mb-8 max-w-4xl mx-auto">
              <SearchBar value={filters.search} onChange={(value) => setFilters({ ...filters, search: value })} />
            </div>

            {/* Layout: Filters + Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <Filters filters={filters} onChange={setFilters} />
              </div>

              {/* Profiles Grid */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6 flex items-center justify-between"
                >
                  <div>
                    <h2 className="text-[#004AAD] mb-1" style={{ fontSize: '24px', fontWeight: 700 }}>
                      {filteredProfiles.length} Professionnel{filteredProfiles.length > 1 ? 's' : ''}
                    </h2>
                    <p className="text-[#666]" style={{ fontSize: '14px' }}>
                      Trouvez le partenaire idéal pour votre projet
                    </p>
                  </div>
                </motion.div>

                {/* Profiles Grid */}
                {filteredProfiles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProfiles.map((profile, index) => (
                      <ProfileCard key={profile.id} profile={profile} index={index} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-20"
                  >
                    <div className="max-w-md mx-auto">
                      <div className="w-24 h-24 bg-[#F7F7F7] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-6xl">🔍</span>
                      </div>
                      <h3 className="text-[#004AAD] mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                        Aucun résultat trouvé
                      </h3>
                      <p className="text-[#666]" style={{ fontSize: '16px' }}>
                        Essayez d'ajuster vos filtres ou votre recherche pour trouver plus de professionnels.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #004AAD 0, #004AAD 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #FFD700 0, #FFD700 2px, transparent 2px, transparent 10px)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-[#004AAD] mb-6" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800 }}>
                Rejoignez Notre Communauté
              </h2>
              <p className="text-[#666] mb-8" style={{ fontSize: '18px', lineHeight: 1.7 }}>
                Créez votre profil dès aujourd'hui et connectez-vous avec des milliers de professionnels 
                à travers l'Afrique de l'Ouest.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FFD700] text-[#004AAD] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                Créer Mon Profil Gratuitement
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
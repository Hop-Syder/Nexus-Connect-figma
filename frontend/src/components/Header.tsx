import { Globe, Menu, X, Home, Briefcase, Users, Eye, Target, BookOpen, UserPlus, Network, TrendingUp, GraduationCap, Search, ShoppingBag, Package, Store } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#') && href.length > 1) {
      const page = href.slice(1);
      if (page === 'home' || page === 'services' || page === 'annuaire' || page === 'marketplace') {
        window.location.hash = page;
      }
    }
  };

  const menuItems = [
    {
      name: 'Accueil',
      href: '#home',
      icon: Home,
      subItems: [
        { name: 'Vision & Mission', href: '#home', icon: Target, description: 'Notre raison d\'être' },
        { name: 'Notre Histoire', href: '#home', icon: BookOpen, description: 'Le parcours de Nexus' },
        { name: 'Notre Équipe', href: '#home', icon: Users, description: 'Les visages derrière Nexus' },
      ]
    },
    {
      name: 'Services',
      href: '#services',
      icon: Briefcase,
      subItems: [
        { name: 'Connexion Réseau', href: '#services', icon: Network, description: 'Élargissez votre réseau' },
        { name: 'Accompagnement Business', href: '#services', icon: TrendingUp, description: 'Développez votre activité' },
        { name: 'Formation', href: '#services', icon: GraduationCap, description: 'Montez en compétences' },
      ]
    },
    {
      name: 'Annuaire',
      href: '#annuaire',
      icon: Users,
      subItems: [
        { name: 'Découvrir les profils', href: '#annuaire', icon: Eye, description: 'Parcourez les membres' },
        { name: 'Créer mon profil', href: '#annuaire', icon: UserPlus, description: 'Rejoignez la communauté' },
        { name: 'Recherche avancée', href: '#annuaire', icon: Search, description: 'Trouvez des partenaires' },
      ]
    },
    {
      name: 'Marketplace',
      href: '#marketplace',
      icon: ShoppingBag,
      subItems: [
        { name: 'Explorer le Catalogue', href: '#marketplace', icon: Package, description: 'Découvrez nos produits' },
        { name: 'Vendre sur Nexus', href: '#marketplace', icon: Store, description: 'Créez votre boutique' },
        { name: 'Opportunités B2B', href: '#marketplace', icon: TrendingUp, description: 'Connexions commerciales' },
      ]
    },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl transition-all duration-300"
      style={{
        boxShadow: scrolled ? '0 10px 30px rgba(0, 74, 173, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD700]"
              whileHover={{ 
                rotateY: 360,
                boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)'
              }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="text-[#004AAD]" style={{ fontWeight: 600, fontSize: '18px' }}>N</span>
            </motion.div>
            <span className="text-[#004AAD]" style={{ fontWeight: 600, fontSize: '16px' }}>Nexus Connect</span>
          </motion.a>

          {/* Navigation Desktop avec sous-menus */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger 
                    className="text-[#333] bg-transparent hover:bg-transparent hover:text-[#004AAD] data-[state=open]:bg-transparent data-[state=open]:text-[#004AAD]"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {item.subItems.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(subItem.href);
                                }}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F7F7F7] hover:text-[#004AAD] focus:bg-accent focus:text-accent-foreground group cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD700]/20 group-hover:bg-[#FFD700]/40 transition-colors">
                                    <SubIcon className="h-5 w-5 text-[#004AAD]" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[13px] font-semibold leading-none text-[#004AAD]">
                                      {subItem.name}
                                    </div>
                                    <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground mt-1">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA and Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher - Desktop only */}
            <motion.button 
              className="hidden md:flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                boxShadow: '0 4px 12px rgba(0, 74, 173, 0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="h-4 w-4 text-[#004AAD]" />
            </motion.button>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                className="bg-[#FFD700] text-[#004AAD] hover:bg-[#FFD700]/90 rounded-[10px] shadow-lg hover:shadow-xl h-9 px-4"
                style={{ fontWeight: 600, fontSize: '13px' }}
              >
                Créer mon profil
              </Button>
            </motion.div>

            {/* Hamburger Menu Button - Mobile */}
            <motion.button
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full bg-[#F7F7F7]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-[#004AAD]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-[#004AAD]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-gray-100 z-10">
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#FFD700]">
                      <span className="text-[#004AAD]" style={{ fontWeight: 600, fontSize: '16px' }}>N</span>
                    </div>
                    <span className="text-[#004AAD]" style={{ fontWeight: 600, fontSize: '15px' }}>Nexus Connect</span>
                  </motion.div>
                  
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center h-9 w-9 rounded-full bg-[#F7F7F7]"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-4 w-4 text-[#004AAD]" />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Items with Sub-Items */}
              <nav className="px-6 py-6">
                <div className="space-y-1">
                  {menuItems.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.1 + index * 0.05,
                          type: 'spring',
                          stiffness: 300,
                          damping: 25
                        }}
                      >
                        {/* Menu principal */}
                        <div className="mb-2">
                          <div className="flex items-center gap-3 px-3 py-3 text-[#004AAD] border-b border-[#FFD700]/30">
                            <ItemIcon className="h-5 w-5" />
                            <span style={{ fontSize: '14px', fontWeight: 700 }}>{item.name}</span>
                          </div>
                          
                          {/* Sous-menus */}
                          <div className="mt-1 space-y-1 pl-3">
                            {item.subItems.map((subItem, subIndex) => {
                              const SubIcon = subItem.icon;
                              return (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(subItem.href);
                                  }}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F7F7F7] transition-colors group cursor-pointer"
                                  initial={{ opacity: 0, x: 30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    delay: 0.15 + index * 0.05 + subIndex * 0.03,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 25
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700]/20 group-hover:bg-[#FFD700]/40 transition-colors">
                                    <SubIcon className="h-4 w-4 text-[#004AAD]" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[#333] group-hover:text-[#004AAD] transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
                                      {subItem.name}
                                    </div>
                                    <div className="text-[#666]" style={{ fontSize: '11px' }}>
                                      {subItem.description}
                                    </div>
                                  </div>
                                </motion.a>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Menu Footer Actions */}
                <motion.div 
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* CTA Button */}
                  <motion.button
                    className="w-full px-5 py-3.5 bg-[#FFD700] text-[#004AAD] rounded-xl shadow-lg flex items-center justify-center gap-2"
                    style={{ fontWeight: 600, fontSize: '14px' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Créer mon profil</span>
                  </motion.button>

                  {/* Language Switcher */}
                  <motion.button
                    className="w-full px-5 py-3 bg-[#F7F7F7] text-[#004AAD] rounded-xl flex items-center justify-center gap-2"
                    style={{ fontWeight: 600, fontSize: '13px' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Globe className="h-4 w-4" />
                    <span>Français 🇫🇷</span>
                  </motion.button>
                </motion.div>

                {/* Mobile Menu Stats */}
                <motion.div
                  className="mt-6 pt-5 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-[#004AAD]" style={{ fontSize: '18px', fontWeight: 700 }}>500+</div>
                      <div className="text-[#666]" style={{ fontSize: '11px' }}>Entrepreneurs</div>
                    </div>
                    <div>
                      <div className="text-[#004AAD]" style={{ fontSize: '18px', fontWeight: 700 }}>8</div>
                      <div className="text-[#666]" style={{ fontSize: '11px' }}>Pays</div>
                    </div>
                    <div>
                      <div className="text-[#004AAD]" style={{ fontSize: '18px', fontWeight: 700 }}>95%</div>
                      <div className="text-[#666]" style={{ fontSize: '11px' }}>Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

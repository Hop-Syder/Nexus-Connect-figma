# 🚀 Guide de Développement - Page Services

## 📋 Vue d'ensemble

Ce guide détaille comment développer la page Services complète de Nexus Connect avec toutes ses sections, animations 3D Motion et responsivité mobile.

---

## 🎯 Objectif

Créer une page Services immersive et convaincante qui :
- Présente les 6 services principaux
- Explique le processus en 4 étapes
- Affiche 3 packs tarifaires
- Inclut des témoignages clients
- Se termine par un CTA puissant

---

## 📁 Structure des Composants

```
/pages/services/
├── ServicesPage.tsx         ✅ Container principal (créé)
├── ServiceHero.tsx          🚧 À créer
├── ServiceCards.tsx         🚧 À créer (6 services)
├── ServiceProcess.tsx       🚧 À créer (4 étapes)
├── ServicePricing.tsx       🚧 À créer (3 packs)
├── ServiceTestimonials.tsx  🚧 À créer (carousel)
├── ServiceCTA.tsx           🚧 À créer
└── ServiceFAQ.tsx           📅 Optionnel
```

---

## 🎨 Design System

### Couleurs
```tsx
const colors = {
  primary: '#FFD700',    // Jaune or (CTA, accents)
  secondary: '#004AAD',  // Bleu profond (titres)
  white: '#FFFFFF',      // Clarté
  bg: '#F7F7F7',        // Arrière-plans
  success: '#4ADE80',   // Vert (check icons)
};
```

### Typographie
- **Titres** : Poppins (Bold/ExtraBold)
- **Corps** : Inter (Regular/Medium)

### Breakpoints
```tsx
sm: 640px   // Mobile large
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

---

## 🏗️ Sections à Développer

### 1. ServiceHero
**Fichier** : `ServiceHero.tsx`

**Contenu** :
- Titre principal : "Des services taillés sur mesure..."
- Sous-titre explicatif
- Image panoramique d'entrepreneurs
- 2 boutons CTA
- Particules flottantes (15-20)

**Animations** :
```tsx
- Titre : rotateX 90° → 0°
- Image : rotateY -90° → 0°
- Particules : y: [0, -100, 0]
```

**Responsive** :
```tsx
// Layout
className="grid grid-cols-1 lg:grid-cols-2 gap-8"

// Titre
fontSize: clamp(28px, 5vw, 48px)

// Boutons
className="w-full sm:w-auto"
```

---

### 2. ServiceCards (6 services)
**Fichier** : `ServiceCards.tsx`

**Services à inclure** :
1. Création de Sites Web IA-Driven (Monitor icon)
2. Dashboard de Gestion PME (BarChart3)
3. Marketplace & Projets Collaboratifs (Globe)
4. Annuaire Professionnel Vérifié (Users)
5. Formation & Mentorat Tech (GraduationCap)
6. Pack Startup Complet (Rocket) ⭐ PLUS POPULAIRE

**Structure de carte** :
```tsx
<motion.div
  className="bg-white rounded-2xl p-6 md:p-8"
  whileHover={{
    y: -15,
    rotateY: 5,
    rotateX: 5,
    scale: 1.05,
  }}
>
  {/* Icône animée (rotation 360° au hover) */}
  {/* Titre */}
  {/* Description */}
  {/* Liste à puces (3-4 points clés) */}
  {/* Prix */}
  {/* Bouton "Commander →" */}
</motion.div>
```

**Grille responsive** :
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
```

---

### 3. ServiceProcess (4 étapes)
**Fichier** : `ServiceProcess.tsx`

**Étapes** :
1. 🔍 Découverte - Explorez nos services
2. 💬 Consultation - Échangez avec l'équipe
3. ⚡ Réalisation - Création de votre solution
4. 🚀 Lancement - Mise en ligne + formation

**Layout** :
- Desktop : Horizontale avec ligne de connexion
- Mobile : Verticale avec ligne à gauche

```tsx
// Timeline verticale mobile
<div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-[#FFD700]/30" />

// Timeline horizontale desktop
<div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#FFD700]/30" />
```

**Numéros circulaires** :
```tsx
<motion.div
  className="w-16 h-16 md:w-20 md:h-20 rounded-full"
  style={{
    borderColor: index % 2 === 0 ? '#FFD700' : '#004AAD',
  }}
  whileHover={{ scale: 1.1, rotate: 360 }}
>
  0{index + 1}
</motion.div>
```

---

### 4. ServicePricing (3 packs)
**Fichier** : `ServicePricing.tsx`

**Packs** :

**Pack Starter** (150 000 FCFA)
- Site web 5 pages
- Hébergement 1 an
- Support email
- Formation de base

**Pack Croissance** ⭐ RECOMMANDÉ (350 000 FCFA)
- Tout du Starter
- Dashboard de gestion
- Profil vérifié
- Support prioritaire
- 3 mois mentorat

**Pack Entreprise** (Sur devis)
- Tout du Croissance
- Développement sur-mesure
- Intégrations API
- Support 24/7
- Mentorat illimité

**Design carte centrale** :
```tsx
className={pack.featured ? 'lg:scale-110 lg:z-10' : ''}
```

**Animation compteur prix** :
```tsx
import { useInView } from 'motion/react';
import { useEffect, useState } from 'react';

const [count, setCount] = useState(0);
const isInView = useInView(ref);

useEffect(() => {
  if (isInView) {
    // Count-up animation
    const timer = setInterval(() => {
      setCount(prev => prev < target ? prev + increment : target);
    }, 50);
    return () => clearInterval(timer);
  }
}, [isInView]);
```

---

### 5. ServiceTestimonials (Carousel)
**Fichier** : `ServiceTestimonials.tsx`

**Bibliothèque** : `react-slick`

```bash
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
```

**Settings** :
```tsx
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { 
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};
```

**Témoignages exemples** :
1. Aïcha Diallo, CEO - Wax & Style (Sénégal) ⭐⭐⭐⭐⭐
2. Kwame Mensah, Fondateur - AgriTech Solutions (Ghana) ⭐⭐⭐⭐⭐
3. Fatou Bamba, Artisan - Bijouterie Sahel (Bénin) ⭐⭐⭐⭐⭐

---

### 6. ServiceCTA (Final)
**Fichier** : `ServiceCTA.tsx`

**Contenu** :
- Titre : "Prêt à propulser votre entreprise ?"
- Sous-titre : "Rejoignez les 500+ entrepreneurs..."
- 2 boutons :
  - ✨ Créer mon profil gratuitement (jaune, principal)
  - 📞 Parler à un conseiller (outline bleu)
- 3 badges stats en grille 2x2 sur mobile :
  - 👥 500+ clients satisfaits
  - ⭐ 95% de satisfaction
  - 🌍 Présent dans 8 pays

**Background** :
```tsx
className="bg-gradient-to-br from-[#FFD700]/20 to-[#004AAD]/10"
```

**Particules adaptatives** :
```tsx
{[...Array(window.innerWidth < 768 ? 8 : 20)].map(...)}
```

---

## 🎬 Animations Motion Systématiques

### Template d'entrée de section
```tsx
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
```

### Hover 3D standard
```tsx
whileHover={{
  y: -10,
  rotateY: 5,
  rotateX: 5,
  scale: 1.05,
  boxShadow: '0 30px 60px rgba(0, 74, 173, 0.3)',
}}
transition={{ duration: 0.3 }}
style={{ transformStyle: 'preserve-3d' }}
```

### Particules flottantes
```tsx
{[...Array(15)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
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
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: "easeInOut",
    }}
  />
))}
```

### Formes géométriques
```tsx
// Carré en rotation
<motion.div
  className="absolute top-20 right-20 w-32 h-32 border-4 border-[#004AAD]/20"
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

// Cercle pulsant
<motion.div
  className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#FFD700]/10"
  animate={{
    scale: [1, 1.3, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
/>
```

---

## 📱 Checklist Responsive

Pour **chaque** composant, vérifier :

- [ ] Container : `px-4 md:px-6 lg:px-8`
- [ ] Spacing : `py-12 md:py-20 lg:py-32`
- [ ] Grilles : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- [ ] Titres : `text-2xl md:text-4xl lg:text-5xl` OU `clamp(28px, 5vw, 48px)`
- [ ] Textes : `text-sm md:text-base lg:text-lg`
- [ ] Boutons : `w-full sm:w-auto`
- [ ] Images : `w-full h-auto object-cover`
- [ ] Particules : Réduire nombre sur mobile
- [ ] Touch feedback : `whileTap={{ scale: 0.98 }}`
- [ ] Viewport trigger : `viewport={{ margin: "-50px" }}`

---

## 🧪 Tests à Effectuer

### Fonctionnels
- [ ] Toutes les animations se déclenchent au scroll
- [ ] Hover fonctionne sur desktop
- [ ] Tap feedback sur mobile
- [ ] Images se chargent avec fallback
- [ ] Carousel swipe sur mobile
- [ ] Boutons navigables au clavier

### Responsive
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile large (428px - iPhone 14 Pro Max)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1440px)
- [ ] Large desktop (1920px)

### Performance
- [ ] Animations fluides (60 fps)
- [ ] Pas de layout shift (CLS < 0.1)
- [ ] Images optimisées (WebP si possible)
- [ ] Lazy loading des sections

---

## 📦 Dépendances Nécessaires

```json
{
  "dependencies": {
    "motion": "latest",
    "lucide-react": "latest",
    "react-slick": "latest",
    "slick-carousel": "latest"
  }
}
```

**Import icons** :
```tsx
import { 
  Monitor, 
  BarChart3, 
  Globe, 
  Users, 
  GraduationCap, 
  Rocket,
  Search,
  MessageSquare,
  Zap,
  Sparkles,
} from 'lucide-react';
```

---

## 🚀 Commandes de Développement

### Créer un nouveau composant
```bash
# Exemple : ServiceHero
touch pages/services/ServiceHero.tsx
```

### Structure de base d'un composant
```tsx
import { motion } from 'motion/react';

export function ServiceHero() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Contenu */}
      </div>
      
      {/* Particules */}
      {/* Formes décoratives */}
    </section>
  );
}
```

### Intégrer dans ServicesPage.tsx
```tsx
import { ServiceHero } from './ServiceHero';

export function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      {/* Autres sections */}
    </main>
  );
}
```

---

## 📚 Ressources

- [Prompt complet page Services](../../guidelines/Guidelines.md)
- [Motion Documentation](https://motion.dev/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Slick](https://react-slick.neostack.com/)

---

## ✅ Workflow de Développement

1. **Lire ce guide** ✓
2. **Créer ServiceHero.tsx**
3. **Créer ServiceCards.tsx**
4. **Créer ServiceProcess.tsx**
5. **Créer ServicePricing.tsx**
6. **Créer ServiceTestimonials.tsx**
7. **Créer ServiceCTA.tsx**
8. **Assembler dans ServicesPage.tsx**
9. **Tester responsive**
10. **Activer route dans App.tsx**

---

**Bon développement ! 🚀**

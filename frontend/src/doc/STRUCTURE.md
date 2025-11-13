# 🏗️ Nexus Connect - Structure du Projet

## 📊 Vue d'ensemble

```
nexus-connect/
├── 📄 App.tsx                    # Point d'entrée principal + router
├── 📄 STRUCTURE.md               # Ce fichier
│
├── 📁 pages/                     # 🆕 NOUVELLE ARCHITECTURE MODULAIRE
│   ├── 📄 README.md              # Documentation de l'architecture
│   │
│   ├── 📁 home/                  # ✅ Page d'accueil
│   │   ├── 📄 index.ts           # Barrel exports
│   │   ├── 📄 HomePage.tsx       # Container orchestrateur
│   │   ├── 📄 HeroSection.tsx
│   │   ├── 📄 VisionMissionSection.tsx
│   │   ├── 📄 ValuesSection.tsx
│   │   ├── 📄 StorySection.tsx
│   │   ├── 📄 AboutSection.tsx
│   │   ├── 📄 ServicesSection.tsx
│   │   ├── 📄 TeamSection.tsx
│   │   ├── 📄 RSESection.tsx
│   │   ├── 📄 TestimonialsSection.tsx
│   │   └── 📄 CTASection.tsx
│   │
│   ├── 📁 services/              # 🚧 Page Services (en développement)
│   │   ├── 📄 index.ts
│   │   ├── 📄 DEVELOPMENT_GUIDE.md  # Guide complet de dev
│   │   ├── 📄 ServicesPage.tsx   # Container (placeholder)
│   │   ├── 🔲 ServiceHero.tsx    # À créer
│   │   ├── 🔲 ServiceCards.tsx   # À créer
│   │   ├── 🔲 ServiceProcess.tsx # À créer
│   │   ├── 🔲 ServicePricing.tsx # À créer
│   │   ├── 🔲 ServiceTestimonials.tsx  # À créer
│   │   └── 🔲 ServiceCTA.tsx     # À créer
│   │
│   └── 📁 shared/                # ✅ Composants partagés entre pages
│       ├── 📄 index.ts
│       ├── 📄 Header.tsx          # Menu responsive + hamburger mobile
│       ├── 📄 Footer.tsx
│       └── 📄 MobileFixedCTA.tsx  # Bouton fixe qui apparaît au scroll
│
├── 📁 components/                # ⚠️ ANCIENS COMPOSANTS (à migrer)
│   ├── 📁 figma/
│   │   └── 📄 ImageWithFallback.tsx  # Composant système protégé
│   │
│   └── 📁 ui/                    # Shadcn/ui components
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 accordion.tsx
│       ├── 📄 carousel.tsx
│       ├── 📄 dialog.tsx
│       └── ... (40+ composants UI)
│
├── 📁 utils/
│   └── 📄 animations.ts          # Variantes d'animations Motion
│
├── 📁 styles/
│   └── 📄 globals.css            # Tokens Tailwind + thème
│
├── 📁 guidelines/
│   └── 📄 Guidelines.md          # Spécifications design
│
└── 📄 Attributions.md            # Crédits Unsplash
```

---

## 🎯 Principe de l'Architecture

### **Pages Modulaires**
Chaque page = 1 dossier avec tous ses composants spécifiques.

### **Avantages**
- ✅ **Organisation claire** : Facile de trouver les composants d'une page
- ✅ **Scalabilité** : Ajouter une page = créer un dossier
- ✅ **Maintenance** : Modifier une page sans toucher aux autres
- ✅ **Lazy Loading** : Charger uniquement ce qui est nécessaire
- ✅ **Équipe** : Plusieurs devs peuvent travailler en parallèle

---

## 📂 Détail des Dossiers

### `/pages/home/` ✅
**Rôle** : Page d'accueil complète de Nexus Connect

**Composants** :
- `HomePage.tsx` - Container qui orchestre toutes les sections
- `HeroSection.tsx` - Hero avec gradient jaune, animations 3D
- `VisionMissionSection.tsx` - Vision Afrique de l'Ouest + carte gradient
- `ValuesSection.tsx` - 4 valeurs en cartes 3D
- `StorySection.tsx` - Histoire du roi Guézo (jarre trouée)
- `AboutSection.tsx` - À propos + carte Afrique
- `ServicesSection.tsx` - Aperçu des 3 services
- `TeamSection.tsx` - Équipe fondatrice
- `RSESection.tsx` - Engagements RSE + ODD
- `TestimonialsSection.tsx` - Témoignages avec photos
- `CTASection.tsx` - CTA final "Rejoignez le mouvement"

**État** : ✅ Tous les composants créés (re-exports depuis `/components`)

---

### `/pages/services/` 🚧
**Rôle** : Page dédiée aux services de Nexus Connect

**Composants prévus** :
1. **ServiceHero** - Hero de la page avec titre + image
2. **ServiceCards** - 6 services en grille 3 colonnes :
   - Création de Sites Web IA
   - Dashboard PME
   - Marketplace
   - Annuaire Vérifié
   - Formation & Mentorat
   - Pack Startup Complet ⭐
3. **ServiceProcess** - Timeline 4 étapes (Découverte → Consultation → Réalisation → Lancement)
4. **ServicePricing** - 3 packs tarifaires (Starter, Croissance ⭐, Entreprise)
5. **ServiceTestimonials** - Carousel react-slick avec témoignages
6. **ServiceCTA** - CTA final + badges stats

**État** : 🚧 ServicesPage.tsx placeholder créé  
**Guide** : `/pages/services/DEVELOPMENT_GUIDE.md`

---

### `/pages/shared/` ✅
**Rôle** : Composants utilisés sur toutes les pages

**Composants** :
- `Header.tsx` - Menu desktop + hamburger mobile avec animations
- `Footer.tsx` - Footer avec liens + réseaux sociaux
- `MobileFixedCTA.tsx` - Bouton "✨ Créer mon profil" fixe en bas (mobile only)

**État** : ✅ Tous créés (re-exports depuis `/components`)

---

### `/components/ui/` ✅
**Rôle** : Composants UI génériques (Shadcn/ui)

**40+ composants** dont :
- button, card, dialog, accordion
- carousel, tabs, tooltip
- form, input, select
- table, chart
- etc.

**État** : ✅ Prêts à l'emploi  
**Important** : Ne **PAS** modifier ces fichiers, les étendre si besoin

---

### `/components/figma/` 🔒
**Rôle** : Composants système Figma

- `ImageWithFallback.tsx` - Composant protégé pour images avec fallback

**État** : 🔒 **PROTÉGÉ - NE PAS MODIFIER**

---

## 🔄 Migration en Cours

### Phase 1 : Structure ✅
- [x] Créer `/pages/home/`, `/pages/services/`, `/pages/shared/`
- [x] Créer containers (HomePage, ServicesPage)
- [x] Créer re-exports temporaires
- [x] Mettre à jour App.tsx

### Phase 2 : Home 🚧
- [ ] Migrer physiquement HeroSection vers `/pages/home/`
- [ ] Migrer VisionMissionSection
- [ ] Migrer toutes les autres sections
- [ ] Supprimer anciens fichiers de `/components/`

### Phase 3 : Services 📅
- [ ] Développer ServiceHero
- [ ] Développer ServiceCards (6 services)
- [ ] Développer ServiceProcess
- [ ] Développer ServicePricing
- [ ] Développer ServiceTestimonials
- [ ] Développer ServiceCTA
- [ ] Activer route dans App.tsx

### Phase 4 : Autres Pages 📅
- [ ] Créer `/pages/about/`
- [ ] Créer `/pages/blog/`
- [ ] Créer `/pages/contact/`

### Phase 5 : Routing 📅
- [ ] Implémenter React Router
- [ ] Lazy loading des pages
- [ ] Transitions entre pages

---

## 🚀 Comment Utiliser

### Import d'une page
```tsx
import { HomePage } from './pages/home';
// OU
import { HomePage } from './pages/home/HomePage';
```

### Import d'un composant shared
```tsx
import { Header, Footer } from './pages/shared';
```

### Import d'un composant UI
```tsx
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
```

### Import d'une section spécifique
```tsx
import { HeroSection } from './pages/home';
```

---

## 📊 Statistiques

### Composants Home
- **10 sections** avec animations 3D Motion
- **~2500 lignes** de code total
- **100% responsive** (mobile → desktop)

### Composants Services (à développer)
- **6 sections** prévues
- **Estimation** : ~2000 lignes
- **Délai** : 2-3 jours de dev

### Composants Shared
- **3 composants** principaux
- **Menu mobile** avec slide-in animation
- **CTA fixe** avec scroll trigger

---

## 🎨 Standards de Code

### Imports
```tsx
// Bibliothèques externes
import { motion } from 'motion/react';
import { Monitor } from 'lucide-react';

// Composants UI
import { Button } from '../../components/ui/button';

// Composants locaux
import { ServiceCards } from './ServiceCards';

// Utils
import { fadeIn } from '../../utils/animations';
```

### Composant type
```tsx
import { motion } from 'motion/react';

interface Props {
  title: string;
}

export function MySection({ title }: Props) {
  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
      </div>
    </section>
  );
}
```

---

## 🔗 Liens Utiles

- [Guide de développement Services](/pages/services/DEVELOPMENT_GUIDE.md)
- [Documentation architecture](/pages/README.md)
- [Guidelines design](/guidelines/Guidelines.md)
- [Prompt complet Services](voir le prompt fourni dans le contexte)

---

## 👥 Équipe

**Mainteneurs** : Équipe Nexus Connect  
**Stack** : React + TypeScript + Tailwind + Motion  
**Version** : 1.0.0  
**Dernière MAJ** : Novembre 2025

---

**🚀 Prêt à construire la page Services ? Consultez `/pages/services/DEVELOPMENT_GUIDE.md` !**

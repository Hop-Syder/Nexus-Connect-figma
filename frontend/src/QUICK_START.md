# 🚀 Quick Start - Nexus Connect

Guide rapide pour démarrer avec le projet Nexus Connect.

## 📦 Installation Rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:5173
```

## 🗺️ Navigation

### Pages Disponibles

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Accueil | `/` ou `#home` | Page d'accueil avec vision et services |
| ⚡ Services | `#services` | Catalogue de services et tarification |
| 📂 Annuaire | `#annuaire` | Recherche de professionnels |

### Navigation dans le Code

```tsx
// Naviguer vers une page
window.location.hash = 'annuaire';

// Ou via lien HTML
<a href="#services">Services</a>
```

## 📂 Structure Simplifiée

```
nexus-connect/
├── App.tsx                    # Point d'entrée
├── pages/
│   ├── home/                  # 🏠 Page accueil
│   │   └── HomePage.tsx
│   ├── services/              # ⚡ Page services
│   │   └── ServicesPage.tsx
│   ├── annuaire/              # 📂 Page annuaire (NOUVEAU)
│   │   ├── AnnuairePage.tsx   # Composant principal
│   │   ├── SearchBar.tsx      # Barre de recherche
│   │   ├── Filters.tsx        # Filtres avancés
│   │   ├── ProfileCard.tsx    # Carte de profil
│   │   └── mockData.ts        # Données exemples
│   └── shared/                # Composants partagés
│       ├── Header.tsx         # Navigation (refait)
│       └── Footer.tsx
└── components/
    ├── ui/                    # Composants Shadcn
    └── PageTransition.tsx     # Loader entre pages
```

## 🎨 Thème et Couleurs

### Palette Principale

```css
/* Jaune Or - CTA et accents */
#FFD700

/* Bleu Profond - Titres et confiance */
#004AAD

/* Blanc - Clarté */
#FFFFFF

/* Gris Doux - Arrière-plans */
#F7F7F7
```

### Utilisation dans le Code

```tsx
// Tailwind classes
className="bg-[#FFD700] text-[#004AAD]"

// Style inline
style={{ color: '#004AAD', fontWeight: 600 }}
```

## 🔧 Composants Clés

### 1. Page Annuaire (NOUVEAU)

```tsx
import { AnnuairePage } from './pages/annuaire/AnnuairePage';

// Utilisation
<AnnuairePage />
```

**Features** :
- Recherche intelligente
- Filtres multi-critères
- 10 profils exemples
- Responsive complet

### 2. Header Navigation

```tsx
import { Header } from './pages/shared/Header';

// Utilisation
<Header />
```

**Features** :
- Menu desktop horizontal
- Menu mobile slide-in
- Scroll lock sur mobile
- Animations fluides

### 3. ProfileCard

```tsx
import { ProfileCard } from './pages/annuaire/ProfileCard';

// Utilisation
<ProfileCard profile={profileData} index={0} />
```

**Props** :
- `profile` : Données du profil
- `index` : Pour animations en cascade

## 🎯 Cas d'Usage Courants

### Ajouter un Nouveau Profil

```tsx
// Dans mockData.ts
export const NEW_PROFILE: Profile = {
  id: '11',
  name: 'VOTRE NOM',
  title: 'Votre Titre',
  city: 'Votre Ville',
  country: 'Bénin',
  tags: ['Profession 1', 'Profession 2'],
  rating: 4.5,
  reviewCount: 50,
  status: 'freelancer',
  tier: 'premium',
  whatsapp: '+229XXXXXXXX',
  email: 'email@example.com',
  isNewMember: true,
  joinDate: new Date(),
};

// Ajouter à MOCK_PROFILES
export const MOCK_PROFILES = [...existingProfiles, NEW_PROFILE];
```

### Ajouter une Nouvelle Profession

```tsx
// Dans mockData.ts
export const AVAILABLE_PROFESSIONS = [
  ...existingProfessions,
  'Nouvelle Profession',
];
```

### Personnaliser les Filtres

```tsx
// Dans Filters.tsx
const countries: Country[] = [
  ...existingCountries,
  'Niger', // Nouveau pays
];
```

## 🎨 Personnalisation du Style

### Modifier les Couleurs Globales

```css
/* Dans styles/globals.css */
:root {
  --primary: #004AAD;
  --accent: #FFD700;
  --background: #F7F7F7;
}
```

### Ajouter des Animations

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu animé
</motion.div>
```

## 📱 Test Responsive

### Méthode 1 : DevTools

```
1. F12 pour ouvrir DevTools
2. Ctrl + Shift + M pour mode responsive
3. Tester différentes tailles :
   - Mobile : 375px
   - Tablet : 768px
   - Desktop : 1440px
```

### Méthode 2 : Vraie Device

```
1. npm run dev -- --host
2. Noter l'IP locale (ex: 192.168.1.10:5173)
3. Ouvrir sur mobile/tablet
```

## 🐛 Débogage Rapide

### Menu Mobile Ne S'Ouvre Pas

```tsx
// Vérifier dans Header.tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Vérifier le bouton
<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
```

### Filtres Ne Fonctionnent Pas

```tsx
// Vérifier dans AnnuairePage.tsx
const [filters, setFilters] = useState<FilterState>({...});

// Vérifier le passage des props
<Filters filters={filters} onChange={setFilters} />
```

### Animations Saccadées

```tsx
// Activer GPU acceleration
className="transform-gpu"

// Ou dans le style
style={{ willChange: 'transform' }}
```

## 🔥 Tips & Tricks

### 1. Raccourcis de Navigation

```tsx
// Changer de page rapidement
window.location.hash = 'annuaire'; // Page annuaire
window.location.hash = 'services'; // Page services
window.location.hash = 'home';     // Page accueil
```

### 2. Reset des Filtres

```tsx
// Dans le composant Filters
const clearFilters = () => {
  onChange({
    search: '',
    countries: [],
    statuses: [],
    tags: [],
    newMembers: false,
    tiers: [],
  });
};
```

### 3. Ajouter des Logs de Debug

```tsx
// Voir les filtres actifs
console.log('Filtres actuels:', filters);

// Voir les profils filtrés
console.log('Profils trouvés:', filteredProfiles.length);
```

## 📚 Ressources Utiles

### Documentation Externe

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Motion (Framer Motion)](https://motion.dev)
- [Shadcn/UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

### Documentation Interne

- `README.md` - Vue d'ensemble
- `PROJECT_STATUS.md` - État du projet
- `STRUCTURE.md` - Architecture
- `/pages/annuaire/README.md` - Doc annuaire

## ❓ FAQ

### Q: Comment ajouter une nouvelle page ?

```tsx
// 1. Créer le dossier
/pages/nouvelle-page/

// 2. Créer le composant principal
export function NouvellePage() { ... }

// 3. Ajouter la route dans App.tsx
if (hash === 'nouvelle-page') {
  setCurrentPage('nouvelle-page');
}

// 4. Ajouter au menu dans Header.tsx
{ name: 'Nouvelle', href: '#nouvelle-page' }
```

### Q: Comment modifier le nombre de colonnes de la grille ?

```tsx
// Dans AnnuairePage.tsx, modifier la className
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
  {/* 1 col mobile, 2 tablet, 4 desktop */}
</div>
```

### Q: Comment changer les emojis du menu ?

```tsx
// Dans Header.tsx
const menuItems = [
  { name: 'Accueil', href: '#home', emoji: '🏠' }, // Changer ici
];
```

## ✅ Checklist Avant de Commit

- [ ] Code compilé sans erreur
- [ ] Testé sur mobile et desktop
- [ ] Pas de console.log oubliés
- [ ] Documentation à jour
- [ ] Animations fluides
- [ ] Responsive vérifié

## 🎉 Vous Êtes Prêt !

Vous avez maintenant tout ce qu'il faut pour travailler sur Nexus Connect. 

**Bon code ! 🚀**

---

**Besoin d'aide ?** Consultez les autres fichiers de documentation ou contactez l'équipe.

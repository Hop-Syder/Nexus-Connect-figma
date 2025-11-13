# 🌍 Nexus Connect - Vitrine Numérique d'Afrique de l'Ouest

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)

## 📖 À Propos

**Nexus Connect** est une plateforme web moderne et immersive qui connecte les entrepreneurs, artisans, freelancers et startups à travers l'Afrique de l'Ouest. Le projet fusionne innovation technologique et fierté culturelle africaine à travers une expérience utilisateur exceptionnelle en 3D.

### 🎯 Mission
Créer un écosystème numérique qui facilite la collaboration, le networking et la croissance professionnelle en Afrique de l'Ouest.

### 🌟 Vision
Devenir la plateforme de référence pour les professionnels africains cherchant à collaborer, innover et prospérer ensemble.

## ✨ Fonctionnalités Principales

### 🏠 Page d'Accueil
- Hero section immersive avec animations 3D
- Présentation de la vision pan-africaine
- Services offerts
- Valeurs et équipe
- Témoignages clients
- Section RSE

### ⚡ Page Services
- Catalogue complet de services
- Tarification transparente (3 formules)
- Témoignages sectoriels
- CTA de conversion

### 📂 Page Annuaire (Nouveau)
- **Recherche intelligente** en temps réel
- **Filtrage avancé** par :
  - Pays (8 pays d'Afrique de l'Ouest)
  - Statut (9 types de profils)
  - Profession (25+ domaines)
  - Type d'abonnement (Gratuit/Freemium/Premium)
  - Nouveaux inscrits
- **10 profils exemples** avec évaluations
- **Contact direct** via WhatsApp ou Email
- **Responsive** sur tous les appareils

## 🎨 Design

### Palette de Couleurs
| Couleur | Hex | Usage |
|---------|-----|-------|
| 🟡 Jaune Or | `#FFD700` | CTA, accents, excellence |
| 🔵 Bleu Profond | `#004AAD` | Titres, confiance |
| ⚪ Blanc | `#FFFFFF` | Clarté, espace |
| ⬜ Gris Doux | `#F7F7F7` | Arrière-plans |

### Typographies
- **Poppins** (600-800) : Titres et headers
- **Inter** (400-600) : Corps de texte

### Motifs Africains
- 🟨 **Kente** : Patterns diagonaux
- 🔷 **Adinkra** : Symboles circulaires
- 🟫 **Bogolan** : Zigzag traditionnels
- 🔶 **Géométrique** : Formes polygonales

## 🛠️ Stack Technique

### Frontend
- **React 18+** : Bibliothèque UI
- **TypeScript 5+** : Typage statique
- **Tailwind CSS 4.0** : Styling moderne
- **Motion (Framer Motion)** : Animations 3D
- **Shadcn/UI** : Composants réutilisables
- **Lucide React** : Icônes SVG

### Architecture
```
/
├── App.tsx                    # Point d'entrée principal
├── pages/
│   ├── home/                  # Page d'accueil
│   ├── services/              # Page services
│   ├── annuaire/              # Page annuaire
│   └── shared/                # Composants partagés
├── components/
│   ├── ui/                    # Composants Shadcn
│   └── PageTransition.tsx     # Loader de transition
├── styles/
│   └── globals.css            # Styles globaux
└── utils/
    └── animations.ts          # Utilitaires d'animation
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone https://github.com/votre-repo/nexus-connect.git

# Installer les dépendances
cd nexus-connect
npm install

# Lancer le serveur de développement
npm run dev
```

### Build Production
```bash
npm run build
```

## 📱 Responsive Design

### Breakpoints
- 📱 **Mobile** : < 768px
- 📱 **Tablet** : 768px - 1024px
- 💻 **Desktop** : > 1024px

### Adaptations
- Menu mobile slide-in
- Grilles flexibles (1/2/3 colonnes)
- Typographies fluides (clamp)
- Touch-friendly interfaces

## 🌍 Couverture Géographique

### Pays Ciblés
1. 🇧🇯 **Bénin** - Cotonou, Porto-Novo
2. 🇳🇬 **Nigeria** - Lagos, Abuja
3. 🇸🇳 **Sénégal** - Dakar, Saint-Louis
4. 🇨🇮 **Côte d'Ivoire** - Abidjan, Yamoussoukro
5. 🇬🇭 **Ghana** - Accra, Kumasi
6. 🇹🇬 **Togo** - Lomé, Kara
7. 🇲🇱 **Mali** - Bamako, Sikasso
8. 🇧🇫 **Burkina Faso** - Ouagadougou, Bobo-Dioulasso

## 💼 Types de Profils

### Statuts Disponibles
- 🏢 **Entreprise** - Grandes structures
- 🏭 **PME** - Petites et Moyennes Entreprises
- 🏪 **MPE** - Micro Petites Entreprises
- 🏛️ **Agence/Cabinet** - Services professionnels
- 🤝 **ONG** - Organisations non gouvernementales
- 👨‍💻 **Freelancer** - Indépendants
- 🎨 **Artisan** - Créateurs et artisans
- 🎓 **Étudiant** - En formation
- 💚 **Bénévole** - Engagement social

### Abonnements
| Tier | Prix | Features |
|------|------|----------|
| 🆓 **Gratuit** | 0 FCFA | Profil de base, visibilité limitée |
| ⭐ **Freemium** | 5,000 FCFA/mois | + Fonctionnalités avancées |
| 👑 **Premium** | 15,000 FCFA/mois | VIP, visibilité maximale |

## 🎯 Roadmap

### ✅ Phase 1 : MVP (Complétée)
- [x] Page d'accueil
- [x] Page services
- [x] Page annuaire
- [x] Navigation responsive
- [x] Animations 3D

### 🔄 Phase 2 : Expansion (En cours)
- [ ] Backend Supabase
- [ ] Authentification
- [ ] Profils détaillés
- [ ] Messagerie interne
- [ ] Page Marketplace

### 🔮 Phase 3 : Évolution (Futur)
- [ ] Application mobile
- [ ] Système de paiement
- [ ] API publique
- [ ] Analytics avancées
- [ ] Certification professionnelle

## 📊 Performances

### Métriques
- ⚡ **Lighthouse Score** : 95+
- 🎨 **Animations** : 60 FPS
- 📦 **Bundle Size** : < 500KB
- ⏱️ **Load Time** : < 2s

### Optimisations
- Code splitting par page
- Lazy loading des images
- Memoization React
- GPU-accelerated animations

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines
- Respecter la charte graphique
- Maintenir l'identité africaine
- Tester sur tous les devices
- Documenter les nouveaux composants

## 📝 Documentation

### Fichiers Principaux
- 📄 `README.md` - Ce fichier
- 📊 `PROJECT_STATUS.md` - État du projet
- 📋 `UPDATES.md` - Journal des mises à jour
- 🏗️ `STRUCTURE.md` - Architecture détaillée
- 🧭 `NAVIGATION.md` - Guide de navigation

### Documentation par Page
- 🏠 `/pages/home/README.md`
- ⚡ `/pages/services/README.md`
- 📂 `/pages/annuaire/README.md`

## 📞 Contact

### Équipe Nexus Connect
- 🌐 **Site Web** : nexusconnect.africa
- 📧 **Email** : contact@nexusconnect.africa
- 💬 **WhatsApp** : +229 97 XX XX XX
- 🐦 **Twitter** : @NexusConnectAfrica
- 📘 **Facebook** : /NexusConnectAfrica

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

Merci à tous les contributeurs, designers et développeurs qui ont rendu ce projet possible. Un remerciement spécial à la communauté tech africaine pour son inspiration continue.

---

<div align="center">

**Fait avec ❤️ en Afrique de l'Ouest**

🌍 **Nexus Connect** - *Connecter l'Afrique, Un Professionnel à la Fois*

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile !

</div>

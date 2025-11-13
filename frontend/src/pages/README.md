# 📁 Structure des Pages - Nexus Connect

## 🏗️ Architecture Modulaire par Page

Cette nouvelle structure organise le code par **pages** plutôt que par types de composants, facilitant la maintenance et l'évolution du projet.

---

## 📂 Structure des Dossiers

```
/pages
├── /home                    # Page d'accueil
│   ├── HomePage.tsx         # Container principal (orchestrateur)
│   ├── HeroSection.tsx      # Hero avec animations 3D
│   ├── VisionMissionSection.tsx
│   ├── ValuesSection.tsx
│   ├── StorySection.tsx     # Histoire du roi Guézo
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx  # Aperçu des services
│   ├── TeamSection.tsx
│   ├── RSESection.tsx
│   ├── TestimonialsSection.tsx
│   └── CTASection.tsx
│
├── /services                # Page Services (à développer)
│   ├── ServicesPage.tsx     # Container principal
│   ├── ServiceHero.tsx      # (à créer)
│   ├── ServiceCards.tsx     # 6 cartes de services
│   ├── ServiceProcess.tsx   # 4 étapes
│   ├── ServicePricing.tsx   # Tableau de pricing
│   ├── ServiceTestimonials.tsx
│   └── ServiceCTA.tsx
│
└── /shared                  # Composants partagés
    ├── Header.tsx           # Header avec menu mobile
    ├── Footer.tsx
    └── MobileFixedCTA.tsx   # Bouton fixe mobile
```

---

## 🎯 Principes de l'Architecture

### 1. **Séparation par Page**
Chaque page a son propre dossier avec tous ses composants spécifiques.

### 2. **Container Pattern**
Chaque page a un composant principal (ex: `HomePage.tsx`) qui :
- Importe et orchestre les sections
- Gère les données (images, props)
- Définit l'ordre d'affichage

### 3. **Composants Partagés**
Les composants utilisés sur plusieurs pages (Header, Footer) sont dans `/shared`.

### 4. **Réutilisabilité**
Les composants UI génériques restent dans `/components/ui/`.

---

## 🚀 Comment Ajouter une Nouvelle Page

### Exemple : Créer une page "Blog"

1. **Créer le dossier**
   ```
   /pages/blog/
   ```

2. **Créer le container**
   ```tsx
   // /pages/blog/BlogPage.tsx
   import { BlogHero } from './BlogHero';
   import { BlogList } from './BlogList';
   
   export function BlogPage() {
     return (
       <main>
         <BlogHero />
         <BlogList />
       </main>
     );
   }
   ```

3. **Créer les composants de la page**
   ```tsx
   // /pages/blog/BlogHero.tsx
   export function BlogHero() {
     return <section>...</section>;
   }
   
   // /pages/blog/BlogList.tsx
   export function BlogList() {
     return <section>...</section>;
   }
   ```

4. **Ajouter la route dans App.tsx**
   ```tsx
   import { BlogPage } from './pages/blog/BlogPage';
   
   // Dans le router
   {currentPage === 'blog' && <BlogPage />}
   ```

---

## 📝 Conventions de Nommage

### Pages
- `NomPage.tsx` (PascalCase avec "Page" suffix)
- Exemple : `HomePage.tsx`, `ServicesPage.tsx`

### Sections
- `NomSection.tsx` (PascalCase avec "Section" suffix)
- Exemple : `HeroSection.tsx`, `ServiceCards.tsx`

### Composants Partagés
- Pas de suffix spécifique
- Exemple : `Header.tsx`, `Footer.tsx`

---

## 🔄 Migration en Cours

### ✅ Fait
- [x] Structure `/pages` créée
- [x] Dossier `/home` avec tous les composants (re-exports temporaires)
- [x] Dossier `/shared` avec Header, Footer, MobileFixedCTA
- [x] `HomePage.tsx` comme container
- [x] `ServicesPage.tsx` placeholder créé
- [x] App.tsx mis à jour pour utiliser la nouvelle structure

### 🚧 En Cours
- [ ] Migrer physiquement les composants de `/components` vers `/pages/home`
- [ ] Développer la page Services complète

### 📅 À Faire
- [ ] Créer page "À propos" dédiée
- [ ] Créer page "Blog"
- [ ] Créer page "Contact"
- [ ] Implémenter React Router pour navigation SPA
- [ ] Ajouter lazy loading des pages

---

## 🛠️ Technologies

- **React** - Composants
- **Motion** (Framer Motion) - Animations 3D
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

---

## 📖 Utilisation

### Import d'une page
```tsx
import { HomePage } from './pages/home/HomePage';
```

### Import d'un composant partagé
```tsx
import { Header } from './pages/shared/Header';
```

### Import d'un composant UI
```tsx
import { Button } from './components/ui/button';
```

---

## 🎨 Style Guide

Toutes les pages et sections doivent respecter :
- **Palette** : #FFD700 (jaune), #004AAD (bleu), #FFFFFF, #F7F7F7
- **Animations Motion 3D** systématiques
- **Responsive** : mobile-first
- **Accessibility** : ARIA labels, keyboard navigation

---

## 🔗 Liens Utiles

- [Documentation Motion](https://motion.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prompt complet Page Services](../guidelines/Guidelines.md)

---

**Dernière mise à jour** : Novembre 2025  
**Mainteneur** : Équipe Nexus Connect

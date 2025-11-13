# Page Annuaire - Nexus Connect

## 📋 Vue d'ensemble

La page Annuaire est une plateforme moderne de découverte et de connexion avec des professionnels à travers l'Afrique de l'Ouest. Elle permet aux utilisateurs de rechercher, filtrer et contacter des entrepreneurs, freelancers, artisans et experts qualifiés.

## 🎨 Composants

### AnnuairePage.tsx
Composant principal qui orchestre toute la page avec la logique de filtrage et l'affichage des profils.

### AnnuaireHero.tsx
Section hero avec titre animé, statistiques et effets visuels immersifs.

### SearchBar.tsx
Barre de recherche avec effet de glow et animations fluides.

### Filters.tsx
Système de filtres avancés avec :
- Filtres par pays (8 pays d'Afrique de l'Ouest)
- Filtres par statut (entreprise, PME, MPE, agence, ONG, freelancer, artisan, étudiant, bénévole)
- Filtres par professions (25+ professions disponibles)
- Filtre par type d'abonnement (gratuit, freemium, premium)
- Toggle pour les nouveaux membres
- Interface responsive avec modal mobile

### ProfileCard.tsx
Carte de profil avec :
- Badge de tier (gratuit/freemium/premium)
- Badge "Nouveau" pour les inscrits récents
- Informations de localisation
- Tags de profession (avec limite d'affichage)
- Système d'évaluation en étoiles
- Boutons d'action (WhatsApp, Email, Voir profil)
- Animations 3D au survol
- Motifs décoratifs africains

### types.ts
Définitions TypeScript pour tous les types de données.

### mockData.ts
- 10 profils exemples avec données variées
- Liste de 25+ professions disponibles
- Profils variés (free, freemium, premium)

## 🎯 Fonctionnalités

### Recherche intelligente
- Recherche par nom, titre, localisation ou profession
- Mise à jour en temps réel des résultats

### Filtrage multi-critères
- Combinaison de plusieurs filtres simultanément
- Compteur de filtres actifs
- Bouton de réinitialisation rapide

### Système de tier
- **Gratuit** : Profil de base
- **Freemium** : Profil avec fonctionnalités supplémentaires
- **Premium** : Profil VIP avec effet de glow doré

### Responsive Design
- Desktop : Sidebar de filtres à gauche, grille 3 colonnes
- Tablet : Grille 2 colonnes
- Mobile : Modal de filtres plein écran, grille 1 colonne

## 🌍 Pays couverts

1. Bénin
2. Nigeria
3. Sénégal
4. Côte d'Ivoire
5. Ghana
6. Togo
7. Mali
8. Burkina Faso

## 💼 Statuts disponibles

- Entreprise
- PME (Petite et Moyenne Entreprise)
- MPE (Micro Petite Entreprise)
- Agence/Cabinet
- ONG (Organisation Non Gouvernementale)
- Freelancer
- Artisan
- Étudiant
- Bénévole

## 🎨 Design System

### Couleurs
- Primaire : `#004AAD` (Bleu profond)
- Accent : `#FFD700` (Jaune or)
- Fond : `#F7F7F7` (Gris doux)
- Texte : `#333` et `#666`

### Animations
- Parallaxe au scroll
- Rotations 3D au survol
- Transitions fluides
- Effets de glow pour les profils premium
- Animations des badges et boutons

## 📱 Navigation

L'annuaire est accessible via :
- Hash routing : `#annuaire`
- Menu principal (desktop et mobile)

## 🚀 Améliorations futures possibles

- Pagination des résultats
- Tri par pertinence, note, date d'inscription
- Sauvegarde des favoris
- Export de profils en PDF
- Partage de profils sur les réseaux sociaux
- Système de messagerie intégré
- Notifications pour nouveaux profils

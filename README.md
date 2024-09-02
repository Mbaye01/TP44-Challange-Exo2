# Gestion Recette

## Description

Le projet vise à développer une application de gestion de recettes, puis à la déployer sur Vercel et DockerHub. Les fonctionnalités de l'application permettent aux utilisateurs d'ajouter, modifier, supprimer, et afficher des recettes de cuisine. La conteneurisation avec Docker est utilisée pour assurer un déploiement flexible et reproductible.

## Fonctionnalités

- **AjouterRecette** : Permet d'ajouter de nouvelles recettes.
- **ModifierRecette** : Permet de modifier des recettes existantes.
- **Listerrecette** : Permet de lister toutes les recettes.

## Installation

### Prérequis

- Node.js (version 14.x ou supérieure)
- Vue.js 3
- Bootstrap 5.x (inclus dans le projet)

### Étapes d'installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Mbaye01/TP44-Challange-Exo2.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd TP44-Challange-Exo2
   ```

3. Installez les dépendances :

   Avec NPM :

   ```bash
   npm install
   ```

4. Lancez l'application en mode développement :

   Avec NPM :

   ```bash
   npm run dev
   ```

5. Ouvrez votre navigateur et accédez à ` http://localhost:5176/` pour voir l'application.

## Utilisation

### Navigation dans l'application

- Utilisez la barre de navigation pour accéder aux différentes sections de l'application (Liste des recettes, Ajouter recettes).
- Cliquez sur les boutons pour ajouter, modifier ou supprimer des éléments.

### Configuration Vue Router

L'application utilise Vue Router pour gérer la navigation entre les différentes sections. Les routes sont définies dans le fichier `router/index.js` et incluent :

## Composants

`Reipe`

- RecipForm
- RecipList

**Views**

- AddRecip : Permet d'ajouter des recettes.
- EditRecip : permet de modifiuer des recettes
- HomeViews : Affiche la liste des recettes
- Notfound : Affiche une page d'erreur si l'élément ou le composant n'existe pas.
- RecipDetail : Permet de voir les détails d'une recette.

## Authors

[Mbaye Abdellahi kalidou](https://github.com/Mbaye01/TP44-Challange-Exo2.git)

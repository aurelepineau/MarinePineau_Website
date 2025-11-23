# Marine Pineau - Facilitatrice de Coopération

Ce projet est le site web personnel de Marine Pineau, Facilitatrice de Coopération. Il est développé avec **Next.js**, **React**, **Tailwind CSS** et **Framer Motion**.

## 🚀 Démarrage Rapide

1.  **Installation des dépendances :**

    ```bash
    npm install
    # ou
    yarn install
    ```

2.  **Lancer le serveur de développement :**

    ```bash
    npm run dev
    ```

    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

- **`src/app`** : Pages et layout principal (Next.js App Router).
- **`src/components`** : Composants réutilisables (UI, sections, etc.).
  - `sections/` : Les différentes sections de la page d'accueil.
- **`src/lib/content.ts`** : **Fichier central pour le texte et le contenu du site.**
- **`public`** : Images et assets statiques.

## ✏️ Modifier le Contenu

Tout le texte du site est centralisé dans le fichier `src/lib/content.ts`.
Pour modifier un titre, une description ou un témoignage, éditez simplement ce fichier. Le site se mettra à jour automatiquement.

Exemple :

```typescript
export const content = {
  hero: {
    title: "ENSEMBLE",
    // ...
  },
  // ...
};
```

## 🛠 Technologies

- [Next.js 15+](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Styles utilitaires
- [Framer Motion](https://www.framer.com/motion/) - Animations fluides
- [Lucide React](https://lucide.dev/) - Icônes

## 📦 Déploiement

Le site est optimisé pour être déployé sur [Vercel](https://vercel.com).

1.  Poussez votre code sur un dépôt Git (GitHub, GitLab, etc.).
2.  Importez le projet dans Vercel.
3.  Le déploiement se lance automatiquement.

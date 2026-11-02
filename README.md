# ENI-Promo

Application web responsive permettant de découvrir les apprenants d'une promotion, de consulter leurs profils et de visualiser leur répartition géographique.

Ce projet pédagogique a été développé dans le cadre de la formation **Développeur Web et Web Mobile (DWWM)**.

## Technologies utilisées

- **HTML5** : structure sémantique des pages.
- **CSS3** : mise en page responsive, composants et thèmes visuels.
- **JavaScript (Vanilla JS)** : interactions et manipulation du DOM.
- **JSON** : représentation des données des apprenants.
- **Leaflet et OpenStreetMap** : affichage de la carte interactive.
- **localStorage** : sauvegarde des préférences utilisateur.
- **Git** : gestion des versions et des branches de développement.

Le projet ne nécessite aucun framework JavaScript ni outil de compilation.

## Fonctionnalités

- Présentation des 23 apprenants fictifs de la promotion.
- Recherche, filtrage et tri des apprenants.
- Affichage des apprenants en liste ou en cartes.
- Consultation des profils dans une fenêtre modale.
- Carte interactive avec marqueurs géographiques.
- Personnalisation du thème clair ou sombre.
- Conservation des préférences utilisateur dans le navigateur.
- Navigation responsive avec menu mobile accessible au clavier.
- Page Informations proposant des ressources pédagogiques.

## Installation et lancement

1. Cloner le dépôt Git sur son ordinateur.
2. Ouvrir le dossier du projet dans Visual Studio Code.
3. Installer ou utiliser l'extension **Live Server**.
4. Ouvrir `index.html` avec Live Server.
5. Naviguer dans l'application depuis le navigateur.

Aucune installation de dépendances avec npm n'est nécessaire.

## Organisation du projet

```text
eni-promo/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── images/
│   │   ├── avatars/
│   │   └── icons/
│   └── js/
│       ├── coordinates.js
│       ├── data.js
│       ├── main.js
│       ├── map.js
│       ├── modal.js
│       ├── navigation.js
│       ├── preferences.js
│       ├── students.js
│       └── theme.js
├── data/
│   └── promo.json
├── tests/
│   ├── coordinates.test.js
│   └── index.html
├── index.html
├── students.html
├── map.html
├── preferences.html
├── information.html
├── .gitignore
└── README.md
```

## Tests et qualité

Des vérifications manuelles ont été réalisées sur :

- La recherche, le filtrage et le tri des apprenants.
- L'ouverture et la fermeture des fenêtres modales.
- Le fonctionnement de la carte interactive.
- La persistance des préférences avec `localStorage`.
- La navigation au clavier.
- L'adaptation des pages aux formats mobile, tablette et ordinateur.

Des audits **Google Lighthouse** ont également été effectués sur les cinq pages.

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---:|---:|---:|---:|
| Accueil | 100 | 100 | 100 | 100 |
| Apprenants | 100 | 100 | 100 | 100 |
| Carte | 100 | 92 | 100 | 100 |
| Préférences | 100 | 100 | 100 | 100 |
| Informations | 100 | 100 | 100 | 100 |

Ces résultats correspondent aux audits réalisés en environnement local. Ils peuvent varier selon les conditions d'exécution.

## Accessibilité

L'application intègre plusieurs bonnes pratiques :

- Utilisation de balises HTML sémantiques.
- Navigation au clavier.
- Indicateurs de focus visibles.
- Attributs ARIA pour certains composants interactifs.
- Prise en compte de la préférence `prefers-reduced-motion`.
- Adaptation des couleurs aux thèmes clair et sombre.

**Amélioration identifiée :** poursuivre les vérifications d'accessibilité de la carte interactive et de ses contrôles.

## Contexte pédagogique

Ce projet permet de mettre en pratique les compétences de développement d'interfaces web, notamment :

- Structurer des pages HTML.
- Concevoir des interfaces adaptatives avec CSS.
- Développer des interactions en JavaScript.
- Manipuler des données JSON.
- Utiliser une bibliothèque cartographique.
- Tester et améliorer la qualité d'une application web.
- Organiser son travail avec Git.

## Licence

Projet réalisé à des fins pédagogiques. Les données des apprenants sont fictives.
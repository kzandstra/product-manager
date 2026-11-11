# 🚀 Parcours Product Owner — Formation Complète & Outil Interactif

Application web interactive (100 % hors-ligne, sans dépendance serveur) conçue pour suivre le **Parcours Product Owner** et préparer la certification **PSPO I (Professional Scrum Product Owner I)**.

Ce parcours complet regroupe environ **116 heures de cours** et **330 heures au total** (incluant la réalisation des livrables de projets), structuré en **9 modules**, **94 pages/leçons** et **18 quiz interactifs**.

---

## ✨ Fonctionnalités de l'outil

- **📖 Navigation séquentielle et structurée** : Sommaire rabattable par projets et parties, fil d'Ariane, navigation rapide avec les boutons *Précédent / Suivant* ou les raccourcis clavier (`Alt + ←` et `Alt + →`).
- **🎯 Moteur de Quiz interactif** :
  - Prise en charge des questions à choix unique et à choix multiples.
  - Objectif de réussite adapté (**80 %** sur les cours généraux, **85 %** sur les modules liés au *Scrum Guide* et à la certification PSPO I).
  - Corrigés officiels masqués par défaut (accordéon activable à la demande) et explications détaillées après validation.
  - Validation automatique de la leçon et animation de confettis lorsque le seuil de réussite est atteint.
- **⏱️ Chronomètre intégré** : Minuteur dédié (15 minutes par défaut, avec contrôles Démarrer / Pause / Réinitialiser et alerte visuelle) pour les examens blancs PSPO I.
- **📋 Checklists de livrables interactives** : Cases à cocher directement dans les pages de livrables et d'exercices pour suivre l'avancement concret de ton portefeuille de PO.
- **🔍 Recherche et filtres instantanés** : Filtrage du sommaire par mot-clé ou par statut (*Tous*, *Quiz*, *Livrables*, *À faire*, *Validés*).
- **💾 Sauvegarde automatique (`localStorage`)** : Toute ta progression (leçons terminées, réponses et scores aux quiz, cases cochées, thème choisi, dernière page consultée) est enregistrée localement dans le navigateur sous la clé `PO_CURRICULUM_STATE_V1`.
- **🌗 Thème Sombre / Clair** : Bascule instantanée entre le mode sombre (par défaut) et le mode clair pour un confort de lecture optimal.

---

## 🗺️ Structure du programme

Le parcours s'articule autour de **7 projets professionnalisants** accompagnés d'un guide méthodologique et de ressources de référence :

| Module | Thème | Cours (h) | Temps projet total (h) | Semaines (temps plein) |
| :--- | :--- | :---: | :---: | :---: |
| **Intro** | Mode d'emploi du parcours & utilisation de Claude | — | — | — |
| **Projet 1** | Intégrer une veille efficace à ton quotidien de PO (Esprit critique) | 6 h | 57 h | 1,5 |
| **Projet 2** | Cadrer le développement agile d'un produit (Mindset agile & Roadmap) | 24 h | 60 h | 1,5 |
| **Projet 3** | Se préparer à la certification PSPO I (Apprentissage, Temps & Scrum Guide) | 16 h | 40 h | 1 |
| **Projet 4** | Optimiser le Product Backlog (User Stories, INVEST, Gherkin, Refinement) | 26 h | 60 h | 1,5 |
| **Projet 5** | Piloter la livraison et les correctifs dans un projet Agile à l'échelle | 18 h | 80 h | 2 |
| **Projet 6** | Co-construire une vision produit avec les parties prenantes (UX, Discovery) | 26 h | 80 h | 2 |
| **Projet 7** | Obtenir la certification PSPO I (Stratégie d'examen & Examens blancs) | 8 h | 10 h | 0,5 |
| **Sources** | Bibliographie et ressources officielles | — | — | — |

---

## 🚀 Démarrage rapide

Aucune installation ni étape de compilation (build) n'est requise :

1. Clone ou télécharge ce dossier sur ton ordinateur.
2. Ouvre simplement le fichier **`index.html`** dans n'importe quel navigateur moderne (Chrome, Edge, Firefox, Safari).

> **Astuce :** Une connexion Internet n'est utile que pour charger les polices Google Fonts (*Inter* et *JetBrains Mono*) et consulter les liens externes vers les ressources officielles (Scrum Guide, Manifeste Agile, etc.). L'application fonctionne intégralement en local.

---

## 📁 Architecture des fichiers

```text
Product_Owner/
├── index.html                                         # Structure HTML principale de l'application
├── styles.css                                         # Styles CSS (responsive, thèmes sombre/clair, composants)
├── app.js                                             # Logique applicative (navigation, quiz, timer, localStorage)
├── course-data.js                                     # Base de données complète des 94 modules/leçons et 18 quiz
├── Parcours Product Owner — Formation complète.md     # Contenu source intégral au format Markdown
├── Parcours Product Owner — Formation complète.pdf    # Version PDF imprimable du parcours complet
└── README.md                                          # Documentation de l'outil
```

---

## ⌨️ Raccourcis et contrôles utiles

- `Alt + →` : Passer à la leçon suivante
- `Alt + ←` : Revenir à la leçon précédente
- **Bouton `☰`** (en haut à gauche) : Afficher ou masquer le sommaire latéral
- **Bouton `☀️ / 🌙`** (en haut à droite) : Basculer entre le thème clair et le thème sombre
- **Bouton `🗑️ Réinitialiser`** (en bas du sommaire) : Effacer toute la progression enregistrée dans le navigateur après confirmation

---

## 📝 Crédits

Contenu pédagogique construit à partir du référentiel de compétences Product Owner d'OpenClassrooms et du *Scrum Guide 2020*, entièrement rédigé et structuré avec l'aide de Claude et Antigravity.


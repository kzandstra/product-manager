# Parcours Product Owner — Formation complète

Oct 22, 2026 · @Wren

## Mode d'emploi du parcours

Ce parcours complet de formation Product Owner est structuré en leçons approfondies, exercices pratiques et quiz rédigés en français. Il représente environ 116 heures de cours, plus le temps de projet (≈ 330 h au total si tu fais tous les livrables).

### Comment avancer

1. Suis l'ordre des projets : chaque projet réutilise les acquis du précédent.
2. Pour chaque leçon : lis le contenu, fais l'exercice, puis le quiz. Vise 80 % de bonnes réponses avant de passer à la suite (85 % pour tout ce qui touche au Scrum Guide).
3. Garde un **carnet de bord** (Notion, un doc ou un simple fichier) : un résumé de 5 lignes par leçon + tes livrables.
4. Termine chaque projet par son **livrable**, comme un vrai dossier de PO.
5. Utilise **Claude** comme assistant : reformuler une notion, te poser des questions d'examen, relire une user story, jouer une partie prenante difficile. Jamais pour faire le livrable à ta place.

### Planning indicatif

| Projet | Thème | Cours (h) | Temps projet total (h) | Semaines à temps plein |
| --- | --- | --- | --- | --- |
| 1 | Esprit critique et veille | 6 | 57 | 1,5 |
| 2 | Cadrer le développement agile | 24 | 60 | 1,5 |
| 3 | Préparer la PSPO I | 16 | 40 | 1 |
| 4 | Optimiser le Product Backlog | 26 | 60 | 1,5 |
| 5 | Agile à l'échelle et bugs | 18 | 80 | 2 |
| 6 | Vision produit et parties prenantes | 26 | 80 | 2 |
| 7 | Certification PSPO I | 8 | 10 | 0,5 |

Les cours répétés dans plusieurs projets (Roadmap, User stories, Agile at Scale) sont écrits une seule fois ; le projet suivant renvoie à la leçon et ajoute un exercice d'approfondissement.

### Bien utiliser Claude pendant le parcours

| Besoin | Exemple de prompt à donner à Claude |
| --- | --- |
| Comprendre | « Explique-moi la différence entre Sprint Goal et Product Goal avec un exemple d'application de livraison de repas. » |
| S'entraîner | « Pose-moi 10 questions type PSPO I, une à la fois, corrige-moi et cite la section du Scrum Guide 2020. » |
| Relire | « Voici 5 user stories. Vérifie-les avec la grille INVEST et propose des critères d'acceptation Gherkin. » |
| Jouer un rôle | « Joue un directeur commercial pressé qui veut 3 fonctionnalités pour la semaine prochaine. Je suis le PO. » |
| Vérifier | « Quels biais cognitifs vois-tu dans mon raisonnement ci-dessous ? » |

Règle d'or : vérifie toujours les affirmations factuelles de Claude dans la source officielle (Scrum Guide, documentation outil). C'est l'application directe du projet 1.

### Ressources de référence à mettre en favoris

- [Scrum Guide 2020 (FR et EN)](https://scrumguides.org/) — la référence unique pour la PSPO I
- [Manifeste Agile](https://agilemanifesto.org/iso/fr/manifesto.html) et ses [12 principes](https://agilemanifesto.org/iso/fr/principles.html)
- [Scrum.org — certification PSPO I](https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification) et [Product Owner Open (test gratuit)](https://www.scrum.org/open-assessments/product-owner-open)
- [Atlassian Agile Coach](https://www.atlassian.com/fr/agile) — articles pratiques sur backlog, estimation, roadmap
- [Mountain Goat Software (Mike Cohn)](https://www.mountaingoatsoftware.com/agile/user-stories) — user stories et estimation
- [Nielsen Norman Group](https://www.nngroup.com/articles/) — recherche utilisateur et UX
- Outils gratuits : [Trello](https://trello.com/), [Notion](https://www.notion.so/), [Miro](https://miro.com/), [Feedly](https://feedly.com/), [Airtable](https://www.airtable.com/), [Claude](https://claude.ai/)

## PROJET 1 — Intégrer une veille efficace à ton quotidien de PO

**Compétence visée :** mettre en place un système de veille fiable, c'est-à-dire trouver, trier et vérifier l'information avant de l'utiliser pour décider.

**Cours : Développer son esprit critique — 6 h** · Livrable du projet : ton système de veille documenté (fin de section).

### Leçon 1 — Qu'est-ce que l'esprit critique ? (45 min)

L'esprit critique est la capacité à évaluer une affirmation avant de l'accepter : d'où vient-elle, sur quelles preuves repose-t-elle, et qu'est-ce qui pourrait la contredire ? Ce n'est pas douter de tout, c'est **proportionner sa confiance aux preuves**.

Pour un Product Owner, c'est une compétence de survie. Chaque jour tu reçois des affirmations : « les clients veulent le mode sombre », « ce concurrent a doublé ses ventes grâce à l'IA », « cette fonctionnalité prendra deux jours ». Tes décisions de priorisation valent ce que valent les informations sur lesquelles elles reposent.

**Les quatre réflexes de base**

1. **Qui parle ?** Expertise, intérêt, conflit d'intérêts (un vendeur d'outil qui publie une étude sur son outil).
2. **Quelle preuve ?** Anecdote, sondage, donnée d'usage, étude contrôlée : toutes les preuves ne se valent pas.
3. **Quelle alternative ?** Existe-t-il une autre explication aux mêmes faits ?
4. **Que faudrait-il pour que j'aie tort ?** Si rien ne peut te faire changer d'avis, ce n'est plus un raisonnement mais une croyance.

**La hiérarchie des preuves (simplifiée pour le produit)**

| Niveau | Type de preuve | Exemple produit |
| --- | --- | --- |
| Faible | Opinion, intuition, anecdote | « Mon voisin trouve l'appli compliquée » |
| Moyen | Retours qualitatifs répétés | 8 entretiens sur 10 citent la même difficulté |
| Bon | Données d'usage observées | 62 % d'abandon à l'étape 3 du tunnel |
| Fort | Expérimentation contrôlée | Test A/B : +4,1 % de conversion, significatif |

**Exercice 1 (15 min).** Note trois affirmations entendues cette semaine (travail, médias, réseaux). Pour chacune, réponds aux quatre réflexes et classe la preuve dans le tableau. Ensuite, demande à Claude : « Joue l'avocat du diable sur cette affirmation : … » et compare avec ton analyse.

**Quiz 1**

1. Avoir l'esprit critique, c'est : a) refuser toute information non scientifique · b) ajuster sa confiance à la qualité des preuves · c) douter systématiquement des experts
2. Un éditeur de logiciel publie une étude prouvant que son outil fait gagner 30 % de temps. Le premier réflexe : a) la partager · b) identifier le conflit d'intérêts et chercher une source indépendante · c) la rejeter
3. Quelle preuve est la plus solide ? a) 3 clients VIP réclament une fonctionnalité · b) un test A/B significatif · c) l'avis du CEO

*Corrigé : 1-b, 2-b, 3-b.*

### Leçon 2 — Les biais cognitifs (1 h 30)

Un biais cognitif est un raccourci mental, automatique et inconscient, qui déforme notre jugement de façon prévisible. Ils ne sont pas un défaut d'intelligence : ils touchent tout le monde, experts compris. Les connaître ne suffit pas à les éviter, mais permet de mettre en place des **garde-fous**.

**Les biais les plus fréquents en gestion de produit**

| Biais | Définition | Situation PO typique | Garde-fou |
| --- | --- | --- | --- |
| Confirmation | On cherche et retient ce qui confirme ce qu'on pense déjà | Ne lire que les retours positifs sur ta fonctionnalité | Chercher activement les preuves contraires |
| Ancrage | Le premier chiffre entendu influence l'estimation | Le manager dit « 2 semaines ? » avant le Planning Poker | Estimations individuelles cachées, révélées ensemble |
| Disponibilité | On surestime ce qui vient facilement à l'esprit | Un bug récent et spectaculaire semble plus grave qu'il ne l'est | Regarder la fréquence réelle dans les données |
| Coûts irrécupérables | Continuer car on a déjà beaucoup investi | « On a passé 3 sprints dessus, on ne peut pas arrêter » | Ne juger que la valeur future |
| Survivant | On n'étudie que les cas qui ont réussi | Copier les startups à succès sans voir celles qui ont échoué | Chercher les échecs avec la même méthode |
| Effet de halo | Une qualité influence le jugement global | L'idée du client le plus prestigieux paraît forcément bonne | Évaluer l'idée sans connaître son auteur |
| Excès de confiance | On surestime la précision de ses prévisions | Roadmap à date fixe sur 12 mois | Fourchettes, prévisions probabilistes |
| Faux consensus | On croit que les autres pensent comme nous | « Tout le monde utilise des raccourcis clavier » | Tester avec de vrais utilisateurs |
| Planification | On sous-estime systématiquement les délais | Chaque sprint finit avec du travail non terminé | Se baser sur la vélocité passée |
| Autorité | On accorde trop de poids à un statut | « Le directeur a dit que… » | Demander les données derrière l'avis |

**Deux systèmes de pensée.** Daniel Kahneman distingue le *Système 1* (rapide, intuitif, sans effort) et le *Système 2* (lent, analytique, coûteux). Les biais naissent quand le Système 1 répond à une question qui mérite le Système 2. Pour les décisions importantes (priorisation d'un trimestre, abandon d'une fonctionnalité), force le passage au Système 2 : écris ton raisonnement, chiffre-le, fais-le relire.

**Technique du pré-mortem.** Avant de lancer une initiative, l'équipe imagine qu'elle a échoué dans 6 mois et écrit pourquoi. Cette méthode réduit l'excès de confiance et fait remonter des risques que personne n'osait dire.

**Pour aller plus loin :** [Cognitive Bias Codex (Wikipédia)](https://fr.wikipedia.org/wiki/Biais_cognitif), [La Tronche en Biais (vidéos FR)](https://www.youtube.com/@TroncheEnBiais), [The Decision Lab — biais](https://thedecisionlab.com/biases).

**Exercice 2 (30 min).** Reprends une décision que tu as prise récemment (achat, choix professionnel). Identifie au moins deux biais qui ont pu intervenir. Puis organise un mini pré-mortem sur un projet en cours : 10 minutes, 5 causes d'échec possibles, 1 action de prévention par cause. Demande ensuite à Claude : « Voici mon raisonnement : … Quels biais cognitifs détectes-tu ? »

**Quiz 2**

1. L'équipe continue une fonctionnalité peu utilisée « parce qu'on a déjà investi 40 jours ». Quel biais ? a) ancrage · b) coûts irrécupérables · c) halo
2. Avant le Planning Poker, le PO dit « ça devrait être rapide, non ? ». Quel risque ? a) ancrage · b) survivant · c) disponibilité
3. Quel garde-fou limite le biais de confirmation ? a) relire uniquement les retours positifs · b) chercher activement des preuves contraires · c) demander l'avis du plus senior
4. Le pré-mortem sert surtout à réduire : a) l'excès de confiance · b) l'effet de halo · c) le faux consensus
5. Vrai ou faux : connaître un biais suffit à ne plus le subir.

*Corrigé : 1-b, 2-a, 3-b, 4-a, 5-faux.*

### Leçon 3 — Rechercher et évaluer l'information (1 h 30)

Une bonne veille commence par une bonne recherche, et une bonne recherche finit toujours par une **évaluation de la source**.

**Rechercher efficacement**

- Opérateurs Google utiles : `"expression exacte"`, `site:scrum.org`, `filetype:pdf`, `-mot` pour exclure, `intitle:roadmap`.
- Change de langue : beaucoup de ressources produit sont d'abord en anglais (« product discovery », « backlog refinement »).
- Remonte à la source primaire : un article cite une étude ? Lis l'étude, pas l'article.
- Utilise Claude pour défricher un sujet (« quels sont les grands courants de pensée sur la priorisation produit ? »), puis vérifie chaque élément dans les sources qu'il cite ou que tu trouves.

**Évaluer une source : le test CRAAP**

| Critère | Question à se poser |
| --- | --- |
| **C**urrency (actualité) | Date de publication ? Encore valable (ex. Scrum Guide 2020 et non 2017) ? |
| **R**elevance (pertinence) | Répond-elle à ma question, pour mon contexte ? |
| **A**uthority (autorité) | Qui est l'auteur ? Quelle expertise ? Quel éditeur ? |
| **A**ccuracy (exactitude) | Les faits sont-ils sourcés, vérifiables, cohérents avec d'autres sources ? |
| **P**urpose (intention) | Informer, vendre, convaincre, divertir ? |

**La lecture latérale.** Les vérificateurs professionnels ne lisent pas longuement un site inconnu pour juger de sa fiabilité : ils ouvrent d'autres onglets pour voir ce que d'autres disent de ce site et de son auteur. Méthode SIFT : **S**top (s'arrêter), **I**nvestigate the source (enquêter sur la source), **F**ind better coverage (chercher d'autres sources), **T**race claims (remonter à l'origine). Voir [la méthode SIFT de Mike Caulfield](https://hapgood.us/2019/06/19/sift-the-four-moves/).

**Corrélation n'est pas causalité.** « Les utilisateurs qui activent les notifications restent 2 fois plus longtemps » ne prouve pas que les notifications font rester : les utilisateurs déjà engagés activent peut-être plus volontiers les notifications. Pour établir une cause, il faut une expérimentation.

**Statistiques : les pièges classiques.** Pourcentage sans base (« +200 % » sur 3 utilisateurs), échantillon non représentatif (sondage auprès des seuls clients fidèles), axe de graphique tronqué, moyenne écrasée par des valeurs extrêmes (préférer la médiane).

**Outils de vérification :** [AFP Factuel](https://factuel.afp.com/), [Les Décodeurs (Le Monde)](https://www.lemonde.fr/les-decodeurs/), [Google Scholar](https://scholar.google.com/), [Wayback Machine](https://web.archive.org/) pour retrouver une page modifiée.

**Exercice 3 (40 min).** Cherche « taux d'adoption des méthodes agiles en entreprise ». Trouve 3 sources différentes, applique le test CRAAP à chacune (note de 1 à 5 par critère) et garde la meilleure. Puis demande à Claude le même chiffre et compare : sa réponse est-elle sourcée ? Concorde-t-elle avec ta meilleure source ?

**Quiz 3**

1. Dans CRAAP, « Purpose » interroge : a) la date · b) l'intention de l'auteur · c) la longueur
2. La lecture latérale consiste à : a) lire tout le site en détail · b) vérifier la réputation de la source ailleurs · c) lire en diagonale
3. « Les clients qui utilisent la fonctionnalité X dépensent plus » prouve que X fait dépenser plus. Vrai ou faux ?
4. Pour une donnée de salaires très dispersée, on préfère : a) la moyenne · b) la médiane · c) le maximum

*Corrigé : 1-b, 2-b, 3-faux (corrélation), 4-b.*

### Leçon 4 — Éviter les pièges de l'argumentation (1 h)

Un sophisme est un raisonnement qui a l'apparence de la logique mais qui est invalide. En réunion de priorisation, ils font souvent gagner l'argument le plus bruyant au lieu du plus solide.

| Sophisme | Mécanisme | Exemple en réunion produit |
| --- | --- | --- |
| Homme de paille | Déformer l'argument adverse pour l'attaquer plus facilement | « Tu veux reporter la fonctionnalité ? Donc tu te moques des clients. » |
| Ad hominem | Attaquer la personne plutôt que l'argument | « Il est junior, son analyse ne compte pas. » |
| Appel à l'autorité | « C'est vrai parce qu'un expert l'a dit » | « Spotify le fait, donc c'est la bonne méthode. » |
| Faux dilemme | Présenter deux options comme les seules | « Soit on livre tout en mars, soit le projet est mort. » |
| Pente glissante | Une petite étape mènera forcément à une catastrophe | « Si on accepte cette demande, tous les clients exigeront du sur-mesure. » |
| Généralisation hâtive | Conclure à partir de trop peu de cas | « Deux clients se plaignent, l'appli est inutilisable. » |
| Appel à la popularité | « Tout le monde le fait » | « Tous nos concurrents ont un chatbot. » |
| Post hoc | Après, donc à cause de | « On a changé le logo et les ventes ont baissé. » |
| Charge de la preuve inversée | Exiger de l'autre qu'il prouve que l'on a tort | « Prouve-moi que ça ne marchera pas. » |

**Bien argumenter soi-même : la structure Toulmin simplifiée.** *Affirmation* (« priorisons l'onboarding ») → *données* (« 45 % d'abandon en J1 ») → *justification* (« un utilisateur perdu en J1 ne revient pas ») → *limite* (« sauf si la cause est le prix, à vérifier »). Annoncer soi-même la limite renforce la crédibilité.

**Désamorcer un sophisme sans conflit :** reformule (« si je comprends bien, tu dis que… »), demande la donnée (« sur combien de clients ? »), ouvre les options (« et s'il existait une troisième voie ? »).

**Exercice 4 (20 min).** Regarde un débat télévisé ou lis un fil de commentaires (LinkedIn, forum). Relève 5 sophismes et nomme-les. Puis demande à Claude : « Joue un stakeholder qui utilise des sophismes pour imposer sa fonctionnalité ; je dois les repérer et répondre calmement. » Fais 3 échanges.

**Quiz 4**

1. « Soit on fait l'appli mobile, soit on perd le marché » est : a) un faux dilemme · b) un ad hominem · c) un post hoc
2. « Amazon fait comme ça, donc on doit le faire » est : a) un appel à l'autorité · b) une pente glissante · c) un homme de paille
3. Quelle réponse désamorce le mieux une généralisation hâtive ? a) « Tu as tort » · b) « Sur combien de cas s'appuie-t-on ? » · c) « On verra plus tard »

*Corrigé : 1-a, 2-a, 3-b.*

### Leçon 5 — La démarche scientifique appliquée aux décisions produit (1 h 15)

La méthode scientifique est une boucle : **observer → formuler une hypothèse → prédire → tester → analyser → décider**. C'est exactement le cœur de l'empirisme de Scrum (transparence, inspection, adaptation), que tu retrouveras au projet 3.

**Écrire une hypothèse produit testable**

> Nous croyons que **\[changement\]** pour **\[utilisateurs\]** produira **\[résultat mesurable\]**. Nous le saurons quand **\[indicateur\]** atteindra **\[seuil\]** en **\[durée\]**.

Exemple : « Nous croyons qu'ajouter un tutoriel interactif pour les nouveaux inscrits augmentera l'activation. Nous le saurons quand le taux de création du premier projet passera de 30 % à 40 % en 4 semaines. »

**La réfutabilité (Karl Popper).** Une hypothèse utile peut être démentie. « Les utilisateurs aimeront la nouvelle interface » n'est pas testable ; « le score SUS passera au-dessus de 70 » l'est.

**Choisir le bon test**

| Test | Quand l'utiliser | Coût |
| --- | --- | --- |
| Entretiens utilisateurs | Comprendre un problème | Faible |
| Fake door (bouton factice) | Mesurer un intérêt avant de développer | Faible |
| Prototype cliquable (Figma) | Valider un parcours | Moyen |
| Test A/B | Mesurer un effet causal sur un indicateur | Élevé (trafic nécessaire) |
| Pilote / bêta | Valider en conditions réelles | Élevé |

**Le rasoir d'Occam :** entre deux explications, commence par la plus simple. Les ventes baissent ? Vérifie un bug de paiement avant d'imaginer un changement profond du marché.

**Ressources :** [Strategyzer — Test Card](https://www.strategyzer.com/library/the-test-card), [Optimizely — glossaire A/B testing](https://www.optimizely.com/optimization-glossary/ab-testing/), calculateur d'échantillon [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html).

**Exercice 5 (30 min).** Choisis une application que tu utilises. Imagine une amélioration et rédige-la sous forme d'hypothèse testable (format ci-dessus). Choisis le test le moins cher qui permettrait de la réfuter. Fais critiquer ton hypothèse par Claude : « Cette hypothèse est-elle réfutable et mesurable ? Quels biais pourraient fausser le test ? »

**Quiz 5**

1. Quelle hypothèse est réfutable ? a) « Les utilisateurs vont adorer » · b) « Le taux de rétention J30 passera de 20 à 25 % » · c) « Ce sera mieux »
2. Pour mesurer l'intérêt d'une fonctionnalité avant de la développer, le test le moins coûteux est : a) le test A/B · b) le fake door · c) le pilote
3. Les trois piliers de l'empirisme dans Scrum sont : a) planifier, exécuter, contrôler · b) transparence, inspection, adaptation · c) vision, mission, valeurs

*Corrigé : 1-b, 2-b, 3-b.*

### Livrable du projet 1 — Ton système de veille de PO

Mets en pratique les cinq leçons en construisant un dispositif que tu utiliseras pendant toute ta carrière.

1. **Définis 4 thèmes de veille :** pratiques Scrum/agile, product management, UX/recherche utilisateur, ton secteur cible (ex. fintech, e-santé).
2. **Sélectionne 15 à 20 sources** et évalue chacune avec CRAAP. Exemples : [Scrum.org blog](https://www.scrum.org/resources/blog), [Mind the Product](https://www.mindtheproduct.com/), [Silicon Valley Product Group](https://www.svpg.com/articles/), [Lenny's Newsletter](https://www.lennysnewsletter.com/), [Nielsen Norman Group](https://www.nngroup.com/articles/), [Welcome to the Jungle — Product](https://www.welcometothejungle.com/fr/articles), podcasts « Product Hunt », « Le Podcast du Product Manager ».
3. **Centralise** dans [Feedly](https://feedly.com/) ou [Netvibes](https://www.netvibes.com/) (flux RSS), avec un dossier par thème.
4. **Rituel :** 20 min par jour de tri, 1 h par semaine d'approfondissement, une fiche de synthèse dans Notion (source, idée clé, niveau de preuve, application possible).
5. **Partage :** une note de veille hebdomadaire de 5 points destinée à une équipe fictive.
6. **Utilise Claude** pour résumer un long article ou en extraire les affirmations à vérifier, jamais comme source finale.

- [ ] 4 thèmes définis
- [ ] 15 sources évaluées avec CRAAP
- [ ] Agrégateur configuré
- [ ] 2 notes de veille hebdomadaires rédigées
- [ ] Une page « méthode » décrivant ton rituel et tes garde-fous anti-biais

## PROJET 2 — Cadrer le développement agile d'un produit

**Compétences visées :** analyser les besoins d'un client et formuler une proposition fonctionnelle et technique · traduire les fonctionnalités attendues en tâches · prioriser · mettre en place la documentation du projet.

**Cours : Adopter l'état d'esprit agile (4 h) + Construire une roadmap produit (20 h)** · Livrable : dossier de cadrage d'un CRM (fin de section).

### Partie A — Adopter l'état d'esprit agile (4 h)

#### Leçon 2.1 — D'où vient l'agilité ? (45 min)

Jusqu'aux années 1990, la plupart des projets logiciels suivaient le **cycle en V ou « cascade »** : tout spécifier, puis concevoir, développer, tester et livrer en une fois. Le problème : le besoin change pendant le projet, et le client découvre le résultat trop tard pour l'orienter.

En 2001, 17 praticiens (dont Ken Schwaber et Jeff Sutherland, créateurs de Scrum) rédigent le **Manifeste Agile**. Il ne dit pas « pas de documentation » ou « pas de plan » ; il établit des préférences.

**Les 4 valeurs du Manifeste**

| Nous valorisons davantage… | …que |
| --- | --- |
| Les individus et leurs interactions | Les processus et les outils |
| Des logiciels opérationnels | Une documentation exhaustive |
| La collaboration avec les clients | La négociation contractuelle |
| L'adaptation au changement | Le suivi d'un plan |

Les éléments de droite ont de la valeur, mais ceux de gauche en ont davantage.

**Cascade ou agile ?** L'agilité convient aux environnements **complexes** (on ne sait pas d'avance quelle solution marche). Pour un problème **simple ou compliqué** et stable (construire un pont selon des normes connues), une approche prédictive reste pertinente. Le modèle [Cynefin](https://fr.wikipedia.org/wiki/Cynefin) aide à faire ce diagnostic.

**Exercice 2.1 (15 min).** Lis le [Manifeste en français](https://agilemanifesto.org/iso/fr/manifesto.html). Pour chaque valeur, écris un exemple concret de ta vie professionnelle où l'élément de droite a primé sur celui de gauche, et ce que cela a coûté.

#### Leçon 2.2 — Les 12 principes et leur traduction concrète (1 h)

Les [12 principes](https://agilemanifesto.org/iso/fr/principles.html) détaillent les valeurs. Regroupés par thème :

- **Valeur pour le client :** satisfaire le client par des livraisons rapides et régulières (1) ; accueillir les changements, même tard (2) ; livrer souvent, de quelques semaines à quelques mois (3) ; le logiciel opérationnel est la principale mesure d'avancement (7).
- **Collaboration :** métier et développeurs travaillent ensemble quotidiennement (4) ; le face-à-face est le mode de communication le plus efficace (6).
- **Équipe :** des personnes motivées, à qui l'on fait confiance (5) ; des équipes auto-organisées (11) ; à intervalles réguliers, l'équipe réfléchit pour devenir plus efficace (12).
- **Durabilité et qualité :** un rythme soutenable indéfiniment (8) ; attention continue à l'excellence technique (9) ; la simplicité, l'art de maximiser le travail non fait (10).

**Le principe 10 pour le PO.** « Maximiser la quantité de travail non fait » est peut-être le plus important pour toi : ton rôle consiste autant à dire non qu'à dire oui. Selon plusieurs études souvent citées, une part importante des fonctionnalités logicielles est rarement ou jamais utilisée ; traite ce chiffre avec prudence (leçon 3), mais le constat qualitatif est partagé.

**Exercice 2.2 (25 min).** Choisis 4 principes. Pour chacun, imagine une pratique d'équipe qui le respecte et une qui le viole. Exemple principe 8 : respecté = vélocité stable, pas d'heures sup en fin de sprint ; violé = « sprint de rattrapage » le week-end.

#### Leçon 2.3 — Panorama des cadres agiles (1 h)

| Cadre | Principe | Rythme | Quand l'utiliser |
| --- | --- | --- | --- |
| [Scrum](https://scrumguides.org/) | Sprints à durée fixe, 3 responsabilités, 5 événements, 3 artefacts | Sprints ≤ 1 mois | Développement de produit complexe |
| [Kanban](https://www.atlassian.com/fr/agile/kanban) | Visualiser le flux, limiter le travail en cours (WIP) | Flux continu | Support, maintenance, demandes imprévisibles |
| XP (Extreme Programming) | Pratiques techniques : TDD, pair programming, intégration continue | Itérations courtes | Qualité du code critique |
| Lean | Éliminer le gaspillage, apprendre vite | Variable | Startups (Lean Startup), optimisation de processus |
| SAFe, LeSS | Agilité à l'échelle de plusieurs équipes | Program Increments / sprints communs | Grandes organisations (projet 5) |

**Scrum en 30 secondes.** Le Product Owner ordonne le Product Backlog ; les Developers créent un incrément utilisable à chaque Sprint ; le Scrum Master aide l'équipe et l'organisation à appliquer Scrum. Tu approfondiras au projet 3.

**Exercice 2.3 (20 min).** Pour chacun de ces contextes, choisis un cadre et justifie : a) une équipe qui traite les tickets du support client ; b) une équipe qui lance une nouvelle application ; c) 8 équipes sur un même logiciel bancaire. Vérifie ton raisonnement avec Claude.

#### Leçon 2.4 — L'état d'esprit agile au quotidien (1 h 15)

L'agilité est d'abord un **état d'esprit** avant d'être un ensemble de cérémonies. On parle de *« doing agile »* (appliquer les rituels) contre *« being agile »* (en partager les valeurs).

**Les marqueurs d'un état d'esprit agile**

- **Droit à l'erreur et sécurité psychologique :** les recherches de Google (projet Aristotle) ont identifié la sécurité psychologique comme le premier facteur d'efficacité d'équipe. Voir [re:Work — Google](https://rework.withgoogle.com/fr/guides/understanding-team-effectiveness/).
- **Apprentissage continu :** chaque sprint est une expérience (leçon 5).
- **Orientation valeur plutôt que production :** on mesure l'impact (*outcome*), pas le nombre de fonctionnalités livrées (*output*).
- **Transparence :** le travail, les problèmes et les décisions sont visibles.
- **Leadership serviteur :** le manager enlève les obstacles au lieu de distribuer les tâches.

**Les anti-patterns à reconnaître :** le « Dark Scrum » (rituels imposés pour contrôler), le PO « secrétaire » qui transcrit les demandes sans décider, le sprint « mini-cascade » (analyse, puis dev, puis test à la fin), la vélocité utilisée pour comparer les équipes.

**Exercice 2.4 (30 min).** Évalue une organisation que tu connais sur les 5 marqueurs (note de 1 à 5). Pour les deux plus faibles, propose une action concrète. Puis demande à Claude : « Joue un manager sceptique envers l'agilité ; je dois le convaincre d'essayer un sprint pilote. »

**Quiz Partie A**

1. Le Manifeste Agile dit que la documentation : a) est inutile · b) a de la valeur, mais moins qu'un logiciel opérationnel · c) doit être exhaustive
2. Quel principe recommande de maximiser le travail non fait ? a) la simplicité · b) l'excellence technique · c) le rythme soutenable
3. Pour une équipe de support aux demandes imprévisibles, le cadre le plus adapté est souvent : a) Scrum · b) Kanban · c) SAFe
4. Mesurer le succès par le nombre de fonctionnalités livrées, c'est se concentrer sur : a) l'outcome · b) l'output · c) l'impact
5. Le premier facteur d'efficacité d'équipe identifié par Google est : a) le talent individuel · b) la sécurité psychologique · c) la taille de l'équipe
6. L'agilité est particulièrement adaptée aux problèmes : a) simples · b) complexes · c) chaotiques uniquement

*Corrigé : 1-b, 2-a, 3-b, 4-b, 5-b, 6-b.*

### Partie B — Construire une roadmap produit (20 h)

#### Leçon 2.5 — Partir du besoin : analyser la demande client (3 h)

Avant de construire une roadmap, il faut comprendre **le problème**, pas la solution que le client a en tête. Un client qui demande « un CRM avec 40 champs » a peut-être juste besoin de ne plus perdre ses relances commerciales.

**Méthode d'analyse en 5 étapes**

1. **Lire le cahier des charges ou la demande** et surligner : objectifs, utilisateurs, contraintes, fonctionnalités demandées.
2. **Reformuler le problème :** « Les commerciaux perdent 20 % de leurs opportunités faute de relance, car les contacts sont dispersés dans des fichiers Excel. »
3. **Identifier les parties prenantes** (sponsor, utilisateurs, équipe technique, juridique) et leurs attentes.
4. **Lister les contraintes :** budget, délais, RGPD, intégrations existantes, technologies imposées.
5. **Poser les questions ouvertes :** « Comment faites-vous aujourd'hui ? », « Que se passe-t-il si on ne fait rien ? », « Comment saurez-vous que c'est réussi ? »

**La technique des 5 pourquoi** permet de remonter à la cause racine : « On veut un export PDF. — Pourquoi ? — Pour envoyer le rapport au directeur. — Pourquoi ? — Il ne se connecte pas à l'outil. — Pourquoi ? … » Parfois la vraie solution est une notification par e-mail, pas un export.

**Exigences fonctionnelles et non fonctionnelles.** Fonctionnelles : ce que le système fait (« créer une fiche contact »). Non fonctionnelles : comment il le fait (performance < 2 s, disponibilité 99,5 %, accessibilité RGAA, conformité [RGPD — CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees)).

**La proposition fonctionnelle et technique** résume : le problème, les objectifs mesurables, le périmètre (inclus / exclu), les grandes fonctionnalités, les choix techniques envisagés (avec l'équipe), les risques et le premier jalon.

**Exercice 2.5 (1 h 30).** Imagine (ou demande à Claude de générer) un cahier des charges de 2 pages pour un CRM destiné à une PME de 30 commerciaux. Applique les 5 étapes, fais un « 5 pourquoi » sur deux demandes, et rédige une proposition d'une page.

#### Leçon 2.6 — La vision produit (2 h)

La vision est le **cap à long terme** : pourquoi le produit existe et ce qu'il changera pour ses utilisateurs. Sans vision, la roadmap devient une liste de courses.

**Le format « Elevator Pitch » (Geoffrey Moore)**

> Pour **\[cible\]** qui **\[besoin\]**, **\[nom du produit\]** est un **\[catégorie\]** qui **\[bénéfice clé\]**. Contrairement à **\[alternative\]**, notre produit **\[différenciation\]**.

**Le Product Vision Board (Roman Pichler)** organise la vision en 5 cases : Vision · Groupe cible · Besoins · Produit · Objectifs business. Modèle gratuit : [romanpichler.com — Product Vision Board](https://www.romanpichler.com/tools/product-vision-board/).

**Le Product Goal dans Scrum.** Le Scrum Guide 2020 introduit le Product Goal : un objectif futur du produit, engagement associé au Product Backlog. La vision est le « pourquoi » général ; le Product Goal est la prochaine étape concrète vers cette vision.

**Exercice 2.6 (1 h).** Rédige l'elevator pitch et le Product Vision Board de ton CRM. Fais-le critiquer par Claude : « Cette vision est-elle centrée sur l'utilisateur ? Est-elle trop vague ou trop centrée sur la solution ? »

#### Leçon 2.7 — L'impact mapping (3 h)

L'impact mapping (Gojko Adzic) relie chaque fonctionnalité à un objectif métier, sous forme d'arbre à 4 niveaux :

1. **Pourquoi ?** L'objectif mesurable (ex. +15 % de taux de conversion des opportunités en 6 mois).
2. **Qui ?** Les acteurs qui peuvent aider ou freiner (commerciaux, managers, clients).
3. **Comment ?** Les changements de comportement attendus (les commerciaux relancent à temps).
4. **Quoi ?** Les livrables qui peuvent provoquer ce changement (rappels automatiques, tableau de bord des relances).

L'intérêt : une fonctionnalité qui ne se rattache à aucun impact est un candidat à la suppression. Ressource : [impactmapping.org](https://www.impactmapping.org/).

**Exercice 2.7 (1 h 30).** Dessine l'impact map de ton CRM dans [Miro](https://miro.com/) (modèle « Impact Mapping » disponible) : 1 objectif, 3 acteurs, 2 impacts par acteur, 2 livrables par impact. Barre les livrables les moins utiles.

#### Leçon 2.8 — Le story mapping (3 h)

Le story mapping (Jeff Patton) organise les fonctionnalités selon le **parcours utilisateur**.

- **Axe horizontal :** les grandes activités de l'utilisateur, dans l'ordre (prospecter → qualifier → proposer → relancer → conclure).
- **Sous chaque activité :** les tâches utilisateur, puis les user stories.
- **Axe vertical :** la priorité. On trace des lignes horizontales pour découper les **releases** : la première tranche est le MVP, qui traverse tout le parcours de façon minimale.

**Le MVP (Minimum Viable Product)** n'est pas une version bâclée, c'est la plus petite version qui permet d'apprendre si le produit répond au besoin. L'image classique : pour aller de A à B, livrer d'abord une trottinette, puis un vélo, puis une voiture, plutôt qu'une roue, puis un châssis.

Ressource : [Jeff Patton — The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/).

**Exercice 2.8 (1 h 30).** Construis la story map de ton CRM : 5 activités, 3 à 5 tâches par activité, puis trace 3 releases. Vérifie que la release 1 permet à un commercial de faire un parcours complet, même basique.

#### Leçon 2.9 — Prioriser (3 h)

Prioriser, c'est choisir **ce qu'on ne fera pas maintenant**. Dans Scrum, le PO est responsable de l'**ordonnancement** du Product Backlog (pas seulement d'étiquettes de priorité).

| Méthode | Principe | Usage |
| --- | --- | --- |
| MoSCoW | Must / Should / Could / Won't (this time) | Découper un périmètre de release |
| Valeur / Effort | Matrice 2x2 : quick wins d'abord | Atelier rapide avec l'équipe |
| RICE | (Reach × Impact × Confidence) / Effort | Comparer de nombreuses idées avec des données |
| Kano | Basique / Performance / Enchantement | Comprendre la satisfaction attendue |
| WSJF (SAFe) | Coût du délai / durée | Grandes organisations, flux continu |

**Exemple RICE.** Rappels automatiques : Reach 30 commerciaux/mois, Impact 2 (fort), Confidence 80 %, Effort 2 personnes-mois → (30 × 2 × 0,8) / 2 = **24**. Export PDF : Reach 5, Impact 1, Confidence 100 %, Effort 1 → **5**. Les rappels passent devant.

```latex
\text{RICE} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}
```

**Le modèle de Kano.** Les fonctionnalités *basiques* ne satisfont pas quand elles sont là, mais déçoivent quand elles manquent (se connecter). Celles de *performance* satisfont proportionnellement (rapidité). Les *enchantements* surprennent (suggestion automatique du meilleur moment pour relancer). Avec le temps, un enchantement devient basique.

**Exercice 2.9 (1 h 30).** Liste 12 fonctionnalités de ton CRM. Applique MoSCoW, puis RICE. Compare les deux classements et explique les écarts. Demande à Claude de contester tes trois premières priorités.

#### Leçon 2.10 — Construire et communiquer la roadmap thématique (3 h)

Une roadmap agile n'est pas un diagramme de Gantt. Elle communique **une direction et des intentions**, avec une précision qui diminue dans le temps.

**Le format Now / Next / Later**

| Horizon | Contenu | Précision |
| --- | --- | --- |
| Now (ce trimestre) | Thèmes en cours, objectifs mesurables, fonctionnalités engagées | Élevée |
| Next (trimestre suivant) | Thèmes prévus, problèmes à résoudre | Moyenne |
| Later (au-delà) | Paris, opportunités à explorer | Faible |

**Une roadmap thématique** s'organise autour de problèmes ou d'objectifs (« Ne plus perdre d'opportunité ») plutôt que de fonctionnalités (« Module de rappel v2 »). Elle laisse l'équipe trouver la meilleure solution.

**Relier la roadmap aux OKR.** Objective : « Rendre nos commerciaux plus efficaces ». Key Results : « 90 % des opportunités relancées sous 48 h », « +15 % de conversion ». Les thèmes de la roadmap servent ces KR. Voir [What Matters — OKR](https://www.whatmatters.com/faqs/okr-meaning-definition-example).

**Adapter la roadmap à son public.** Direction : objectifs et impacts business. Équipe : thèmes et problèmes. Clients : bénéfices, sans dates fermes. Commercial : ce qui arrive bientôt, avec prudence.

**Exercice 2.10 (1 h 30).** Construis la roadmap Now / Next / Later de ton CRM (dans Notion, Miro ou PowerPoint), 3 thèmes par horizon, chacun relié à un OKR. Présente-la en 5 minutes à Claude jouant le rôle d'un sponsor exigeant, et note les questions difficiles.

#### Leçon 2.11 — Du thème à la tâche, et la documentation projet (3 h)

**La hiérarchie du backlog :** Thème (objectif) → Epic (gros ensemble de valeur) → User Story (besoin utilisateur livrable en un sprint) → Tâches techniques (créées par les Developers). Tu approfondiras les user stories au projet 4.

**User flow et wireframe.** Le *user flow* est le schéma des écrans et décisions que traverse l'utilisateur pour atteindre un but (ex. créer une opportunité). Le *wireframe* est une maquette basse fidélité de chaque écran, sans couleurs ni style. Outils : [Figma](https://www.figma.com/) (gratuit), [Whimsical](https://whimsical.com/), [Balsamiq](https://balsamiq.com/).

**La documentation agile** est « juste suffisante » et vivante. Une structure Notion type :

- Accueil : vision, Product Goal, contacts
- Roadmap
- Product Backlog (base de données : epic, story, statut, estimation, priorité)
- Definition of Done et Definition of Ready
- Décisions (journal daté : décision, raison, alternatives écartées)
- Comptes rendus des Sprint Reviews et rétrospectives
- Glossaire métier

**Exercice 2.11 (1 h 30).** Découpe un thème de ta roadmap en 2 epics et 8 user stories. Dessine le user flow « créer et relancer une opportunité » et 3 wireframes. Crée l'espace Notion avec les 7 rubriques.

**Quiz Partie B**

1. Une impact map répond dans l'ordre à : a) Quoi, Qui, Comment, Pourquoi · b) Pourquoi, Qui, Comment, Quoi · c) Qui, Quoi, Quand, Combien
2. Dans une story map, la première tranche horizontale représente généralement : a) le MVP · b) les bugs · c) la release finale
3. Dans MoSCoW, « W » signifie : a) Want · b) Won't (this time) · c) Wait
4. Une fonctionnalité dont l'absence déçoit mais la présence ne satisfait pas est, selon Kano : a) basique · b) de performance · c) d'enchantement
5. Une roadmap agile se distingue d'un Gantt car : a) elle n'a pas d'objectifs · b) elle communique une direction avec une précision décroissante · c) elle est confidentielle
6. Dans Scrum, qui est responsable de l'ordonnancement du Product Backlog ? a) le Scrum Master · b) le Product Owner · c) les Developers
7. Calcule le RICE : Reach 100, Impact 1, Confidence 50 %, Effort 5 → a) 10 · b) 50 · c) 100
8. Le Product Goal est : a) un objectif de sprint · b) un objectif futur du produit, engagement du Product Backlog · c) le budget du produit

*Corrigé : 1-b, 2-a, 3-b, 4-a, 5-b, 6-b, 7-a, 8-b.*

### Livrable du projet 2 — Dossier de cadrage du CRM

- [ ] Analyse du besoin et proposition fonctionnelle et technique (1 à 2 pages)
- [ ] Product Vision Board et Product Goal
- [ ] Impact map
- [ ] Story map avec 3 releases
- [ ] Product Backlog priorisé de 20 user stories minimum (Trello, Notion ou Airtable)
- [ ] User flow et 3 wireframes
- [ ] Roadmap Now / Next / Later reliée aux OKR
- [ ] Espace de documentation projet structuré

## PROJET 3 — Se préparer à la certification PSPO I

**Compétence visée :** présenter les principes, piliers, valeurs, rôles (responsabilités), événements et artefacts de Scrum.

**Cours : Apprendre à apprendre (6 h) + Gérer son temps efficacement (10 h)** + le cœur du projet : **le Scrum Guide décortiqué (Partie C)**. Livrable : fiche de synthèse Scrum + plan de révision + 2 tests blancs réussis.

### Partie A — Apprendre à apprendre (6 h)

#### Leçon 3.1 — Comment fonctionne la mémoire (1 h 30)

Apprendre, c'est créer et renforcer des connexions entre neurones. Trois étapes : **encodage** (l'information entre), **consolidation** (elle se stabilise, notamment pendant le sommeil), **récupération** (on la retrouve). Chaque récupération renforce le souvenir.

**La courbe de l'oubli (Ebbinghaus).** Sans révision, on oublie une grande partie d'une information nouvelle en quelques jours. Chaque révision espacée aplatit la courbe : on oublie moins, et moins vite.

**Mémoire de travail limitée.** On ne manipule consciemment que quelques éléments à la fois (environ 4). Conséquence : découpe les notions complexes (le Scrum Guide en 6 blocs plutôt qu'en une lecture), et élimine les distractions qui occupent cette mémoire.

**Le sommeil** consolide les apprentissages. Réviser juste avant de dormir et éviter les nuits blanches avant l'examen est une stratégie, pas un confort.

**Exercice 3.1 (30 min).** Lis la section « Scrum Theory » du [Scrum Guide](https://scrumguides.org/scrum-guide.html). Ferme l'onglet et écris de mémoire tout ce que tu as retenu. Recommence demain sans relire, puis compare : qu'as-tu oublié ?

#### Leçon 3.2 — Les techniques d'apprentissage efficaces (2 h)

La recherche en sciences cognitives distingue clairement les techniques efficaces des techniques populaires mais peu efficaces (relire, surligner). Synthèse accessible : [Dunlosky et al., résumé APS](https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html) et [Learning Scientists](https://www.learningscientists.org/downloadable-materials).

| Technique | Principe | Application PSPO |
| --- | --- | --- |
| Récupération active | Se tester au lieu de relire | Quiz, flashcards, tests blancs |
| Répétition espacée | Revoir à intervalles croissants (J+1, J+3, J+7, J+15) | Cartes [Anki](https://apps.ankiweb.net/) sur le Scrum Guide |
| Entrelacement | Mélanger les sujets lors d'une séance | Alterner événements, artefacts, responsabilités |
| Élaboration | Se demander « pourquoi ? » et relier à ce qu'on sait | « Pourquoi le Daily Scrum est-il pour les Developers ? » |
| Exemples concrets | Illustrer chaque notion abstraite | Imaginer un sprint réel d'une appli de covoiturage |
| Double codage | Associer texte et schéma | Dessiner le cycle du Sprint |

**La technique Feynman.** 1) Choisis une notion. 2) Explique-la par écrit comme à un enfant de 12 ans. 3) Repère où tu bloques ou utilises du jargon. 4) Retourne à la source, simplifie, recommence.

**Claude comme partenaire de récupération active.** Prompt efficace : « Je révise le Scrum Guide 2020. Pose-moi une question à la fois, de difficulté croissante. N'affiche pas la réponse avant que j'aie répondu. Corrige-moi en citant la section concernée. » Vérifie tout de même les corrections dans le Guide.

**Exercice 3.2 (1 h).** Crée un paquet Anki de 30 cartes sur les éléments Scrum (une question par carte, réponse courte). Explique « l'empirisme » avec la technique Feynman en 10 lignes et fais-la relire par Claude.

#### Leçon 3.3 — Motivation, concentration et état d'esprit (1 h 30)

**État d'esprit de croissance (Carol Dweck).** Les compétences se développent par l'effort et la stratégie. Remplace « je suis nul en Scrum » par « je ne maîtrise pas encore les événements ».

**Mode concentré et mode diffus.** Le cerveau alterne entre concentration intense et pensée diffuse (marche, douche). Bloquer sur un problème puis faire une pause permet souvent de trouver la solution. Cours gratuit de référence : [Learning How to Learn (Coursera)](https://www.coursera.org/learn/learning-how-to-learn).

**Gérer la procrastination.** Démarrer est le plus dur : engage-toi sur 5 minutes seulement. Récompense le processus (avoir fait 2 sessions) plutôt que le résultat.

**Exercice 3.3 (30 min).** Liste tes 3 principales sources de distraction et une parade pour chacune. Rédige ton « pourquoi » : pourquoi veux-tu devenir PO ? Garde-le visible.

#### Leçon 3.4 — Construire son plan d'apprentissage (1 h)

Un bon plan combine : objectif précis (« réussir la PSPO I avec 90 % le \[date\] »), découpage en blocs, sessions de récupération planifiées, tests blancs comme jalons, et marge pour l'imprévu. C'est un sprint appliqué à toi-même : objectif, plan, inspection hebdomadaire, adaptation.

**Exercice 3.4 (1 h).** Rédige ton plan de révision PSPO sur 3 semaines (modèle en Partie C, leçon 3.12).

**Quiz Partie A**

1. La technique la plus efficace parmi : a) relire ses notes · b) se tester · c) surligner
2. Revoir une notion à J+1, J+3, J+7, c'est : a) l'entrelacement · b) la répétition espacée · c) l'élaboration
3. La technique Feynman consiste à : a) mémoriser par cœur · b) expliquer simplement pour repérer ses lacunes · c) lire à voix haute
4. Vrai ou faux : le sommeil joue un rôle dans la consolidation de la mémoire.

*Corrigé : 1-b, 2-b, 3-b, 4-vrai.*

### Partie B — Gérer son temps efficacement (10 h)

#### Leçon 3.5 — Diagnostiquer son temps (2 h)

On ne peut pas améliorer ce qu'on ne mesure pas. Pendant 5 jours, note par tranche de 30 minutes ce que tu fais réellement. Outils : un tableur, [Toggl Track](https://toggl.com/track/) ou [Clockify](https://clockify.me/) (gratuits).

**Les lois du temps à connaître**

- **Loi de Parkinson :** le travail s'étend pour remplir le temps disponible. D'où l'intérêt des timeboxes (comme dans Scrum).
- **Loi de Pareto (80/20) :** environ 20 % des efforts produisent 80 % des résultats.
- **Loi de Carlson :** un travail interrompu prend plus de temps qu'un travail continu.
- **Loi d'Illich :** au-delà d'un certain temps, l'efficacité baisse ; les pauses sont productives.

**Exercice 3.5 (1 h + 5 jours de relevé).** Fais ton relevé, puis classe chaque activité : à forte valeur, nécessaire, gaspillage. Calcule le pourcentage de chaque catégorie.

#### Leçon 3.6 — Prioriser ses tâches (2 h)

**La matrice d'Eisenhower**

|  | Urgent | Non urgent |
| --- | --- | --- |
| **Important** | Faire maintenant (crise, échéance du jour) | Planifier (apprentissage, stratégie, vision produit) |
| **Non important** | Déléguer ou réduire (certaines réunions, interruptions) | Éliminer (scroll, e-mails inutiles) |

Le quadrant « important et non urgent » est celui où se construit la valeur, et celui qu'on néglige le plus. Pour un PO : affinage du backlog, entretiens utilisateurs, veille.

**La méthode Ivy Lee :** chaque soir, écris les 6 tâches les plus importantes du lendemain, dans l'ordre. Commence par la première et ne passe à la suivante qu'une fois terminée.

**Exercice 3.6 (1 h).** Place tes 20 tâches de la semaine dans la matrice. Déplace au moins 2 heures vers le quadrant « planifier » et bloque-les dans ton agenda.

#### Leçon 3.7 — Techniques de concentration et d'organisation (3 h)

- **Pomodoro :** 25 minutes de travail concentré, 5 minutes de pause, une pause longue toutes les 4 sessions. Idéal pour les révisions PSPO.
- **Time blocking :** bloquer dans l'agenda des créneaux par type d'activité (deep work le matin, réunions l'après-midi).
- **Regroupement (batching) :** traiter les e-mails 2 à 3 fois par jour plutôt qu'en continu.
- **GTD (Getting Things Done, David Allen) :** capturer, clarifier, organiser, réfléchir, agir. Règle des 2 minutes : si une tâche prend moins de 2 minutes, la faire tout de suite.
- **Kanban personnel :** colonnes À faire / En cours / Fait, avec une limite de 3 tâches « en cours ». Sur [Trello](https://trello.com/) ou Notion.

**Exercice 3.7 (2 h).** Crée ton Kanban personnel avec limite de WIP. Fais une journée entière en Pomodoro et note le nombre de sessions réussies.

#### Leçon 3.8 — Gérer les interruptions, les réunions et l'énergie (2 h)

Un PO est très sollicité. Il doit protéger du temps pour la réflexion tout en restant disponible pour l'équipe.

- **Savoir dire non :** « Oui, et pour cela je vais devoir décaler X. Qu'est-ce qui est le plus important ? »
- **Réunions utiles :** un objectif écrit, un ordre du jour, une timebox, une décision ou une action à la fin. Sinon, décline ou propose un écrit.
- **Énergie :** repère tes heures de pic (souvent le matin) et places-y tes tâches les plus exigeantes.
- **Créneaux de disponibilité :** « office hours » pour l'équipe, afin de limiter les interruptions aléatoires.

**Exercice 3.8 (1 h).** Avec Claude jouant un collègue insistant, entraîne-toi à refuser 3 demandes de réunion ou de fonctionnalité de manière constructive.

#### Leçon 3.9 — Faire sa rétrospective personnelle (1 h)

Applique le format Start / Stop / Continue à ton organisation chaque vendredi : une chose à commencer, une à arrêter, une à continuer. C'est la logique de la Sprint Retrospective, à ton échelle.

**Quiz Partie B**

1. Les tâches importantes mais non urgentes doivent être : a) éliminées · b) planifiées · c) déléguées
2. « Le travail s'étend pour remplir le temps disponible » est la loi de : a) Pareto · b) Parkinson · c) Carlson
3. Un Pomodoro classique dure : a) 15 min · b) 25 min · c) 50 min
4. Selon GTD, une tâche de moins de 2 minutes se : a) planifie · b) fait tout de suite · c) délègue

*Corrigé : 1-b, 2-b, 3-b, 4-b.*

### Partie C — Le Scrum Guide décortiqué (cœur du projet)

Le [Scrum Guide 2020](https://scrumguides.org/scrum-guide.html) fait environ 13 pages. C'est **la seule référence** de l'examen PSPO I : en cas de doute, la réponse correcte est celle du Guide, même si ton entreprise fait autrement. Lis-le en anglais (l'examen est en anglais) et en français pour vérifier ta compréhension.

#### Leçon 3.10 — Théorie, piliers et valeurs (1 h)

**Définition.** Scrum est un cadre de travail léger qui aide des personnes, des équipes et des organisations à générer de la valeur grâce à des solutions adaptatives pour des problèmes complexes. Il est volontairement incomplet : il définit seulement les éléments nécessaires.

**Fondements :** l'**empirisme** (la connaissance vient de l'expérience et les décisions se fondent sur ce qui est observé) et le **lean thinking** (réduire le gaspillage, se concentrer sur l'essentiel). Scrum utilise une approche itérative et incrémentale pour améliorer la prévisibilité et maîtriser le risque.

**Les 3 piliers**

| Pilier | Signification |
| --- | --- |
| Transparence | Le processus et le travail doivent être visibles pour ceux qui l'effectuent et ceux qui le reçoivent |
| Inspection | Les artefacts et la progression vers les objectifs sont inspectés fréquemment pour détecter les écarts |
| Adaptation | Si un écart est inacceptable, on ajuste le plus tôt possible |

L'inspection sans transparence est trompeuse ; l'inspection sans adaptation est inutile.

**Les 5 valeurs :** Engagement, Focus (concentration), Ouverture, Respect, Courage.

#### Leçon 3.11 — L'équipe Scrum et ses 3 responsabilités (1 h 30)

L'équipe Scrum comprend **un** Scrum Master, **un** Product Owner et des Developers. Pas de sous-équipe ni de hiérarchie. Elle est **pluridisciplinaire** (toutes les compétences pour créer de la valeur à chaque Sprint) et **autogérée** (elle décide en interne qui fait quoi, quand et comment). Elle compte généralement 10 personnes ou moins. Toute l'équipe est responsable de créer un incrément utile et de valeur à chaque Sprint.

| Responsabilité | Est redevable de… | Points d'examen fréquents |
| --- | --- | --- |
| **Developers** | Créer le Sprint Backlog ; garantir la qualité en respectant la Definition of Done ; adapter leur plan chaque jour vers le Sprint Goal ; se tenir mutuellement responsables | Seuls les Developers modifient le Sprint Backlog et estiment le travail |
| **Product Owner** | Maximiser la valeur du produit résultant du travail de l'équipe ; gérer efficacement le Product Backlog : développer et communiquer le Product Goal, créer et communiquer les éléments, les ordonner, garantir que le backlog est transparent, visible et compris | Une personne, pas un comité. Peut déléguer mais reste redevable. Ses décisions doivent être respectées par toute l'organisation |
| **Scrum Master** | Mettre en place Scrum tel que défini dans le Guide ; rendre l'équipe efficace ; servir l'équipe, le PO et l'organisation | Leader au service de l'équipe ; aide le PO à trouver des techniques de gestion du backlog ; fait supprimer les obstacles |

**Un piège classique :** « Le PO assigne les tâches aux Developers. » Faux : l'équipe est autogérée. Autre piège : « Le Scrum Master est le chef de projet. » Faux.

#### Leçon 3.12 — Les 5 événements (1 h 30)

Chaque événement est une occasion formelle d'inspecter et d'adapter. Ils ont une durée maximale (*timebox*) ; les durées ci-dessous valent pour un Sprint d'un mois, elles sont généralement plus courtes pour des Sprints plus courts.

| Événement | Durée max | Participants | Objet |
| --- | --- | --- | --- |
| **Sprint** | 1 mois | Toute l'équipe | Conteneur de tous les événements ; durée fixe ; un nouveau commence dès la fin du précédent |
| **Sprint Planning** | 8 h | Équipe Scrum (+ invités si utile) | 3 sujets : Pourquoi ce Sprint a de la valeur (Sprint Goal) ? Que peut-on faire ? Comment le faire ? |
| **Daily Scrum** | 15 min | Developers (PO et SM y participent s'ils travaillent sur des éléments du Sprint Backlog) | Inspecter la progression vers le Sprint Goal et adapter le Sprint Backlog |
| **Sprint Review** | 4 h | Équipe + parties prenantes | Inspecter le résultat du Sprint et décider des adaptations futures ; séance de travail, pas une simple démo |
| **Sprint Retrospective** | 3 h | Équipe Scrum | Planifier des moyens d'améliorer qualité et efficacité ; clôt le Sprint |

**Règles pendant le Sprint :** aucun changement qui mettrait en danger le Sprint Goal ; la qualité ne diminue pas ; le Product Backlog est affiné au besoin ; le périmètre peut être clarifié et renégocié avec le PO au fil de l'apprentissage.

**Annulation :** seul le PO peut annuler un Sprint, si le Sprint Goal devient obsolète.

**Affinage (refinement) :** activité continue (pas un événement) pour décomposer et préciser les éléments du Product Backlog. Les Developers qui feront le travail sont responsables du dimensionnement ; le PO peut les aider à comprendre et arbitrer.

#### Leçon 3.13 — Les 3 artefacts et leurs engagements (1 h)

Chaque artefact contient un engagement qui renforce la transparence et donne un repère pour mesurer la progression.

| Artefact | Engagement | Contenu clé |
| --- | --- | --- |
| Product Backlog | **Product Goal** | Liste ordonnée et évolutive de ce qui est nécessaire pour améliorer le produit ; source unique du travail de l'équipe |
| Sprint Backlog | **Sprint Goal** | Sprint Goal (pourquoi) + éléments sélectionnés (quoi) + plan d'action (comment) ; appartient aux Developers |
| Increment | **Definition of Done** | Étape concrète vers le Product Goal ; plusieurs incréments peuvent être créés dans un Sprint et livrés avant sa fin |

**Definition of Done.** Description formelle de l'état de l'incrément quand il respecte les standards de qualité. Un élément qui ne la respecte pas ne peut pas être présenté en Sprint Review ni livré ; il retourne au Product Backlog. Si plusieurs équipes Scrum travaillent sur le même produit, elles partagent la même DoD.

**Plusieurs équipes, un produit :** elles partagent un seul Product Goal, un seul Product Backlog et un seul Product Owner.

**Exercice Partie C (2 h).** Dessine le cycle complet d'un Sprint (événements, artefacts, engagements) sur une seule page. Puis réalise le test gratuit [Scrum Open](https://www.scrum.org/open-assessments/scrum-open) et le [Product Owner Open](https://www.scrum.org/open-assessments/product-owner-open) jusqu'à obtenir 100 % trois fois de suite. Complète avec les quiz d'entraînement de [mlapshin.com](https://mlapshin.com/index.php/scrum-quizzes/) (mode « Product Owner »).

**Quiz Partie C (format PSPO I)**

1. Qui est responsable de la gestion du Product Backlog ? a) le Scrum Master · b) le Product Owner · c) les parties prenantes · d) les Developers
2. Durée maximale du Daily Scrum : a) 15 min · b) 30 min · c) dépend du Sprint
3. Qui peut annuler un Sprint ? a) le Scrum Master · b) le Product Owner · c) le sponsor · d) les Developers
4. L'engagement lié au Sprint Backlog est : a) le Product Goal · b) le Sprint Goal · c) la Definition of Done
5. Le Product Owner peut-il être un comité ? a) oui · b) non
6. Durée maximale de la Sprint Review pour un Sprint d'un mois : a) 2 h · b) 3 h · c) 4 h · d) 8 h
7. Qui crée le Sprint Backlog et peut le modifier pendant le Sprint ? a) le PO · b) les Developers · c) le Scrum Master
8. Les 3 piliers de l'empirisme sont : a) transparence, inspection, adaptation · b) engagement, focus, courage · c) planifier, faire, vérifier
9. Un élément qui ne respecte pas la Definition of Done : a) est livré avec une note · b) retourne au Product Backlog · c) est présenté en review comme « presque fini »
10. Trois équipes travaillent sur le même produit. Combien de Product Backlogs ? a) 1 · b) 3 · c) au choix
11. Un incrément peut-il être livré avant la fin du Sprint ? a) oui · b) non, seulement après la Sprint Review
12. Quel événement clôt le Sprint ? a) Sprint Review · b) Sprint Retrospective · c) Sprint Planning
13. Taille typique d'une équipe Scrum : a) 10 personnes ou moins · b) 3 à 9 Developers exactement · c) illimitée
14. Pendant le Sprint, le périmètre peut être clarifié et renégocié avec : a) le Scrum Master · b) le Product Owner · c) le manager
15. L'affinage du Product Backlog est : a) un événement Scrum de 2 h · b) une activité continue · c) réservé au PO

*Corrigé : 1-b, 2-a, 3-b, 4-b, 5-b, 6-c, 7-b, 8-a, 9-b, 10-a, 11-a, 12-b, 13-a, 14-b, 15-b.*

### Livrable du projet 3 — Plan de révision sur 3 semaines

| Semaine | Lundi à vendredi (1 h/jour) | Week-end |
| --- | --- | --- |
| 1 | Lecture du Scrum Guide par blocs (théorie, équipe, événements, artefacts) + 30 cartes Anki | Scrum Open × 3, analyse des erreurs |
| 2 | Répétition espacée Anki + technique Feynman sur chaque responsabilité + quiz Claude | Product Owner Open × 3 ; viser 100 % |
| 3 | Entrelacement : quiz mlapshin chronométrés (80 questions / 60 min) | 2 tests blancs complets ≥ 90 % |

- [ ] Fiche de synthèse Scrum d'une page (schéma du Sprint)
- [ ] Paquet Anki de 30 cartes minimum
- [ ] Plan de révision daté
- [ ] Scrum Open et Product Owner Open réussis à 100 % trois fois
- [ ] Rétrospective personnelle écrite

## PROJET 4 — Optimiser le Product Backlog

**Compétences visées :** définir les processus qualité d'une user story · évaluer les fonctionnalités du produit · formaliser un plan de release agile · mettre à jour ce plan et le communiquer aux équipes.

**Cours : Gestion de projet agile et Scrum (6 h) + User stories et tests d'acceptation (10 h) + Fondamentaux de l'estimation agile (10 h)** · Livrable : backlog optimisé, plan de release mis à jour et présentation de Sprint Review.

### Partie A — Scrum en pratique (6 h)

#### Leçon 4.1 — Préparer et animer le Sprint Planning (1 h 30)

**Avant :** le PO arrive avec un Product Backlog affiné (les premiers éléments sont prêts), une proposition d'objectif métier et les retours de la dernière review. Les Developers connaissent leur capacité (congés, vélocité passée).

**Déroulé type (Sprint de 2 semaines, environ 4 h)**

1. **Pourquoi (30 min) :** le PO explique comment le produit peut gagner en valeur ; l'équipe formule ensemble le **Sprint Goal**. Exemple : « Un commercial peut planifier et recevoir un rappel de relance. »
2. **Quoi (1 h 30) :** les Developers sélectionnent les éléments du Product Backlog qui servent l'objectif, selon leur capacité.
3. **Comment (2 h) :** les Developers découpent chaque élément en tâches d'une journée ou moins. Le Sprint Backlog est créé.

**Un bon Sprint Goal** est un objectif unique, cohérent, compréhensible par une partie prenante, qui laisse de la souplesse sur le contenu exact. Mauvais exemple : « Faire les stories 12, 14, 15 et 18. »

**Exercice 4.1 (30 min).** À partir du backlog de ton CRM (projet 2), rédige 3 Sprint Goals possibles et choisis le meilleur. Demande à Claude de le critiquer.

#### Leçon 4.2 — Le Daily Scrum et le tableau de l'équipe (1 h)

Le Daily Scrum sert à **inspecter la progression vers le Sprint Goal** et à adapter le plan. Les « 3 questions » (hier, aujourd'hui, obstacles) ne sont plus imposées depuis 2020 : l'équipe choisit le format. Une alternative efficace : « parcourir le tableau de droite à gauche » (on commence par ce qui est presque fini).

**Le tableau de Sprint :** colonnes À faire / En cours / En revue / Fait, avec limite de travail en cours. Outils : [Jira](https://www.atlassian.com/fr/software/jira), [Trello](https://trello.com/), [Linear](https://linear.app/).

**Le burndown chart** montre le travail restant dans le Sprint jour après jour. Une courbe plate pendant 3 jours est un signal à discuter.

**Rôle du PO :** disponible pour clarifier, mais il n'anime pas le Daily et ne s'en sert pas pour suivre l'avancement.

#### Leçon 4.3 — La Sprint Review et la collecte du feedback (1 h 30)

La Sprint Review est une **séance de travail**, pas une démo de validation. Déroulé conseillé (1 h 30 pour 2 semaines) :

1. Rappel du Sprint Goal et du Product Goal (5 min)
2. Ce qui est fait et pas fait, au regard de la Definition of Done (5 min)
3. Démonstration par les Developers, idéalement manipulée par les parties prenantes (30 min)
4. Discussion : retours, évolution du marché, budget, délais (30 min)
5. Mise à jour du Product Backlog et des prévisions (release plan) (20 min)

**Collecter le feedback efficacement :** questions ouvertes (« qu'est-ce qui vous a surpris ? »), observer les parties prenantes manipuler l'incrément, noter les retours dans un tableau partagé, puis les transformer en éléments de backlog.

#### Leçon 4.4 — La Sprint Retrospective (1 h)

Objectif : améliorer **qualité et efficacité** (personnes, interactions, processus, outils, DoD). On en ressort avec au moins une amélioration concrète, souvent ajoutée au Sprint Backlog suivant.

**Formats populaires :** Start / Stop / Continue · Mad / Sad / Glad · Voilier (vent = ce qui pousse, ancre = ce qui freine, rochers = risques, île = objectif) · 4L (Liked, Learned, Lacked, Longed for). Idées et modèles : [Retromat](https://retromat.org/fr/), [FunRetrospectives](https://www.funretrospectives.com/).

#### Leçon 4.5 — Indicateurs agiles utiles (1 h)

| Indicateur | Ce qu'il mesure | Piège |
| --- | --- | --- |
| Vélocité | Points livrés par Sprint (moyenne sur 3 à 5 Sprints) | Comparer des équipes ; en faire un objectif |
| Burndown / burnup | Travail restant / travail réalisé vs périmètre | Ignorer les changements de périmètre |
| Lead time / cycle time | Délai entre demande (ou démarrage) et livraison | Moyenne trompeuse : regarder la distribution |
| Taux de défauts échappés | Bugs trouvés en production | Cacher les bugs pour améliorer le chiffre |
| Indicateurs de valeur | Usage, rétention, satisfaction (NPS, CSAT) | Les plus importants pour un PO, souvent oubliés |

Scrum.org propose un cadre de mesure orienté valeur : [Evidence-Based Management](https://www.scrum.org/resources/evidence-based-management).

**Quiz Partie A**

1. Le Sprint Goal est créé : a) par le PO seul avant le Planning · b) par l'équipe Scrum pendant le Sprint Planning · c) par le manager
2. Le Daily Scrum a pour but premier : a) le reporting au PO · b) inspecter la progression vers le Sprint Goal · c) répondre obligatoirement aux 3 questions
3. La Sprint Review est : a) une validation formelle · b) une séance de travail avec les parties prenantes · c) réservée à l'équipe
4. La vélocité sert à : a) comparer les équipes · b) aider l'équipe à prévoir · c) évaluer les individus

*Corrigé : 1-b, 2-b, 3-b, 4-b.*

### Partie B — Rédiger la documentation agile : user stories et tests d'acceptation (10 h)

#### Leçon 4.6 — Anatomie d'une user story (1 h 30)

Une user story est une **promesse de conversation** sur un besoin utilisateur, pas une spécification complète. Le modèle des **3C** (Ron Jeffries) : *Card* (une carte courte), *Conversation* (l'échange qui précise), *Confirmation* (les critères d'acceptation).

**Format classique**

> En tant que **\[type d'utilisateur\]**, je veux **\[action\]** afin de **\[bénéfice\]**.

Exemple : « En tant que commercial, je veux recevoir un rappel la veille d'une relance prévue afin de ne plus oublier mes clients. »

Le « afin de » est la partie la plus importante : il donne le sens et permet à l'équipe de proposer une meilleure solution.

**Erreurs fréquentes :** user story technique (« En tant que développeur, je veux une base PostgreSQL »), utilisateur vague (« en tant qu'utilisateur »), absence de bénéfice, story trop grosse pour un Sprint. Note : le Scrum Guide ne parle pas de user stories ; il parle d'« éléments du Product Backlog ». Les user stories sont une pratique complémentaire très répandue.

Ressource : [Mike Cohn — User Stories](https://www.mountaingoatsoftware.com/agile/user-stories).

#### Leçon 4.7 — La grille INVEST (1 h 30)

| Lettre | Critère | Question de contrôle |
| --- | --- | --- |
| I | Indépendante | Peut-on la livrer sans attendre une autre story ? |
| N | Négociable | Le « comment » reste-t-il ouvert à la discussion ? |
| V | Valorisable | Apporte-t-elle une valeur visible à un utilisateur ou au client ? |
| E | Estimable | L'équipe peut-elle l'estimer ? |
| S | Small (petite) | Tient-elle confortablement dans un Sprint ? |
| T | Testable | Peut-on vérifier objectivement qu'elle est terminée ? |

**Exercice 4.7 (45 min).** Évalue ces stories avec INVEST et corrige-les : a) « En tant qu'utilisateur, je veux un CRM complet » ; b) « Mettre en place l'API » ; c) « En tant que manager, je veux voir le tableau de bord afin de suivre mon équipe ». Compare avec la correction proposée par Claude.

#### Leçon 4.8 — Découper les stories (2 h)

Une story trop grosse (epic) doit être découpée **verticalement** : chaque morceau traverse toutes les couches (interface, logique, données) et apporte une valeur, au lieu d'un découpage horizontal (« faire la base », puis « faire l'écran »).

**La méthode SPIDR (Mike Cohn)**

- **S**pike : un travail d'exploration limité dans le temps quand on ne sait pas estimer
- **P**aths : découper par chemin du parcours (paiement par carte, puis par virement)
- **I**nterfaces : découper par support (web d'abord, mobile ensuite)
- **D**ata : découper par type de données (contacts France, puis international)
- **R**ules : reporter des règles métier (sans gestion des doublons, puis avec)

Autres patterns : opérations CRUD (créer, lire, modifier, supprimer), cas nominal puis cas d'erreur, version simple puis optimisée. Guide visuel : [Humanizing Work — Story Splitting Flowchart](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/).

**Exercice 4.8 (1 h).** Découpe l'epic « Gérer les relances clients » en 6 stories verticales avec au moins 3 patterns différents.

#### Leçon 4.9 — Critères et tests d'acceptation (2 h 30)

Les **critères d'acceptation** définissent les conditions propres à une story pour qu'elle soit acceptée. Ils sont rédigés avant le développement, avec les Developers.

**Format Gherkin (BDD)**

```
Scénario : rappel envoyé la veille d'une relance
  Étant donné qu'un commercial a planifié une relance le 15 mars à 10 h
  Et que les notifications sont activées
  Quand nous sommes le 14 mars à 10 h
  Alors le commercial reçoit une notification « Relance demain : Société Dupont »
  Et la notification contient un lien vers la fiche client

Scénario : pas de rappel si la relance est annulée
  Étant donné qu'une relance prévue le 15 mars a été annulée
  Quand nous sommes le 14 mars à 10 h
  Alors aucune notification n'est envoyée
```

**Bonnes pratiques :** un comportement par scénario, des données concrètes, couvrir le cas nominal, les cas limites et les erreurs, rester compréhensible par un non-technicien. Le BDD (Behaviour-Driven Development) permet d'automatiser ces scénarios avec des outils comme [Cucumber](https://cucumber.io/docs/gherkin/reference/).

**L'atelier des « 3 amigos » :** PO (le besoin), Developer (la faisabilité), testeur (les cas limites) rédigent ensemble les critères. Variante : l'[Example Mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/) avec cartes jaunes (story), bleues (règles), vertes (exemples), rouges (questions).

**Exercice 4.9 (1 h 30).** Rédige les critères Gherkin (3 scénarios minimum dont un cas d'erreur) pour 4 stories de ton CRM. Demande à Claude : « Quels cas limites ai-je oubliés ? »

#### Leçon 4.10 — Definition of Ready, Definition of Done et wiki (2 h)

|  | Definition of Ready (pratique facultative) | Definition of Done (obligatoire dans Scrum) |
| --- | --- | --- |
| Quand | Avant d'entrer dans un Sprint | Pour qu'un incrément soit terminé |
| Porte sur | Une story : est-elle assez claire ? | Tout incrément : respecte-t-il les standards de qualité ? |
| Exemple | Story INVEST, critères rédigés, maquette jointe, dépendances levées, estimée | Code relu, tests automatisés passés, critères validés, déployé en préproduction, documentation mise à jour |

Attention : une DoR trop rigide devient une « porte » en cascade. Elle doit aider, pas bloquer.

**Organiser le wiki des exigences** ([Confluence](https://www.atlassian.com/fr/software/confluence) ou Notion) : une page par epic (objectif, stories liées, maquettes, décisions, questions ouvertes), un modèle de story réutilisable, un lien bidirectionnel avec l'outil de backlog.

**Exercice 4.10 (1 h).** Rédige la DoR et la DoD de ton projet CRM. Crée le modèle de page « Epic » dans Notion.

**Quiz Partie B**

1. Les 3C d'une user story sont : a) Card, Conversation, Confirmation · b) Client, Coût, Calendrier · c) Code, Contrôle, Commit
2. Dans INVEST, le « N » signifie : a) Nécessaire · b) Négociable · c) Numérotée
3. Un découpage vertical : a) sépare front-end et back-end · b) livre une tranche de valeur traversant toutes les couches · c) sépare analyse et développement
4. Dans Gherkin, « Quand » décrit : a) le contexte · b) l'action ou l'événement · c) le résultat attendu
5. La Definition of Ready est : a) obligatoire dans Scrum · b) une pratique complémentaire · c) identique à la DoD
6. Les critères d'acceptation sont rédigés : a) après le développement · b) avant, avec les Developers · c) par le testeur seul

*Corrigé : 1-a, 2-b, 3-b, 4-b, 5-b, 6-b.*

### Partie C — Fondamentaux de l'estimation agile (10 h)

#### Leçon 4.11 — Pourquoi et comment estimer (2 h)

On estime pour **prendre des décisions** (est-ce que ça vaut le coût ? que peut-on promettre ?), pas pour contrôler les gens. Les humains sont mauvais en estimation absolue (« 3 jours ») mais bons en estimation **relative** (« deux fois plus gros que celle-ci »).

**Les story points** mesurent une taille relative qui combine complexité, effort et incertitude. On utilise souvent une suite de Fibonacci modifiée : 1, 2, 3, 5, 8, 13, 20, 40, 100. Les écarts croissants reflètent l'incertitude croissante des gros éléments.

**Le cône d'incertitude :** au début d'un projet, une estimation peut varier d'un facteur 4 ; l'incertitude se réduit à mesure qu'on apprend.

**Rappel Scrum :** ce sont les **Developers** qui estiment, car ce sont eux qui feront le travail. Le PO clarifie, mais n'impose pas d'estimation.

#### Leçon 4.12 — Les techniques d'estimation en atelier (3 h)

| Technique | Déroulé | Quand |
| --- | --- | --- |
| Planning Poker | Chacun choisit une carte en secret ; révélation simultanée ; les extrêmes s'expliquent ; on revote | Affinage de 5 à 15 stories |
| T-shirt sizing | XS, S, M, L, XL | Estimations grossières d'epics, roadmap |
| Affinity estimation | On classe silencieusement les cartes sur un mur du plus petit au plus gros, puis on attribue les points par colonne | 50 à 100 éléments en une heure |
| Bucket system | Variante avec des « seaux » de valeurs Fibonacci | Gros backlogs, plusieurs équipes |

Le Planning Poker limite le **biais d'ancrage** (leçon 2) et fait émerger les malentendus : quand une personne vote 2 et une autre 13, l'une d'elles sait quelque chose que l'autre ignore. Outils en ligne gratuits : [PlanITpoker](https://www.planitpoker.com/), [Scrumpy Planning Poker](https://scrumpy.io/).

**Animer l'atelier (rôle du PO) :** présenter la story et ses critères, répondre aux questions, ne pas commenter les votes, accepter de découper une story jugée trop grosse (≥ 13).

**Exercice 4.12 (1 h 30).** Choisis une story de référence de 3 points dans ton CRM, puis estime 10 autres stories relativement à elle. Simule un Planning Poker avec Claude : « Tu joues 3 Developers aux avis différents ; présente vos votes et arguments pour chaque story. »

#### Leçon 4.13 — Vélocité et prévisions (2 h)

La **vélocité** est la moyenne des points réellement terminés (selon la DoD) sur les derniers Sprints. Elle sert à prévoir, jamais à évaluer.

**Prévision en fourchette.** Vélocités des 5 derniers Sprints : 18, 22, 20, 17, 23. Moyenne = 20 ; sur les 3 plus faibles = 18,3 ; sur les 3 plus fortes = 21,7. Pour un reste de 120 points : 120 / 21,7 ≈ 5,5 Sprints (optimiste) à 120 / 18,3 ≈ 6,6 Sprints (prudent). On annonce donc **6 à 7 Sprints**, pas « 6 Sprints ».

**Prévisions probabilistes.** Les simulations Monte-Carlo, à partir du débit historique (nombre d'éléments terminés par semaine), donnent une probabilité : « 85 % de chances de finir avant le 30 juin ». Introduction : [Actionable Agile — Monte Carlo](https://www.actionableagile.com/).

**#NoEstimates.** Certaines équipes ne chiffrent plus en points : elles découpent toutes les stories à une taille similaire et comptent le nombre d'éléments. C'est compatible avec Scrum, qui n'impose aucune technique d'estimation.

#### Leçon 4.14 — Formaliser un plan de release agile (2 h)

Un plan de release répond à : **quoi** (périmètre, en général un sous-ensemble du backlog), **quand** (fourchette de dates ou de Sprints) et **pourquoi** (objectif de la release). Il se fixe selon deux modes :

- **Date fixe, périmètre variable :** « Le 1er juin, nous livrerons au minimum les Must, probablement les Should. » Le plus courant.
- **Périmètre fixe, date variable :** « Toutes ces fonctionnalités seront prêtes entre le Sprint 8 et le Sprint 10. »

On ne fixe jamais en même temps le périmètre, la date et la qualité : c'est le **triangle de fer**. En agile, la qualité (DoD) n'est pas négociable ; on ajuste le périmètre.

**Exemple de plan de release (Sprints de 2 semaines, vélocité 18 à 22)**

| Release | Objectif | Contenu (points) | Sprints prévus | Livraison estimée |
| --- | --- | --- | --- | --- |
| R1 — MVP | Un commercial gère ses contacts et relances | 80 (Must) | 4 à 5 | Fin Sprint 4 ou 5 |
| R2 | Les managers pilotent l'activité | 60 | 3 | Fin Sprint 7 ou 8 |
| R3 | Intégration e-mail et agenda | 70 | 3 à 4 | Fin Sprint 11 ou 12 |

#### Leçon 4.15 — Mettre à jour et communiquer le plan (1 h)

Le plan de release est révisé **à chaque Sprint Review** avec la nouvelle vélocité, les nouveaux éléments et les retours. Un **burnup chart** (travail fait vs périmètre total) montre clairement si le périmètre grossit ou si l'équipe ralentit.

**Communiquer un retard :** annonce-le tôt, avec les faits (vélocité, ajout de périmètre), les options (réduire le périmètre, décaler, accepter une release partielle) et ta recommandation. Ne cache jamais un retard en réduisant la qualité.

**Exercice Partie C (2 h).** Construis le plan de release de ton CRM à partir de ta story map. Simule un Sprint 3 où la vélocité tombe à 12 et où 15 points sont ajoutés. Mets à jour le plan et rédige un message de 10 lignes aux parties prenantes. Fais-le relire par Claude en tant que sponsor mécontent.

**Quiz Partie C**

1. Qui estime les éléments du Product Backlog ? a) le PO · b) les Developers · c) le Scrum Master
2. Les story points mesurent : a) des heures · b) une taille relative · c) la valeur métier
3. Le Planning Poker réduit notamment : a) le biais d'ancrage · b) l'effet de halo · c) le biais du survivant
4. Vélocités : 10, 14, 12. Reste à faire : 60 points. Prévision réaliste : a) exactement 5 Sprints · b) 4 à 6 Sprints · c) 2 Sprints
5. En agile, l'élément du triangle de fer qu'on ne sacrifie pas est : a) la date · b) le périmètre · c) la qualité
6. Le plan de release est mis à jour : a) en fin de projet · b) à chaque Sprint Review · c) jamais

*Corrigé : 1-b, 2-b, 3-a, 4-b, 5-c, 6-b.*

### Livrable du projet 4

- [ ] 20 stories réécrites et validées avec INVEST
- [ ] 2 epics découpés avec SPIDR
- [ ] Critères Gherkin pour les 10 premières stories
- [ ] DoR et DoD rédigées
- [ ] Backlog estimé en story points (Planning Poker simulé)
- [ ] Plan de release en 3 releases, avec fourchettes
- [ ] Plan mis à jour après une simulation de retard + message aux parties prenantes
- [ ] Support de Sprint Review (5 diapositives : objectif, réalisé, démo, retours, prévisions)

## PROJET 5 — Piloter la livraison et les correctifs d'une fonctionnalité dans un projet agile à grande échelle

**Compétences visées :** coordonner les actions de l'équipe projet · définir la structure des équipes et la stratégie d'allocation des fonctionnalités · gérer les délais · planifier la priorisation des bugs · préparer et présenter la revue de l'ensemble du travail aux parties prenantes.

**Cours : Adopter l'agilité à l'échelle (8 h) + User stories (révision, 10 h — voir leçons 5.6 à 5.10)** · Livrable : dossier d'organisation multi-équipes, plan de gestion des bugs et Sprint Review commune.

### Partie A — Adopter l'agilité à l'échelle (8 h)

#### Leçon 5.1 — Pourquoi passer à l'échelle est difficile (1 h)

Quand un produit mobilise plusieurs équipes, les difficultés changent de nature : **dépendances** entre équipes, **intégration** du travail en un seul incrément, **alignement** sur les priorités, et multiplication des réunions.

**La loi de Conway :** un système reflète la structure de communication de l'organisation qui le conçoit. Trois équipes séparées (front, back, base de données) produiront un logiciel découpé en trois couches mal intégrées. On peut l'utiliser à l'envers (« manœuvre de Conway inverse ») : organiser les équipes selon l'architecture souhaitée.

**Première question à se poser :** a-t-on vraiment besoin de plus d'équipes ? Ajouter des personnes à un projet en retard le retarde souvent davantage (loi de Brooks). Avant de passer à l'échelle, réduis les dépendances et améliore l'efficacité d'une seule équipe.

#### Leçon 5.2 — Structurer les équipes : feature teams ou component teams (1 h 30)

|  | Équipe fonctionnalité (feature team) | Équipe composant (component team) |
| --- | --- | --- |
| Organisation | Pluridisciplinaire, livre une fonctionnalité de bout en bout | Spécialisée sur une couche ou un module |
| Dépendances | Faibles | Fortes : une fonctionnalité nécessite plusieurs équipes |
| Apprentissage | Large, partage du code | Expertise profonde, silos |
| Quand | Choix par défaut en agile | Composant très spécialisé (moteur de paiement, sécurité) |

**Stratégies d'allocation des fonctionnalités :** par parcours ou domaine utilisateur (équipe « prospection », équipe « facturation »), par segment client, par flux de valeur. Un seul Product Backlog reste partagé ; les équipes « tirent » les éléments selon leur domaine lors d'un affinage commun.

**Les Team Topologies (Skelton et Pais)** proposent 4 types : *stream-aligned* (alignée sur un flux de valeur, la majorité), *platform* (fournit des services internes), *enabling* (aide les autres à monter en compétence), *complicated-subsystem* (expertise pointue). Ressource : [teamtopologies.com](https://teamtopologies.com/key-concepts).

**Exercice 5.2 (45 min).** Le CRM grandit : 25 Developers. Propose une organisation en équipes, justifie le type de chaque équipe et répartis les 5 grands domaines fonctionnels.

#### Leçon 5.3 — Scrum of Scrums et Nexus (1 h)

**Scrum of Scrums :** un représentant de chaque équipe se réunit régulièrement (souvent 2 à 3 fois par semaine, 15 minutes) pour traiter les dépendances et obstacles inter-équipes. Simple, mais insuffisant seul.

**Nexus (Scrum.org, Ken Schwaber)** : cadre pour 3 à 9 équipes Scrum sur un même produit. Il ajoute :

- une **Nexus Integration Team** (PO, Scrum Master et membres des équipes), responsable de l'intégration de l'incrément ;
- des événements : Nexus Sprint Planning, Nexus Daily Scrum, Nexus Sprint Review (une seule pour toutes les équipes), Nexus Sprint Retrospective ;
- un **Nexus Sprint Backlog** pour rendre visibles les dépendances.

Un seul Product Owner, un seul Product Backlog, un seul incrément intégré. Guide officiel : [The Nexus Guide](https://www.scrum.org/resources/online-nexus-guide).

#### Leçon 5.4 — LeSS : Large-Scale Scrum (1 h 30)

LeSS (Craig Larman et Bas Vodde) cherche à **garder Scrum le plus simple possible** à grande échelle : « plus avec moins ».

- **LeSS :** 2 à 8 équipes ; **LeSS Huge :** au-delà, avec des *Area Product Owners* par zone de besoin.
- Un seul PO, un seul Product Backlog, un Sprint commun, une seule Definition of Done.
- **Sprint Planning en deux temps :** partie 1 commune (quelles équipes prennent quels éléments), partie 2 par équipe (comment).
- Affinage multi-équipes, Sprint Review commune organisée comme un « bazar » (stands par fonctionnalité), rétrospective globale en plus des rétrospectives d'équipe.
- Feature teams uniquement.

Ressource : [less.works](https://less.works/fr/less/framework).

#### Leçon 5.5 — SAFe : Scaled Agile Framework (1 h 30)

SAFe est le cadre le plus répandu dans les grandes entreprises, et aussi le plus prescriptif.

- **Agile Release Train (ART) :** 5 à 12 équipes (environ 50 à 125 personnes) alignées sur un flux de valeur.
- **Program Increment (PI) :** période de 8 à 12 semaines (souvent 4 à 5 itérations de 2 semaines). Le **PI Planning** réunit tout le train pendant 2 jours pour planifier les objectifs et rendre visibles les dépendances (le « program board » avec ses fils rouges).
- **Rôles :** Release Train Engineer (le « Scrum Master » du train), Product Management (contenu du train), Product Owners d'équipe, Business Owners, System Architect.
- **Priorisation par WSJF** (leçon 3.9).
- Plusieurs configurations : Essential, Large Solution, Portfolio, Full.

**Critiques fréquentes :** lourdeur, rôles nombreux, risque de recréer une planification en cascade trimestrielle. **Atouts :** cadre clair pour des organisations très hiérarchisées, alignement fort. Ressource : [scaledagileframework.com](https://scaledagileframework.com/).

Attention : dans SAFe, les rôles de PO et Product Manager diffèrent du Scrum Guide. Pour l'examen PSPO I, seule compte la définition du Scrum Guide.

#### Leçon 5.6 — Le « modèle Spotify » (1 h)

Décrit en 2012 dans un livre blanc d'Henrik Kniberg et Anders Ivarsson, ce n'est pas un cadre mais l'instantané d'une organisation :

- **Squad :** petite équipe autonome (type Scrum), alignée sur une mission.
- **Tribe :** groupe de squads (jusqu'à environ 100 personnes) sur un domaine.
- **Chapter :** personnes de même compétence dans une tribu (ex. tous les testeurs), avec un responsable hiérarchique.
- **Guild :** communauté de pratique ouverte, transverse à toute l'entreprise.

**À retenir :** les auteurs eux-mêmes ont averti qu'il ne fallait pas le copier tel quel. L'idée clé est l'équilibre **alignement fort et autonomie forte**. Copier les noms sans la culture est un cas typique de biais du survivant (leçon 2). Vidéo originale : [Spotify Engineering Culture](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1).

#### Leçon 5.7 — Choisir sa stratégie (30 min)

| Critère | Scrum of Scrums | Nexus | LeSS | SAFe |
| --- | --- | --- | --- | --- |
| Nombre d'équipes | 2 à 5 | 3 à 9 | 2 à 8 (Huge : plus) | 5 à 12 par train, plusieurs trains |
| Prescription | Très faible | Faible | Faible à moyenne | Forte |
| Changement organisationnel | Faible | Moyen | Fort (feature teams) | Moyen à fort |
| Proximité avec Scrum | Élevée | Très élevée | Très élevée | Moyenne |

**Quiz Partie A**

1. La loi de Conway dit que : a) ajouter des personnes retarde le projet · b) un système reflète la structure de communication de l'organisation · c) le travail s'étend au temps disponible
2. Une feature team : a) est spécialisée sur une couche technique · b) livre une fonctionnalité de bout en bout · c) gère uniquement les bugs
3. Dans Nexus, combien de Product Owners pour le produit ? a) un par équipe · b) un seul · c) deux
4. Le PI Planning de SAFe dure généralement : a) 2 heures · b) 2 jours · c) 2 semaines
5. LeSS impose : a) un seul Product Backlog et des feature teams · b) un backlog par équipe · c) un Release Train Engineer
6. Dans le modèle Spotify, une guild est : a) une équipe de livraison · b) une communauté de pratique transverse · c) un groupe hiérarchique
7. Plusieurs équipes Scrum sur un produit doivent partager : a) la même Definition of Done · b) le même Scrum Master · c) la même vélocité

*Corrigé : 1-b, 2-b, 3-b, 4-b, 5-a, 6-b, 7-a.*

### Partie B — Leçons complémentaires du projet (gérer bugs, délais et revue)

#### Leçon 5.8 — Prioriser la gestion des bugs (1 h 30)

Un bug est un écart entre le comportement attendu et le comportement réel. Dans Scrum, les correctifs sont des éléments du Product Backlog comme les autres : le PO les ordonne selon la valeur et le risque.

**Distinguer gravité et priorité.** La *gravité* mesure l'impact technique (plantage, perte de données) ; la *priorité* mesure l'urgence métier. Une faute de frappe sur la page d'accueil est peu grave mais peut être prioritaire ; un plantage dans un écran utilisé une fois par an est grave mais peu prioritaire.

| Niveau | Définition | Traitement type |
| --- | --- | --- |
| P1 — Bloquant | Production arrêtée, perte de données, sécurité | Correctif immédiat, même en cours de Sprint, avec le PO |
| P2 — Majeur | Fonction importante dégradée, contournement difficile | Haut du Product Backlog, Sprint suivant |
| P3 — Mineur | Gêne, contournement simple | Ordonné avec le reste du backlog |
| P4 — Cosmétique | Esthétique, texte | Regroupé, traité au fil de l'eau |

**Bonnes pratiques :**

- **Triage régulier** (hebdomadaire) avec un Developer et un testeur : reproduire, qualifier, prioriser, fermer les doublons.
- **Fiche de bug complète :** étapes de reproduction, résultat attendu et obtenu, environnement, captures, gravité.
- **Un bug trouvé pendant le Sprint sur une story en cours** n'est pas un nouveau bug : la story n'est simplement pas terminée (DoD).
- **Politique « zéro bug connu »** sur les nouveaux développements, et une capacité réservée (par exemple 15 à 20 %) pour la dette technique et les correctifs, à ajuster selon les données.
- **Analyse de cause racine** sur les P1 (5 pourquoi, leçon 3.5) et actions préventives en rétrospective.

**Exercice 5.8 (45 min).** Voici 8 bugs du CRM (demande à Claude de générer une liste réaliste avec description et nombre d'utilisateurs touchés). Qualifie gravité et priorité, ordonne-les et décide lesquels entrent dans le prochain Sprint avec 20 % de capacité réservée.

#### Leçon 5.9 — Coordonner les équipes et gérer les délais (1 h 30)

- **Rendre les dépendances visibles :** tableau des dépendances inter-équipes (qui attend quoi de qui, pour quand), mis à jour au Scrum of Scrums.
- **Affinage multi-équipes :** une session commune avant chaque Sprint pour répartir les éléments et repérer les dépendances.
- **Intégration continue :** fusionner et tester le code au moins quotidiennement, pour que l'incrément intégré existe à tout moment.
- **Gérer une échéance ferme** (salon, obligation légale) : fixer la date, ordonner en MoSCoW, suivre un burnup commun à toutes les équipes, décider tôt des coupes de périmètre.
- **Gestion des risques :** registre simple (risque, probabilité, impact, action, responsable), revu à chaque Sprint.

#### Leçon 5.10 — Préparer et présenter une Sprint Review multi-équipes (1 h)

**Format « bazar » :** chaque équipe tient un stand par fonctionnalité ; les parties prenantes circulent, essaient l'incrément et laissent leurs retours sur post-it. Puis 30 minutes de synthèse commune.

**Structure de la présentation de synthèse (15 minutes) :**

1. Product Goal et objectifs du Sprint
2. Ce qui est livré et intégré (démo de l'incrément commun, pas de diapositives de code)
3. Bugs : tendance des P1/P2, correctifs livrés
4. Indicateurs de valeur (usage, satisfaction)
5. Plan de release mis à jour et décisions demandées aux parties prenantes

**Exercice 5.10 (45 min).** Prépare le support de cette synthèse (5 diapositives sur PowerPoint ou Google Slides). Répète-la devant Claude jouant trois parties prenantes : le sponsor (budget), le support client (bugs), le directeur commercial (délais).

#### Rappel user stories à l'échelle (révision des leçons 5.6 à 5.10)

À l'échelle, les stories doivent être encore plus **indépendantes** (le « I » d'INVEST) pour limiter les dépendances inter-équipes. Les epics sont découpés en commun, puis chaque équipe affine ses stories. Un modèle de story et une DoD communs à toutes les équipes sont indispensables.

**Exercice de révision (1 h).** Prends un epic qui traverse 3 équipes. Découpe-le pour que chaque story soit livrable par une seule équipe. Identifie les dépendances restantes et propose une solution pour chacune.

**Quiz Partie B**

1. Une faute d'orthographe sur la page d'accueil est : a) grave et prioritaire · b) peu grave mais potentiellement prioritaire · c) à ignorer
2. Un défaut trouvé sur une story en cours de Sprint : a) devient un bug du backlog · b) signifie que la story n'est pas terminée · c) est corrigé au Sprint suivant
3. Qui ordonne les bugs dans le Product Backlog ? a) le testeur · b) le Product Owner · c) le Scrum Master
4. La Sprint Review en format bazar sert à : a) éviter les parties prenantes · b) permettre aux parties prenantes d'essayer l'incrément par fonctionnalité · c) remplacer la rétrospective

*Corrigé : 1-b, 2-b, 3-b, 4-b.*

### Livrable du projet 5

- [ ] Organisation des équipes (schéma + justification du type de chaque équipe)
- [ ] Choix argumenté d'un cadre d'agilité à l'échelle
- [ ] Roadmap mise à jour intégrant les correctifs
- [ ] Grille de priorisation des bugs et backlog de bugs ordonné
- [ ] Tableau des dépendances et registre des risques
- [ ] Support de Sprint Review multi-équipes

## PROJET 6 — Co-construire une vision produit avec les parties prenantes

**Compétences visées :** recueillir les besoins de différentes parties prenantes · produire un reporting quantitatif et qualitatif pour des clients internes et externes · aligner les parties prenantes sur les fonctionnalités clés.

**Cours : Mener une recherche utilisateur (6 h) + Construire une roadmap produit (révision approfondie, voir leçons 3.5 à 3.11)** · Livrable : vision co-construite, outil de recalcul du plan de release et rapport aux parties prenantes.

### Partie A — Mener une recherche design et utilisateur (6 h)

#### Leçon 6.1 — Ce que les gens disent et ce qu'ils font (1 h)

Les utilisateurs ne mentent pas, mais ils se trompent sur eux-mêmes : ils rationalisent, idéalisent leurs habitudes et prédisent mal leur comportement futur. « Utiliseriez-vous cette fonctionnalité ? » donne presque toujours « oui ». C'est pourquoi la recherche combine **déclaratif** (ce qu'ils disent) et **comportemental** (ce qu'ils font).

|  | Qualitatif (pourquoi, comment) | Quantitatif (combien) |
| --- | --- | --- |
| Déclaratif | Entretiens, focus groups | Questionnaires, NPS |
| Comportemental | Observation, tests d'utilisabilité, ethnographie | Analytics, tests A/B, heatmaps |

Carte complète des méthodes : [NN/g — When to Use Which User-Experience Research Methods](https://www.nngroup.com/articles/which-ux-research-methods/).

#### Leçon 6.2 — Planifier une étude (1 h)

1. **Objectif de recherche :** quelle décision cette étude va-t-elle éclairer ? (« Faut-il prioriser l'application mobile du CRM ? »)
2. **Questions de recherche :** 3 à 5 questions (« Où et quand les commerciaux saisissent-ils leurs informations ? »).
3. **Méthode :** selon la matrice de la leçon 6.1.
4. **Recrutement :** 5 à 8 participants par profil suffisent souvent pour faire émerger les problèmes majeurs en qualitatif. Varie les profils (débutant/expert, petit/gros client) et évite de ne recruter que des fans.
5. **Éthique et RGPD :** consentement éclairé, droit de retrait, anonymisation, durée de conservation. Voir [CNIL — recherche](https://www.cnil.fr/fr/recherche-scientifique-hors-sante).

**Exercice 6.2 (30 min).** Rédige le plan d'étude d'une page pour comprendre pourquoi les commerciaux n'utilisent pas le CRM actuel sur le terrain.

#### Leçon 6.3 — Conduire des entretiens utilisateurs (1 h 30)

**Les règles de « The Mom Test » (Rob Fitzpatrick) :** parle de leur vie, pas de ton idée ; demande des faits passés et précis, pas des opinions ni des prédictions ; écoute plus que tu ne parles.

| À éviter | Préférer |
| --- | --- |
| « Aimeriez-vous un rappel automatique ? » | « Racontez-moi la dernière fois que vous avez oublié une relance. » |
| « Combien paieriez-vous ? » | « Combien vous a coûté cette opportunité perdue ? Qu'avez-vous essayé pour l'éviter ? » |
| « C'est pratique, non ? » (question fermée et orientée) | « Comment faites-vous aujourd'hui ? » |

**Structure d'un entretien de 45 minutes :** introduction et consentement (5 min) · contexte et rôle (5 min) · récit d'expériences récentes (25 min, relances : « et ensuite ? », « pourquoi ? », « pouvez-vous me montrer ? ») · conclusion et remerciements (5 min) · débrief à chaud (5 min).

**Le silence est un outil :** attends 3 secondes après une réponse, la personne complète souvent avec l'information la plus précieuse.

**Exercice 6.3 (1 h).** Rédige un guide d'entretien de 10 questions. Fais une répétition avec Claude : « Joue une commerciale de 45 ans, réticente aux outils numériques ; réponds de façon réaliste, parfois vague. » Repère ensuite les questions orientées dans ta pratique.

#### Leçon 6.4 — Observer : ethnographie et enquête contextuelle (1 h)

L'**enquête contextuelle** consiste à observer l'utilisateur dans son environnement réel (bureau, voiture entre deux rendez-vous), avec la posture « maître et apprenti » : il fait, tu apprends en posant des questions au fil de l'eau. Tu découvres les contournements (post-it collés sur l'écran, tableur parallèle), signaux forts de besoins non satisfaits.

L'**observation participante** va plus loin : passer une journée à faire le travail avec eux. Les **tests d'utilisabilité** (5 utilisateurs, une tâche, consigne « pensez à voix haute ») révèlent les problèmes d'interface. Guide : [NN/g — Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/).

#### Leçon 6.5 — Synthétiser et partager les enseignements (1 h 30)

1. **Notes brutes → observations :** un fait par post-it (citation, comportement, problème).
2. **Affinity mapping :** regrouper les post-it par thème sur un tableau Miro, puis nommer chaque groupe.
3. **Insights :** une phrase qui explique un comportement et ouvre une opportunité (« Les commerciaux saisissent leurs notes le soir, de mémoire, car le CRM est inutilisable sur téléphone : la moitié des informations sont perdues »).
4. **Personas :** profils fictifs fondés sur les données (objectifs, frustrations, contexte), pas sur des stéréotypes.
5. **Jobs To Be Done :** « Quand \[situation\], je veux \[motivation\], afin de \[résultat attendu\] ». Ressource : [JTBD — Strategyn](https://strategyn.com/jobs-to-be-done/).
6. **Restitution :** 5 insights maximum, chacun avec une citation, une donnée et une recommandation.

**Exercice 6.5 (1 h).** Demande à Claude de générer 3 retranscriptions d'entretiens fictives et réalistes. Réalise l'affinity map, rédige 3 insights, 1 persona et 2 Jobs To Be Done.

**Quiz Partie A**

1. « Utiliseriez-vous cette fonctionnalité ? » est une mauvaise question car : a) elle est trop longue · b) elle demande une prédiction, peu fiable · c) elle est illégale
2. Pour comprendre combien d'utilisateurs abandonnent un parcours, on utilise : a) des entretiens · b) les analytics · c) un focus group
3. Selon The Mom Test, on demande plutôt : a) des opinions · b) des faits passés précis · c) des prix
4. Un post-it collé sur l'écran d'un utilisateur est : a) sans intérêt · b) un contournement révélant un besoin · c) une erreur
5. Un persona doit être fondé sur : a) l'intuition de l'équipe · b) des données de recherche · c) le profil du PO

*Corrigé : 1-b, 2-b, 3-b, 4-b, 5-b.*

### Partie B — Leçons complémentaires : parties prenantes, alignement et reporting

#### Leçon 6.6 — Cartographier les parties prenantes (1 h)

**Matrice pouvoir / intérêt (Mendelow)**

|  | Intérêt faible | Intérêt fort |
| --- | --- | --- |
| **Pouvoir fort** | Satisfaire (direction financière) : informer des décisions clés | Gérer étroitement (sponsor, direction commerciale) : co-construire |
| **Pouvoir faible** | Surveiller (autres services) : information générale | Informer (commerciaux, support) : impliquer dans la recherche et les reviews |

Pour chaque partie prenante, note : ses objectifs, ses craintes, ce qu'elle attend de toi, son canal et sa fréquence de communication préférés.

**Exercice 6.6 (30 min).** Cartographie 8 parties prenantes du CRM et définis un plan de communication (qui, quoi, quand, comment).

#### Leçon 6.7 — Recueillir les besoins en atelier (1 h 30)

- **Atelier de cadrage :** objectif, périmètre, contraintes ; en fin de séance, une liste de besoins reformulés et validés.
- **Lean Canvas ou Product Vision Board collaboratif** (leçon 3.6).
- **Event storming** pour les processus métier complexes : on déroule les événements du métier sur un long mur avec des post-it orange.
- **Remember the Future :** « Nous sommes dans un an, le produit est un succès : que s'est-il passé ? » Fait émerger les attentes réelles.

**Faciliter sans biais :** fais écrire chacun en silence avant de partager (évite l'effet d'autorité), donne la parole aux plus discrets, reformule et fais valider. Catalogue d'ateliers : [Liberating Structures (FR)](https://www.liberatingstructures.fr/), [Gamestorming](https://gamestorming.com/).

#### Leçon 6.8 — Aligner les parties prenantes sur les fonctionnalités clés (1 h 30)

Les conflits de priorités sont normaux : chaque partie prenante voit sa partie. Ton rôle : rendre les arbitrages **transparents et fondés sur la valeur**.

- **Revenir à la vision et aux objectifs** (OKR) : « Laquelle de ces deux demandes nous rapproche le plus du Product Goal ? »
- **Buy a Feature :** chaque participant reçoit un budget fictif ; les fonctionnalités ont un prix proportionnel à l'effort. Ils négocient et se regroupent : les vraies priorités émergent.
- **Vote par points** (dot voting), après écriture silencieuse.
- **Grille de critères pondérés** (valeur client, revenus, risque, effort) remplie ensemble.
- **Prise de décision par consentement :** on ne cherche pas l'accord de tous, mais l'absence d'objection argumentée.

Rappel Scrum : le PO prend la décision finale sur l'ordre du Product Backlog. L'alignement sert à éclairer et faire accepter cette décision, pas à la diluer.

**Exercice 6.8 (45 min).** Simule avec Claude un atelier « Buy a Feature » : Claude joue 4 parties prenantes avec des intérêts opposés, toi l'animateur. Note les arbitrages obtenus et rédige un compte rendu de décision.

#### Leçon 6.9 — Le reporting quantitatif et qualitatif (1 h 30)

**Quantitatif :** vélocité et burnup (prévisibilité), indicateurs d'usage (utilisateurs actifs, taux d'adoption d'une fonctionnalité), qualité (bugs P1/P2), indicateurs métier (conversion, chiffre d'affaires influencé), satisfaction (NPS, CSAT).

**Qualitatif :** verbatims d'utilisateurs, insights de recherche, risques et obstacles, décisions prises et à prendre.

**Structure d'un rapport mensuel d'une page**

1. Météo globale (vert / orange / rouge) et une phrase de synthèse
2. Avancement vers le Product Goal et le plan de release
3. 3 à 5 indicateurs clés avec tendance
4. Ce que nous avons appris (2 insights avec une citation)
5. Risques et décisions attendues

**Adapter au public :** les clients externes veulent des bénéfices et des dates prudentes ; la direction veut l'impact et les décisions à prendre ; l'équipe veut le détail et le contexte.

Outils de tableau de bord : [Looker Studio](https://lookerstudio.google.com/) (gratuit), [Airtable Interfaces](https://www.airtable.com/), Notion.

#### Leçon 6.10 — Construire un outil de recalcul du plan de release (2 h)

Ce projet demande un logiciel de recalcul du plan de release. Une version simple dans Google Sheets, Excel ou Airtable suffit.

**Structure proposée**

| Colonne | Contenu |
| --- | --- |
| Rang | Ordre dans le Product Backlog |
| Élément | Nom de la story ou de l'epic |
| Points | Estimation |
| Cumul | Somme des points jusqu'à cet élément |
| Sprint (prudent) | Arrondi supérieur du cumul / vélocité basse |
| Sprint (optimiste) | Arrondi supérieur du cumul / vélocité haute |
| Date estimée | Date de début + (Sprint × durée du Sprint) |

Formules dans Google Sheets (lignes à partir de 2, vélocités en G1 et H1) : cumul `=SOMME($C$2:C2)`, sprint prudent `=ARRONDI.SUP(D2/$G$1;0)`, sprint optimiste `=ARRONDI.SUP(D2/$H$1;0)`. Quand l'ordre du backlog ou la vélocité change, toutes les dates se recalculent.

**Exercice 6.10 (1 h 30).** Construis l'outil avec 25 éléments. Ajoute une mise en forme conditionnelle qui colore les éléments au-delà de la date de release. Demande à Claude d'auditer tes formules et de proposer une amélioration (par exemple une prévision Monte-Carlo simplifiée).

#### Révision approfondie — la roadmap co-construite (rappel des leçons 3.5 à 3.11)

Reprends ta roadmap du projet 2 et confronte-la aux résultats de ta recherche utilisateur et aux ateliers. Quels thèmes ne résistent pas aux insights ? Lesquels sont confirmés ? Mets à jour la vision, les OKR et la roadmap Now / Next / Later, et note chaque changement dans ton journal de décisions.

**Quiz Partie B**

1. Une partie prenante à fort pouvoir et fort intérêt doit être : a) surveillée · b) gérée étroitement · c) simplement informée
2. Faire écrire chacun en silence avant de partager limite : a) l'effet d'autorité · b) la loi de Parkinson · c) la vélocité
3. Dans « Buy a Feature », le prix d'une fonctionnalité est proportionnel à : a) sa popularité · b) son effort · c) l'ancienneté de la demande
4. La décision finale sur l'ordre du Product Backlog revient à : a) la majorité des parties prenantes · b) le Product Owner · c) le sponsor
5. Un bon rapport aux parties prenantes contient : a) uniquement des chiffres · b) des indicateurs et des enseignements qualitatifs, avec les décisions attendues · c) le détail de chaque tâche

*Corrigé : 1-b, 2-a, 3-b, 4-b, 5-b.*

### Livrable du projet 6

- [ ] Plan d'étude, guide d'entretien et synthèse de recherche (3 insights, 1 persona, 2 JTBD)
- [ ] Cartographie des parties prenantes et plan de communication
- [ ] Compte rendu d'atelier d'alignement avec les arbitrages
- [ ] Vision, OKR et roadmap mis à jour
- [ ] Outil de recalcul du plan de release
- [ ] Rapport mensuel d'une page (quantitatif et qualitatif)

## PROJET 7 — Obtenir la certification PSPO I

**Compétence visée :** passer l'examen de certification PSPO I.

**Cours : Adopter l'agilité à l'échelle (révision, voir leçons 6.1 à 6.7) + préparation finale (10 h)** · Livrable : certification obtenue et portfolio de PO.

### Leçon 7.1 — Connaître l'examen (30 min)

| Élément | Détail |
| --- | --- |
| Questions | 80 (choix unique, choix multiples, vrai/faux) |
| Durée | 60 minutes, soit environ 45 secondes par question |
| Seuil de réussite | 85 %, soit 68 bonnes réponses minimum |
| Langue | Anglais |
| Format | En ligne, sans surveillance, à livre ouvert mais le temps ne permet pas de chercher |
| Prix | 200 $ par tentative ; le code n'expire pas |
| Résultat | Immédiat, avec un bilan par domaine de compétence, sans le détail des questions |

Source : [Scrum.org — PSPO I](https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification).

**Les domaines évalués :** comprendre et appliquer le cadre Scrum (empirisme, équipe, événements, artefacts, Done) ; développer les personnes et les équipes (autogestion) ; gérer les produits avec agilité (valeur, parties prenantes, prévisions, vision).

### Leçon 7.2 — Les pièges fréquents de l'examen (2 h)

1. **La réponse du Guide, pas celle de ton entreprise.** « Le PO assiste au Daily Scrum pour suivre l'avancement » : faux.
2. **Le PO est redevable de la valeur**, pas de la quantité livrée. Les questions sur la valeur font souvent référence à [Evidence-Based Management](https://www.scrum.org/resources/evidence-based-management) : valeur actuelle, valeur non réalisée, capacité d'innovation, délai de mise sur le marché.
3. **Les mots absolus** (« toujours », « doit », « seul ») sont souvent faux, sauf quand le Guide les emploie (« le PO est une seule personne »).
4. **Qui fait quoi :** les Developers estiment et créent le Sprint Backlog ; le PO ordonne le Product Backlog ; le Scrum Master ne prend pas de décision produit.
5. **Pas de « Sprint 0 », de « Sprint de stabilisation » ni de « Sprint de release » :** chaque Sprint produit un incrément Done.
6. **La dette technique** réduit la valeur et la transparence ; elle est rendue visible dans le Product Backlog.
7. **Les parties prenantes** ne participent qu'à la Sprint Review (parmi les événements) ; le PO peut les impliquer dans l'affinage.
8. **Questions à réponses multiples :** le nombre de réponses attendues est indiqué (« choose two »). Lis-le à chaque fois.

### Leçon 7.3 — Stratégie le jour J (30 min)

- Environnement calme, connexion stable, 60 minutes sans interruption, eau à portée de main.
- Premier passage rapide : réponds à tout ce qui est évident, marque les questions douteuses (fonction « bookmark »).
- Ne dépasse pas 1 minute par question ; à la question 40, il doit te rester au moins 30 minutes.
- Garde 5 minutes pour revoir les questions marquées.
- Lis l'anglais attentivement : « accountable » (redevable), « responsible », « must », « should ».

### Leçon 7.4 — Examen blanc de 20 questions (1 h)

Chronomètre-toi : 15 minutes. Objectif : 17 bonnes réponses ou plus.

1. Qui est redevable de maximiser la valeur du produit ? a) le Scrum Master · b) le Product Owner · c) les Developers · d) les parties prenantes
2. La Sprint Review pour un Sprint de 2 semaines dure : a) 4 h exactement · b) généralement moins de 4 h · c) 1 jour
3. Quand un Sprint est-il terminé ? a) quand tous les éléments sont Done · b) quand sa durée est écoulée · c) quand le PO le décide
4. Le PO peut-il déléguer la rédaction des éléments du Product Backlog ? a) non · b) oui, mais il reste redevable
5. Qui participe obligatoirement au Daily Scrum ? a) toute l'équipe Scrum · b) les Developers · c) le Scrum Master
6. Les Developers découvrent en milieu de Sprint qu'ils ne pourront pas tout faire. Que faire ? (deux réponses) a) prolonger le Sprint · b) collaborer avec le PO pour renégocier le périmètre · c) réduire la qualité · d) préserver le Sprint Goal
7. Qui décide de la Definition of Done si l'organisation n'en a pas ? a) le PO seul · b) l'équipe Scrum · c) le manager
8. Le Product Backlog est-il un jour complet ? a) oui, après le Sprint Planning · b) non, il évolue tant que le produit existe
9. Quel est l'engagement de l'incrément ? a) Sprint Goal · b) Product Goal · c) Definition of Done
10. Un directeur demande à un Developer d'ajouter une tâche urgente pendant le Sprint. Le Developer doit : a) l'accepter · b) l'orienter vers le Product Owner · c) l'ajouter puis informer le PO
11. La vélocité d'une équipe sert principalement à : a) comparer les équipes · b) aider l'équipe à prévoir · c) évaluer le PO
12. Quelle affirmation sur la Sprint Review est correcte ? a) c'est le seul moment où l'on peut livrer · b) c'est une séance de travail pour inspecter le résultat et adapter · c) le PO y valide individuellement chaque story
13. Plusieurs équipes Scrum sur un même produit partagent : (deux réponses) a) un Product Backlog · b) un Product Owner · c) un Sprint Backlog · d) un Daily Scrum
14. La dette technique : a) ne concerne que les Developers · b) peut réduire la valeur future et doit être rendue transparente · c) est corrigée lors d'un Sprint de stabilisation
15. Le Sprint Goal peut-il changer pendant le Sprint ? a) oui, librement · b) non ; si l'objectif devient obsolète, le PO peut annuler le Sprint
16. Quelle mesure reflète le mieux la valeur ? a) le nombre de story points livrés · b) les résultats observés chez les clients (usage, satisfaction, revenus) · c) le nombre d'heures travaillées
17. Qui suit le travail restant vers le Product Goal ? a) le Scrum Master · b) le Product Owner, en le rendant transparent · c) le manager de projet
18. Le Sprint Planning porte sur : (trois réponses) a) pourquoi le Sprint a de la valeur · b) ce qui peut être fait · c) comment le travail sera réalisé · d) qui sera évalué
19. Les parties prenantes peuvent-elles assister au Sprint Planning ? a) jamais · b) oui, sur invitation, pour apporter un conseil
20. Un élément du Product Backlog est « prêt » pour un Sprint quand : a) il respecte une Definition of Ready obligatoire · b) il peut être réalisé (Done) en un Sprint, selon les Developers

*Corrigé : 1-b, 2-b, 3-b, 4-b, 5-b, 6-b et d, 7-b, 8-b, 9-c, 10-b, 11-b, 12-b, 13-a et b, 14-b, 15-b, 16-b, 17-b, 18-a, b et c, 19-b, 20-b.*

**Analyse :** pour chaque erreur, retrouve la phrase exacte du Scrum Guide et ajoute une carte Anki. Puis enchaîne avec les tests blancs complets.

### Leçon 7.5 — Plan de la dernière semaine (4 h réparties)

| Jour | Activité (environ 40 min) |
| --- | --- |
| J-7 | Relecture complète du Scrum Guide en anglais |
| J-6 | Product Owner Open × 3 (viser 100 %) |
| J-5 | Test complet chronométré (80 questions / 60 min) sur [mlapshin.com](https://mlapshin.com/index.php/scrum-quizzes/) |
| J-4 | Analyse des erreurs + cartes Anki + EBM |
| J-3 | Scrum Open × 3 + quiz Claude sur les pièges (leçon 7.2) |
| J-2 | Second test complet chronométré ; ≥ 90 % = prêt |
| J-1 | Révision légère, sommeil (leçon 4.1) |
| J | Examen le matin, à ton pic d'énergie |

**Prompt Claude conseillé :** « Agis comme un examinateur PSPO I. Pose-moi 20 questions en anglais, au format de l'examen, centrées sur la valeur, les parties prenantes et la gestion du Product Backlog. Corrige à la fin avec la référence au Scrum Guide 2020. »

### Leçon 7.6 — Révision : l'agilité à l'échelle pour l'examen (30 min)

Le PSPO I aborde surtout le cas de plusieurs équipes Scrum sur un même produit, du point de vue du Scrum Guide : un seul Product Backlog, un seul Product Owner, un seul Product Goal, une Definition of Done commune, un incrément intégré. Nexus, LeSS et SAFe ne sont pas au programme en tant que tels. Relis les leçons 5.1 à 5.7 et refais le quiz de la Partie A du projet 5.

### Leçon 7.7 — Préparer sa nouvelle carrière (1 h)

- **Portfolio de PO :** rassemble tes livrables des projets 2 à 7 dans une page Notion publique (vision, story map, backlog, plan de release, synthèse de recherche, rapport). C'est ta preuve concrète en entretien.
- **Badge :** ajoute ta certification PSPO I sur LinkedIn (lien de vérification Scrum.org).
- **CV :** formule tes réalisations en impact (« priorisé un backlog de 60 éléments avec RICE, réduisant de 30 % le périmètre du MVP »).
- **Entretien :** prépare 3 histoires au format STAR (Situation, Tâche, Action, Résultat) : un arbitrage difficile, un retard communiqué, un enseignement utilisateur qui a changé la roadmap. Entraîne-toi avec Claude jouant un recruteur.
- **Suites possibles :** [PSPO II](https://www.scrum.org/assessments/professional-scrum-product-owner-ii-certification), [PSM I](https://www.scrum.org/assessments/professional-scrum-master-i-certification), communautés comme [Mind the Product](https://www.mindtheproduct.com/) et les meetups agiles locaux.

### Livrable du projet 7

- [ ] Examen blanc de 20 questions ≥ 17/20
- [ ] 2 tests complets chronométrés ≥ 90 %
- [ ] Certification PSPO I obtenue
- [ ] Portfolio de PO publié
- [ ] CV et profil LinkedIn mis à jour

## Sources

- [Scrum Guide 2020](https://scrumguides.org/scrum-guide.html)
- [Scrum.org — Professional Scrum Product Owner I](https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification)
- [Manifeste Agile (FR)](https://agilemanifesto.org/iso/fr/manifesto.html)
- [The Nexus Guide](https://www.scrum.org/resources/online-nexus-guide)
- [LeSS Framework](https://less.works/fr/less/framework)
- [Scaled Agile Framework](https://scaledagileframework.com/)
- [Nielsen Norman Group](https://www.nngroup.com/articles/which-ux-research-methods/)
- Programme de formation « Product Owner » (document de référence, mis à jour le 14 septembre 2026)

#  Instructions

> Les deux parties de l'application sont séparées dans les deux dossiers`frontEnd` et `backEnd`.  
> Pour utiliser le projet veuillez suivre les étapes suivantes:

1. **Forker** ce dépôt sur votre compte GitHub.
2. **Cloner** le fork sur votre machine locale.

```bash
git clone https://github.com/VOTRE_COMPTE_GITHUB/defi-technique-react.git
```

3. **Installer** les dépendances des projets `my-tasks-frontend` et `my-tasks-backend`.

```bash
cd frontEnd
npm install
cd ../backEnd
npm install
```

4. **Lancer** les projets
   `frontEnd` et `backEnd`.

```bash
npm run dev
```

## A Savoir

> Puisque c'est un petit projet et que j'ai peu de temps, j'ai simplifié quelques aspects. Si ceci était un projet plus grand:

+ J'aurais utilisé `Redux Toolkit` pour la gestion des états des alertes et de la liste des tâches.
+ J'aurais utilisé un état local pour gérer les tâches, permettant d'ajouter ou de supprimer des tâches sans nécessiter le rechargement depuis le backend à chaque modification.
+ Enfin, j'aurais utilisé une suppression douce (soft delete) côté backend en utilisant une sorte de "flag" booléen au lieu de supprimer complètement la tâche.
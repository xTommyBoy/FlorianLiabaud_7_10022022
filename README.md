# FlorianLiabaud_7_10022022

Projet final du parcours développeur web d'OpenClassrooms

Dans ce projet nous devons créer un réseau social d'entreprise 
Pour la réalisation de ce projet je le réaliserai avec la framework react via la librairie next.js ainsi que prisma fastify express et tailwind 
La base de donnée utilisée sera sous postgresql 

## Installation

# Étape 1 :

Télécharger le projet , l'extraire et sortir le main du dossier cloné
Creer deux fichiers d'environnement (.env et .env_local) et les mettres dans le back et ajouter que env_local dans le front

# Étape 2 :

Utiliser la commande `npm install` dans le dossier back et front pour tout installer 

# Étape 3 :

Ajouter dans le fichier .env `DATABASE_URL="et collez la db ici`
Ensuite dans le fichier .env.local ajouter : `NEXT_PUBLIC_DEMO_MODE=false` et `NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:3001/back` à la seconde ligne
Pour initialiser le back de NextJS

# Dernière Étape : 

Lancez deux terminaux 
Pour le front faites ensuite : `cd front` et `npm run dev`
Pour le back faites ensuite : `cd back` et `npm run dev`

Et ensuite copiez le lien qui s'affiche dans le terminal `http://localhost:3000` ou `http://127.0.0.1:3000`

(⚠️ Si vous rencontrez un souci avec prisma veuillez faire cette commande pour pull la base de donnée : `npx prisma db pull`)

Et c'est tout !

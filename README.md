# 📝 TaskManagerApp

**TaskManagerApp** est une application simple de gestion de tâches, développée en JavaScript avec un backend Node.js et un frontend React.

## 🚀 Environnement de développement : Docker

Pour simplifier le déploiement et l'utilisation de l'application, Docker est utilisé afin de créer un environnement isolé.

Deux conteneurs sont configurés via Docker Compose :

* 🖥️ **Backend** : Node.js + Express.js
* 🌐 **Frontend** : Vite.js + React.js

Les deux conteneurs sont reliés entre eux, et peuvent être lancés facilement avec une seule commande.

## 🔧 Backend

### 🧰 Outils utilisés

* **Node.js**
* **Express.js**

### ✨ Fonctionnalités

Le backend expose les endpoints suivants :

* `GET /tasks` : Récupère toutes les tâches
* `POST /tasks` : Crée une nouvelle tâche
* `DELETE /tasks/:id` : Supprime une tâche par ID
* `PATCH /tasks/:id` : Met à jour le statut d’une tâche par ID

### 🗂️ Stockage des données

Aucune base de données n'est utilisée : les tâches sont conservées dans un tableau en mémoire.

### 📄 Documentation API

La documentation Swagger est disponible :

* Via l'interface web : `http://localhost:3000`
* Ou directement dans le fichier [`ressources/openapi.yaml`](ressources/openapi.yaml)

### 📋 Logs

Des logs ont été ajoutés pour faciliter le débogage et l’évaluation du backend.

## 🎨 Frontend

### 🧰 Outils utilisés

* **Vite.js**
* **React.js**
* **Axios**
* **Zod**
* **React Hook Form**
* **TanStack Query**

### 🧩 Composants

Les composants principaux sont situés dans le dossier `src/components` :

* `TaskList` : Affiche la liste des tâches
* `TaskForm` : Formulaire de création de tâche

### 🔗 Appels API

Les appels vers le backend sont centralisés dans le dossier `src/api/endpoint/` et effectués à l’aide de la bibliothèque Axios.

## 🛠️ Installation & démarrage

1. Clonez le dépôt :

```bash
git clone https://github.com/Gabriel77176/TaskManagerApp.git
cd TaskManagerApp
```

2. Démarrez l’environnement Docker :

```bash
docker compose up
# ou docker-compose up selon votre version
```

3. Accédez à l'application :

* Frontend : [http://localhost:5173](http://localhost:5173)
* Backend : [http://localhost:3000](http://localhost:3000)

---

🧑‍💻 **Développé par [Gabriel Dezon](https://github.com/Gabriel77176)**

# clonenetflix
je débute et j ai creez un site comme netflix
CloneNetflix

Une application web React qui réplique l'interface utilisateur de Netflix, permettant aux utilisateurs de parcourir et visualiser une collection de films.

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/FARAHBENNOUA/clonenetflix.git

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## 🛠️ Technologies utilisées

- React.js 
- Axios pour les requêtes API
- React Router pour la navigation
- Custom Hooks
- CSS pour le styling

## 📁 Structure du projet

```
src/
  ├── api/
  │   └── config.js         # Configuration Axios
  ├── components/
  │   ├── Banner/          # Bannière principale
  │   ├── MovieRow/        # Liste de films
  │   ├── NavBar/          # Barre de navigation
  │   └── Modal/           # Modal détails film
  ├── hooks/
  │   └── getMovies.js     # Custom hook films
  └── pages/
      └── Home.js          # Page d'accueil
```

## ✨ Fonctionnalités

- Interface utilisateur style Netflix
- Bannière dynamique avec film en vedette
- Navigation fluide
- Grille de films par catégories
- Détails des films en modal
- Design responsive

## 🌐 API

L'application utilise l'API JSONFakery pour les données des films:
- Endpoint: `https://jsonfakery.com/movies/paginated`

## 📱 Scripts disponibles

```bash
npm start      # Lance l'app en mode développement
npm test       # Lance les tests
npm run build  # Build pour la production
```

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

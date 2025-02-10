import axios from 'axios';

// Créer l'instance axios
const api = axios.create({
  baseURL: 'https://jsonfakery.com'
});

// Exporter api comme export nommé (pas comme default)
export { api };

// Garder la fonction getMovies
export const getMovies = () => {
  return api.get('/movies/paginated');
};
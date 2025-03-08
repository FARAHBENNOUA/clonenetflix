import axios from 'axios';


const api = axios.create({
  baseURL: 'https://jsonfakery.com'
});


export { api };


export const getMovies = () => {
  return api.get('/movies/paginated');
};
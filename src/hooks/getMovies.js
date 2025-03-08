import { useState, useEffect } from "react";
import { api } from '../api/config';

export function useGetMovies() {
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(null);
   
    const fetchMovies = async () => {
        try {
            const response = await api.get('/movies/paginated');
          
            setMovies(response.data.data || response.data || []);
            console.log("data movies :", response.data)
        } catch (error) {
            console.error("Erreur détaillée:", error);
            setError(error.response?.data?.message || error.message || "Erreur de connexion à l'API");
        }
    };

    useEffect(() => { 
        fetchMovies();
    }, []);

    return { movies, error };
}

export default useGetMovies;
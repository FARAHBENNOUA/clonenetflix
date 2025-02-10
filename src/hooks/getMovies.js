import { useState, useEffect } from "react";
import { api } from '../api/config';

export function useGetMovies() {
    const [movies, setMovies] = useState([]); // Assurez-vous que c'est initialisé comme tableau vide
    const [error, setError] = useState(null);
   
    const fetchMovies = async () => {
        try {
            const response = await api.get('/movies/paginated');
            // Vérifiez si response.data est un tableau ou s'il contient la propriété qui contient le tableau
            setMovies(response.data.data || response.data || []); // Adapté selon la structure de votre API
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
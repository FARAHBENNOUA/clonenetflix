import React from 'react';
import { useGetMovies } from '../hooks/getMovies';
import './Movies.css';

const Movies = () => {
    const { movies, error, loading } = useGetMovies();

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="movies-page">
            <h1>Tous les Films</h1>
            <div className="movies-grid">
                {movies?.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img 
                            src={movie.poster_path}
                            alt={movie.original_title}
                            className="movie-poster"
                        />
                        <div className="movie-details">
                            <h3>{movie.original_title}</h3>
                            <p>{movie.overview}</p>
                            <span className="movie-rating">
                                Note: {movie.vote_average}/10
                            </span>
                        </div>
                        <button className="play-button">▶</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
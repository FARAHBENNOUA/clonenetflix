import React from 'react';
import { useGetMovies } from '../hooks/getMovies';
import './Rated.css';

const Rated = () => {
    const { movies, error, loading } = useGetMovies();

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    // Filtrer et trier les films par note (du plus haut au plus bas)
    const topRatedMovies = movies
        ? [...movies].sort((a, b) => b.vote_average - a.vote_average).slice(0, 10)
        : [];

    return (
        <div className="rated-page">
            <h1>Les Films Les Mieux Notés</h1>
            
            <div className="top-rated-container">
                {topRatedMovies.length > 0 && (
                    <div className="featured-rated">
                        <img 
                            src={topRatedMovies[0].poster_path}
                            alt={topRatedMovies[0].original_title}
                            className="featured-poster"
                        />
                        <div className="featured-details">
                            <h2>{topRatedMovies[0].original_title}</h2>
                            <div className="top-badge">TOP #1</div>
                            <p className="rating">Note: {topRatedMovies[0].vote_average}/10</p>
                            <p className="overview">{topRatedMovies[0].overview}</p>
                            
                            <div className="action-buttons">
                                <button className="watch-button">▶ Lecture</button>
                                <button className="info-button">+ Info</button>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="rated-list">
                    {topRatedMovies.slice(1).map((movie, index) => (
                        <div key={movie.id} className="rated-item">
                            <div className="rank">#{index + 2}</div>
                            <img 
                                src={movie.poster_path}
                                alt={movie.original_title}
                                className="rated-poster"
                            />
                            <div className="rated-details">
                                <h3>{movie.original_title}</h3>
                                <p className="rating">Note: {movie.vote_average}/10</p>
                                <p className="overview">{movie.overview}</p>
                            </div>
                            <div className="play-icon">▶</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rated;
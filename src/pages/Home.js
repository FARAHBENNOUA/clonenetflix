import React from 'react';
import { useGetMovies } from '../hooks/getMovies';
import './Home.css';

const Home = () => {
    const { movies, error, loading } = useGetMovies();

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {/* Section Film en Vedette */}
            <section className="featured-movie">
                <div className="featured-content">
                    <h2>57 Secondes - Bande annonce VF (2024)</h2>
                    <iframe 
                        className="featured-video"
                        src="https://www.youtube.com/embed/jmkwNvZHQI0"
                        title="57 Secondes"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="movie-info">
                        <p className="description">
                            Un spécialiste en technologie découvre un mystérieux appareil qui lui permet de voyager 57 secondes dans le passé.
                        </p>
                        
                           
                        </div>
                    </div>
                
            </section>

            {/* Section Liste des Films */}
            <main className="movies-container">
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
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
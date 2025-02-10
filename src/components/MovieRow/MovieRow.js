import React from 'react';
import './MovieRow.css';

function MovieRow({ title, movies }) {
    return (
        <div className="movieRow">
            <h2 className="movieRow__title">{title}</h2>
            <div className="movieRow__posters">
                {movies?.map(movie => (
                    <div 
                        key={movie.id} 
                        className="movieRow__poster-wrapper"
                    >
                        <img
                            className="movieRow__poster"
                            src={movie.poster_path}
                            alt={movie.original_title}
                        />
                        <div className="movieRow__info">
                            <h3>{movie.original_title}</h3>
                            <div className="movieRow__info-extra">
                                <span className="movieRow__rating">
                                    {movie.vote_average}/10
                                </span>
                                <span className="movieRow__year">
                                    {new Date(movie.release_date).getFullYear()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieRow;
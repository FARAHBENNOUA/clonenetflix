import React from 'react';
import './Banner.css';

function Banner({ movie }) {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.original_title}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button play">Lecture</button>
                    <button className="banner__button more">Plus d'infos</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
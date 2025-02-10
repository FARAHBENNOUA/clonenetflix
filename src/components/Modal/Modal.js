import React from 'react';
import './Modal.css';

const Modal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal__backdrop" onClick={onClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>×</button>
                
                <div className="modal__header">
                    <img 
                        src={movie.backdrop_path}
                        alt={movie.original_title}
                        className="modal__backdrop-img"
                    />
                    <div className="modal__header-content">
                        <h1>{movie.original_title}</h1>
                    </div>
                </div>

                <div className="modal__body">
                    <div className="modal__info">
                        <span className="modal__rating">{movie.vote_average}/10</span>
                        <span className="modal__year">
                            {new Date(movie.release_date).getFullYear()}
                        </span>
                    </div>
                    
                    <p className="modal__overview">{movie.overview}</p>
                    
                    <div className="modal__buttons">
                        <button className="modal__button play">Lecture</button>
                        <button className="modal__button">+ Ma Liste</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;


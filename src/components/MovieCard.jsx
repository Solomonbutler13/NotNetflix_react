import React, { useState } from 'react';

function MovieCard({ title, overview, posterUrl, trailerUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={posterUrl} alt={title} />
      {isClicked && (
        <div className="movie-details">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      )}
      {isClicked && (
        <div className="trailer">
          <iframe title="trailer" width="560" height="315" src={trailerUrl} frameborder="0" allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieCard;

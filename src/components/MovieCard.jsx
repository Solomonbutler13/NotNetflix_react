import React, { useState, useEffect } from 'react';

function MovieCard({ title, overview, posterUrl, movieId, openCard, setOpenCard  }) {

  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b1450545c1c2507e81244e55d8f88a32&append_to_response=videos`);
        const data = await response.json();
        const trailerKey = data?.videos?.results[0]?.key;
        if (trailerKey) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}`);
        } else {
          console.log(`No trailer found for ${title}`);
        }
      } catch (error) {
        console.error('Error fetching trailer URL:', error);
      }
    };

    fetchTrailerUrl();
  }, [movieId, title]);

  const handleClick = () => {
    if (openCard === movieId) {
      setOpenCard(null);
    } else {
      setOpenCard(movieId);
    }
  };


  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      {openCard === movieId && (
        <div>
          <p>{overview}</p>
          {trailerUrl && (
            <div className="trailer">
              <iframe
                title="trailer"
                width="560"
                height="250"
                src={trailerUrl}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieCard;

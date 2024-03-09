// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import TrailerModal from './TrailerModal';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  useEffect(() => {
    // Fetch movie details and trailer URL based on movieId
  }, [movieId]);

  const handleOpenTrailerModal = () => {
    // Fetch and set trailer URL, then open the modal
    setIsTrailerModalOpen(true);
  };

  const handleCloseTrailerModal = () => {
    setIsTrailerModalOpen(false);
  };

  return (
    <div className="movie-details-page">
      <Link to="/">Back to Landing Page</Link>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <button onClick={handleOpenTrailerModal}>Watch Trailer</button>

      <TrailerModal
        isOpen={isTrailerModalOpen}
        handleClose={handleCloseTrailerModal}
        trailerUrl={trailerUrl}
      />
    </div>
  );
}

export default MovieDetailsPage;

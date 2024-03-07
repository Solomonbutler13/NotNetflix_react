import React from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar'; // Import SearchBar component
import TrailerModal from '../components/TrailerModal'; // Import TrailerModal component

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Trending Movies</h1>
      <SearchBar /> {/* Render SearchBar component */}
      <div className="movie-list">
        {/* Render MovieCard components */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <TrailerModal isOpen={false} handleClose={() => {}} trailerUrl="" /> {/* Render TrailerModal component */}
    </div>
  );
}

export default LandingPage;

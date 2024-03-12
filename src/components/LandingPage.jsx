import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';


function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [openCard, setOpenCard] = useState(null);



  useEffect(() => {
    const fetchMovies = async (url) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ1MDU0NWMxYzI1MDdlODEyNDRlNTVkOGY4OGEzMiIsInN1YiI6IjY1ZWMwMjBhNmYzMWFmMDE4NWU3NjJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZRjQsNwpIgt67f77wXPMit4uWFnWR8e_nTYbaypYO6o'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.statusText}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
  }, []);

  const handleMouseEnter = (movieId) => {
    if (!selectedMovie) {
      setHoveredMovie(movieId);
    }
  };
  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  // Filter movies by genre
  const topMovies = movies.filter(movie => movie.popularity > 500);
  const horrorMovies = movies.filter(movie => movie.genre_ids.includes(27));
  const actionMovies = movies.filter(movie => movie.genre_ids.includes(28));
  const romanceMovies = movies.filter(movie => movie.genre_ids.includes(10749));

  return (
    <div className="landing-page">
      <div className="logo">NotNetflix</div>
      <SearchBar />


 

      {/* Top Movies Section */}
      <div className="genre-section">
        <h2>Top Movies</h2>
        <div className="movie-list">
          {topMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movieId={movie.id}
              openCard={openCard}
              setOpenCard={setOpenCard}
              
            />
          ))}
        </div>
      </div>

      {/* Horror Movies Section */}
      <div className="genre-section">
        <h2>Horror Movies</h2>
        <div className="movie-list">
          {horrorMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movieId={movie.id}
              openCard={openCard}
              setOpenCard={setOpenCard}
            />
          ))}
        </div>
      </div>

      {/* Action Movies Section */}
      <div className="genre-section">
        <h2>Action Movies</h2>
        <div className="movie-list">
          {actionMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movieId={movie.id}
              openCard={openCard}
              setOpenCard={setOpenCard}
            />
          ))}
        </div>
      </div>

      {/* Romance Movies Section */}
      <div className="genre-section">
        <h2>Romance Movies</h2>
        <div className="movie-list">
          {romanceMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movieId={movie.id}
              openCard={openCard}
              setOpenCard={setOpenCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

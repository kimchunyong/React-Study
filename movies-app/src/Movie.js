import React from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';
import MovieGenres from './MovieGenres';
import PorpTypes from 'prop-types';

function Movie ({ title, poster, genres, synopsis }) {
  return (
    <div className='Movie'>
      <div class='Movie__cloums'>
        <MoviePoster poster={poster} />
      </div>
      <div class='Movie__cloums'>
        <h1>
          {title}
        </h1>
        <div className='Movie__Genres'>
          {genres.map((genre, index) => {
            console.log(genres);
            return <MovieGenres genre={genre} key={index} />;
          })}
        </div>
        <p className='Movie__synopsis'>
          {synopsis}
        </p>
      </div>
    </div>
  );
}

Movie.porpTypes = {
  poster: PorpTypes.string.isRequired,
  title: PorpTypes.string.isRequired,
  genres: PorpTypes.array.isRequired,
  synopsis: PorpTypes.string.isRequired
};

export default Movie;

import React from 'react';
import PorpTypes from 'prop-types';

function MovieGenres ({ genre }) {
  return (
    <span className='Movie__Genre'>
      {genre}
    </span>
  );
}

MovieGenres.propType = {
  geners: PorpTypes.string.isRequired
};

export default MovieGenres;

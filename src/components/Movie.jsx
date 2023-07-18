import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className=' flex px-7 py-3 border-b border-slate-700'>
      <img src={movie.Poster} alt={movie.Title} className=' w-16 h-20' />
      <div className=' mx-5 my-2'>
        <h3>{movie.Title}</h3>
        <p className=' text-sm my-1'>
          <span className='mr-1 '>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;

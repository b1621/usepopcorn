import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className=' flex px-7 py-3 border-b border-slate-700'>
      <img src={movie.poster} alt={movie.title} className=' w-16 h-20' />
      <div className=' mx-5'>
        <h3>{movie.title}</h3>
        <p className=' text-sm my-1'>
          <span className='mr-1 '>📅</span>
          <span>{movie.year}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;

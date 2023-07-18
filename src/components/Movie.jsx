import React from "react";

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <div
      onClick={() => onSelectMovie(movie.imdbID)}
      className='  border-b border-slate-700   '
    >
      <div className='flex px-7 py-3 transition-all hover:scale-110 duration-500 hover:bg-slate-900 cursor-pointer'>
        <img src={movie.Poster} alt={movie.Title} className=' w-16 h-20' />
        <div className=' mx-5 my-2'>
          <h3>{movie.Title}</h3>
          <p className=' text-sm my-1'>
            <span className='mr-1 '>📅</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

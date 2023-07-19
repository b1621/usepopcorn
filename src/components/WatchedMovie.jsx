import React from "react";

const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <div className=' flex justify-between px-7 py-3 border-b border-slate-700'>
      <img src={movie.poster} alt={movie.title} className=' w-16 h-20' />
      <div className=' mx-5 my-2'>
        <h3>{movie.title}</h3>

        <div className='text-sm my-1 grid grid-cols-3'>
          <p>
            <span>⭐</span>
            <span> {movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span> {movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
      <div className=' '>
        <button
          className=' hover:scale-110 transition-all duration-300 py-5'
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default WatchedMovie;

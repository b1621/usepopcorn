import React from "react";
function average(array) {
  if (array.length === 0) {
    return 0; // Return 0 if the array is empty to avoid division by zero
  }
  const sum = array.reduce((acc, value) => acc + value, 0);
  return sum / array.length;
}

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className=' px-5 pb-5 shadow-2xl shadow-slate-900'>
      <h2>Movies you watched</h2>
      <div className='grid grid-cols-4 text-sm mt-2'>
        <p className=' '>
          <span className=' text-sky-600'>#</span>
          <span> {watched.length} movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span> {avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span> {avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;

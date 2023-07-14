import React from "react";

const WatchedSummary = () => {
  return (
    <div className=' p-5 shadow-2xl shadow-slate-900'>
      <h2>Movies you watched</h2>
      <div className='grid grid-cols-4 text-sm mt-2'>
        <p className=' '>
          <span className=' text-sky-600'>#</span>
          <span> X movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span> Y</span>
        </p>
        <p>
          <span>🌟</span>
          <span> Z</span>
        </p>
        <p>
          <span>⏳</span>
          <span>T min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;

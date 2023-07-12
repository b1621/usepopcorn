import React from "react";

const WatchedSummary = () => {
  return (
    <div className=' p-5'>
      <h2>Movies you watched</h2>
      <div className='grid grid-cols-4'>
        <p className=''>
          <span>#️⃣ #️⃣ #</span>
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

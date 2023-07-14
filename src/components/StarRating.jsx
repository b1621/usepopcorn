import React from "react";

const StarRating = ({ maxRating = 5 }) => {
  // {maxRating} =5 , means that while destracturing it gives maxrating a default value if not given first when called
  return (
    <div className='border  flex align-middle gap-4'>
      <div className=' flex gap-3'>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>{maxRating}</p>
    </div>
  );
};

export default StarRating;

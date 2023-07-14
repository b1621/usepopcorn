import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 5 }) => {
  // {maxRating} =5 , means that while destracturing it gives maxrating a default value if not given first when called
  const [rating, setRating] = useState(0);
  return (
    <div className='border  flex align-middle gap-4'>
      <div className=' flex gap-3'>
        {Array.from({ length: maxRating }, (_, i) => (
          //   <span>S{i + 1}</span>
          <Star
            key={i}
            full={rating >= i + 1}
            onRate={() => setRating(i + 1)}
          />
        ))}
      </div>
      <p>{rating || ""}</p>
    </div>
  );
};

export default StarRating;

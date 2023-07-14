import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  color = "text-yellow-600",
  size = 12,
}) => {
  // {maxRating} =5 , means that while destracturing it gives maxrating a default value if not given first when called
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div className='border  flex align-middle gap-4'>
      <div className=' flex gap-1'>
        {Array.from({ length: maxRating }, (_, i) => (
          //   <span>S{i + 1}</span>
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p>{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;

import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({
  maxRating = 5,
  // color = "text-yellow-600",
  color = "#1E2F",
  size = 25,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  // {maxRating} =5 , means that while destracturing it gives maxrating a default value if not given first when called
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  // const color = "#2e2e2e";
  // const size = "25px";

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  return (
    <div className="border  flex align-middle gap-4">
      <div className=" flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          //   <span>S{i + 1}</span>
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
};

export default StarRating;

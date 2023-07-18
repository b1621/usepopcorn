import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  return (
    <div>
      <div>
        <button className=' mx-4' onClick={onCloseMovie}>
          <BsArrowLeft />
        </button>
      </div>

      <p>{selectedId}</p>
    </div>
  );
};

export default MovieDetails;

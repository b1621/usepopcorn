import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovieDetail = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=44c8fa82&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
    };

    getMovieDetail();
  }, []);
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

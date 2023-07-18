import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div>
      {movies?.map((movie) => (
        <Movie onSelectMovie={onSelectMovie} movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MovieList;

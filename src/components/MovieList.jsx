import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: "1",
      poster:
        "https://th.bing.com/th/id/OIP.sXbUN8pYXiL6sgVkyUi7_QHaLH?pid=ImgDet&rs=1",
      title: "Wrath of man",
      year: "2022",
    },
    {
      id: "2",
      poster:
        "https://3.bp.blogspot.com/-g8v8P5q5lpw/W53VmvrW6qI/AAAAAAAAHU4/eSKRx9YTXWAUddc0ZwZfDY819fIXdQ_NwCLcBGAs/s1600/p10731391_v_v8_ab.jpg",
      title: "Fury",
      year: "2015",
    },
    {
      id: "3",
      poster:
        "https://th.bing.com/th/id/OIP.goiIs4v5ABYXysBc2kHKwwHaJ3?pid=ImgDet&w=850&h=1133&rs=1",
      title: "Friday",
      year: "2004",
    },
  ]);
  return (
    <div>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;

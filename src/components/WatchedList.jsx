import React, { useState } from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = () => {
  const [watched, setWatched] = useState([
    {
      id: "1",
      poster:
        "https://th.bing.com/th/id/OIP.sXbUN8pYXiL6sgVkyUi7_QHaLH?pid=ImgDet&rs=1",
      title: "Wrath of man",
      year: "2022",
      imdbRating: "8.5",
      userRating: "9",
      runtime: "148",
    },
    {
      id: "3",
      poster:
        "https://th.bing.com/th/id/OIP.goiIs4v5ABYXysBc2kHKwwHaJ3?pid=ImgDet&w=850&h=1133&rs=1",
      title: "Friday",
      year: "2004",
      imdbRating: "8",
      userRating: "9.5",
      runtime: "116",
    },
  ]);
  return (
    <div className=' '>
      {watched.map((movie) => (
        <WatchedMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default WatchedList;

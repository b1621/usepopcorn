import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0); // this supposed to count when the users change the ratting value
  let count = 0;

  useEffect(() => {
    // if (userRating) countRef.current = countRef.current + 1;
    if (userRating) countRef.current++;
    if (userRating) count++;

    // the count will not incremented because every time it renders the count value reset to 0
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
      count: count,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        onCloseMovie();
        console.log("... Closing ... ");
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  // console.log(genre, title, year);
  useEffect(() => {
    const getMovieDetail = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=44c8fa82&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
    };

    getMovieDetail();
    setIsLoading(false);
  }, [selectedId]);

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );
  return (
    <div className="absolute top-0  w-full ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="  ">
            <button
              className="absolute z-10 text-xl m-4 hover:scale-125 transition-all duration-300 "
              onClick={onCloseMovie}
            >
              <BsArrowLeft />
            </button>

            <div className="relative flex gap-10  bg-slate-700 ">
              <div>
                <img
                  className=" h-56"
                  src={poster}
                  alt={`Poster of ${movie}`}
                />
              </div>
              <div className=" my-10 leading-7 text-sm">
                <h2 className=" text-2xl mb-3">{title}</h2>
                <p>
                  {released} &bull; {runtime}{" "}
                </p>
                <p>{genre}</p>
                <p>
                  {" "}
                  <span> ⭐ </span> {imdbRating} IMDb rating{" "}
                </p>
              </div>
            </div>
          </header>
          <section className="  p-10">
            <div className="px-5 py-4 my-4 mx-auto w-80 bg-slate-700 rounded-md">
              {isWatched ? (
                <p>
                  You have rated this movie with {watchedUserRating}{" "}
                  <span>🌟</span>{" "}
                </p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={22}
                    color="yellow"
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 mt-5 rounded-xl py-1 w-full"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot} </em>
            </p>
            <p className="py-4">Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

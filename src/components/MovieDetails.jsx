import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  // console.log(genre, title, year);
  useEffect(() => {
    const getMovieDetail = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=44c8fa82&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
    };

    getMovieDetail();
    setIsLoading(false);
  }, [selectedId]);
  return (
    <div className='absolute top-0  w-full '>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className='  '>
            <button
              className='absolute z-10 text-xl m-4 hover:scale-125 transition-all duration-300 '
              onClick={onCloseMovie}
            >
              <BsArrowLeft />
            </button>

            <div className='relative flex gap-10  bg-slate-700 '>
              <div>
                <img
                  className=' h-56'
                  src={poster}
                  alt={`Poster of ${movie}`}
                />
              </div>
              <div className=' my-10 leading-7 text-sm'>
                <h2 className=' text-2xl mb-3'>{title}</h2>
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
          <section className='  p-10'>
            <div className='px-5 py-4 my-4 mx-auto w-80 bg-slate-700 rounded-md'>
              <StarRating maxRating={10} size={22} color='yellow' />
            </div>
            <p>
              <em>{plot} </em>
            </p>
            <p className='py-4'>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

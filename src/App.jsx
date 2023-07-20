import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import SearchBar from "./components/SearchBar";
import NumResult from "./components/NumResult";

import Box from "./components/Box";
import WatchBox from "./components/WatchBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import StarRating from "./components/StarRating";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

const KEY = "44c8fa82";

function App() {
  // const [movies, setMovies] = useState([
  //   {
  //     imdbID: "1",
  //     Poster:
  //       "https://th.bing.com/th/id/OIP.sXbUN8pYXiL6sgVkyUi7_QHaLH?pid=ImgDet&rs=1",
  //     Title: "Wrath of man",
  //     Year: "2022",
  //   },
  //   {
  //     imdbID: "2",
  //     Poster:
  //       "https://3.bp.blogspot.com/-g8v8P5q5lpw/W53VmvrW6qI/AAAAAAAAHU4/eSKRx9YTXWAUddc0ZwZfDY819fIXdQ_NwCLcBGAs/s1600/p10731391_v_v8_ab.jpg",
  //     Title: "Fury",
  //     Year: "2015",
  //   },
  //   {
  //     imdbID: "3",
  //     Poster:
  //       "https://th.bing.com/th/id/OIP.goiIs4v5ABYXysBc2kHKwwHaJ3?pid=ImgDet&w=850&h=1133&rs=1",
  //     Title: "Friday",
  //     Year: "2004",
  //   },
  // ]);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };
  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
        setError("");
      } catch (err) {
        // console.error("error message : ", err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);

  // console.log(movies);
  // console.log(watched);
  return (
    <>
      <div className='absolute min-h-screen w-screen bg-gray-900 text-white '>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} />
          <NumResult movies={movies} />
        </Navbar>

        <Main>
          <Box>
            {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
            {isLoading && <Loader />}
            {!isLoading && movies.length == 0 && (
              <p className=' text-center text-xl my-10  text-sky-600'>
                No Movies Found
              </p>
            )}
            {!isLoading && !error && (
              <MovieList onSelectMovie={handleSelectMovie} movies={movies} />
            )}
            {error && <ErrorMessage message={error} />}
          </Box>
          <Box>
            {selectedId ? (
              <MovieDetails
                watched={watched}
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched}
                />
              </>
            )}
          </Box>
        </Main>
        {/* <StarRating maxRating={5} defaultRating={3} />
        <StarRating
          size={27}
          color='blue'
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Gook", "Amazing"]}
        />
        <StarRating size={30} color='yellow' maxRating={10} /> */}
      </div>
    </>
  );
}

export default App;

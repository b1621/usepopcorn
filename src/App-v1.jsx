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

// const KEY = "VERIFYKEY=bb4fa5f5-1a4b-46ac-add0-e33509c03dac";
const KEY = "44c8fa82";
// fetch(`http://www.omdbapi.com/?apikey=44c8fa82&s=interstellar`)

function App() {
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
  useEffect(() => {
    console.log("================================");
    fetch(`http://www.omdbapi.com/?apikey=44c8fa82&s=interstellar`)
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  }, []);
  return (
    <>
      <div className='absolute min-h-screen w-screen bg-gray-900 text-white '>
        <Navbar>
          <SearchBar />
          <NumResult movies={movies} />
        </Navbar>

        <Main>
          <Box>
            <MovieList movies={movies} />
          </Box>
          <Box>
            <WatchedSummary />

            <WatchedList />
          </Box>
        </Main>
        <StarRating maxRating={5} defaultRating={3} />
        <StarRating
          size={27}
          color='blue'
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Gook", "Amazing"]}
        />
        <StarRating size={30} color='yellow' maxRating={10} />
      </div>
    </>
  );
}

export default App;

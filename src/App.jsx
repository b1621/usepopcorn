import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import SearchBar from "./components/SearchBar";
import NumResult from "./components/NumResult";

import ListBox from "./components/ListBox";
import WatchBox from "./components/WatchBox";
import MovieList from "./components/MovieList";

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
  return (
    <>
      <div className='absolute min-h-screen w-screen bg-gray-900 text-white '>
        <Navbar>
          <SearchBar />
          <NumResult movies={movies} />
        </Navbar>

        <Main>
          <ListBox>
            <MovieList movies={movies} />
          </ListBox>
          <WatchBox />
        </Main>
      </div>
    </>
  );
}

export default App;

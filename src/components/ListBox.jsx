import React, { useState } from "react";
import MovieList from "./MovieList";

const ListBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='bg-gray-800 rounded relative h-full'>
      <div className=' flex justify-end'>
        <button
          onClick={() => setIsOpen((open) => !open)}
          className=' text-gray-500 m-5 hover:transform hover:scale-125 hover:transition-all'
        >
          {isOpen ? "➖" : "➕"}
        </button>
      </div>

      {isOpen && <MovieList />}
    </div>
  );
};

export default ListBox;

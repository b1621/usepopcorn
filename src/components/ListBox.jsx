import React, { useState } from "react";
import MovieList from "./MovieList";

const ListBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='bg-gray-800 rounded relative h-full'>
      <div className='h-5'>
        <button
          onClick={() => setIsOpen((open) => !open)}
          className='float-right text-gray-500 mr-5 mt-5 hover:transform hover:scale-125 hover:transition-all'
        >
          {isOpen ? "➖" : "➕"}
        </button>
      </div>

      {isOpen && children}
    </div>
  );
};

export default ListBox;

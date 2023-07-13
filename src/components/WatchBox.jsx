import React, { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

const WatchBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='bg-gray-800 rounded relative h-full'>
      <div className=''>
        <button
          onClick={() => setIsOpen((open) => !open)}
          className='float-right text-gray-500 mr-5 mt-5 hover:transform hover:scale-125 hover:transition-all'
        >
          {isOpen ? "➖" : "➕"}
        </button>
      </div>
      <WatchedSummary />

      {isOpen && <WatchedList />}
    </div>
  );
};

export default WatchBox;

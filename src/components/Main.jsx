import React from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

const Main = () => {
  return (
    <div className=' mx-20 lg:mx-40 '>
      <div className='min-h-[550px] grid grid-cols-1 md:grid-cols-2 gap-10'>
        <ListBox />
        <WatchBox />
      </div>
    </div>
  );
};

export default Main;

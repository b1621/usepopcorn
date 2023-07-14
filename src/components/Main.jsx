import React from "react";

const Main = ({ children }) => {
  return (
    <div className=' mx-20 lg:mx-40 '>
      <div className='min-h-[550px] grid grid-cols-1 md:grid-cols-2 gap-10'>
        {children}
      </div>
    </div>
  );
};

export default Main;

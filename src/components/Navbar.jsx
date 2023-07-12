import React from "react";

const Navbar = () => {
  return (
    <div className='  bg-indigo-700 m-5 rounded-md'>
      <div className='flex flex-row justify-between py-3 px-5'>
        <div>
          <p className=' text-lg font-bold'>🍿 usePopcorn</p>
        </div>
        <div>
          <input
            type='search'
            className=' bg-indigo-600  shadow rounded py-1 px-5 w-96'
            placeholder='Search Movies ... '
          />
        </div>
        <div>Found 3 results</div>
      </div>
    </div>
  );
};

export default Navbar;

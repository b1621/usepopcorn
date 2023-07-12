import React from "react";
import SearchBar from "./SearchBar";
import NumResult from "./NumResult";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className='  bg-indigo-700 m-5 rounded-md'>
      <div className='flex flex-row justify-between py-3 px-5'>
        <Logo />
        <SearchBar />
        <NumResult />
      </div>
    </div>
  );
};

export default Navbar;

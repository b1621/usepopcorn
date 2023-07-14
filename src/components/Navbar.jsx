import React from "react";
import Logo from "./Logo";

const Navbar = ({ children }) => {
  return (
    <div className='  bg-indigo-700 m-5 rounded-md'>
      <div className='flex flex-row justify-between py-3 px-5'>
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className='absolute min-h-screen w-screen bg-gray-900 text-white '>
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;

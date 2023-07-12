import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className='absolute min-h-screen w-screen bg-gray-900 text-white '>
        <Navbar />
        <p className=' text-center'>hello world</p>
      </div>
    </>
  );
}

export default App;

import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className=' text-center text-xl my-10 text-red-400'>
        <span> ⛔ </span> {message}
      </p>
    </div>
  );
};

export default ErrorMessage;

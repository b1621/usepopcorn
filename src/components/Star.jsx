import React from "react";

const Star = ({ onRate, full, onHoverIn, onHoverOut, color, size }) => {
  const starStyle = {
    transition: "transform 0.9s ease-in-out",
    transform: full ? "scale(1.2)" : "scale(1)",
  };
  return (
    <span
      className={`star ${full ? "scale-125 text-yellow-400" : "text-gray-400"}`}
      //   className='star'
      style={starStyle}
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 117.1"
          x="0px"
          y="0px"
          width={size}
          height={size}
          fill={color}
          stroke={color}
        >
          <defs>{/* <style>{".cls-1{fill:#ffd401;}"}</style> */}</defs>
          <title>star-symbol</title>
          <path
            className="cls-1"
            d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"
          />
        </svg>
      ) : (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          //   x='0px'
          //   y='0px'
          // width="24px"
          // height="24px"

          width={size}
          height={size}
          viewBox="0 0 122.879 117.188"
          enableBackground="new 0 0 122.879 117.188"
          xmlSpace="preserve"
          fill={color}
          stroke={color}
        >
          <g>
            <path d="M64.395,1.969l15.713,36.79l39.853,3.575c1.759,0.152,3.06,1.701,2.907,3.459c-0.073,0.857-0.479,1.604-1.079,2.129 l0.002,0.001L91.641,74.25l8.917,39.021c0.395,1.723-0.683,3.439-2.406,3.834c-0.883,0.203-1.763,0.018-2.466-0.441L61.441,96.191 L27.087,116.73c-1.516,0.906-3.48,0.412-4.387-1.104c-0.441-0.736-0.55-1.58-0.373-2.355h-0.003l8.918-39.021L1.092,47.924 c-1.329-1.163-1.463-3.183-0.301-4.512c0.591-0.676,1.405-1.042,2.235-1.087l39.748-3.566l15.721-36.81 c0.692-1.627,2.572-2.384,4.199-1.692C63.494,0.597,64.084,1.225,64.395,1.969L64.395,1.969z M74.967,43.023L61.441,11.351 L47.914,43.023l-0.004-0.001c-0.448,1.051-1.447,1.826-2.665,1.932l-34.306,3.078l25.819,22.545c0.949,0.74,1.438,1.988,1.152,3.24 l-7.674,33.578l29.506-17.641c0.986-0.617,2.274-0.672,3.342-0.033l29.563,17.674l-7.673-33.578l0.003-0.002 c-0.252-1.109,0.096-2.318,1.012-3.119l25.955-22.664L77.815,44.97C76.607,44.932,75.472,44.208,74.967,43.023L74.967,43.023z" />
          </g>
        </svg>
      )}
    </span>
  );
};

export default Star;

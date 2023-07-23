import { useEffect, useRef } from "react";
import { useKey } from "../customHooks/useKey";

const SearchBar = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKey("enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div>
      <input
        type="search"
        className=" bg-indigo-600  shadow rounded py-1 px-5 w-96 outline-none transition-all duration-300 active:shadow-xl active:z-10 -my-2 "
        id="search"
        placeholder="Search Movies ... "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
};

export default SearchBar;

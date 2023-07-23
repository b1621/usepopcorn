import { useEffect, useRef } from "react";

const SearchBar = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
    // console.log(inputEl);
  }, [setQuery]);
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

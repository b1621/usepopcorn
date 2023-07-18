const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type='search'
        className=' bg-indigo-600  shadow rounded py-1 px-5 w-96'
        placeholder='Search Movies ... '
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import useSearch from "../../../hooks/useSearch";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  const { loading, error, search } = useSearch();

  // Handling the search input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handling the search type if Author or Title
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  // Handling the search button
  const handleClick = () => {
    if (query) {
      search(query, searchType);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Search for a book by {searchType}:
      </h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          name="search"
          id="searchBar"
          value={query}
          onChange={handleChange}
          placeholder="Enter search term"
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <select
          value={searchType}
          onChange={handleSelectChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button
          onClick={handleClick}
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 disabled:bg-gray-400"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SearchField;

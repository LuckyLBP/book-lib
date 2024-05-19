import React from "react";
import SearchField from "./SearchField/SearchField";
import Result from "../Result/Result";

const Search = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search for a book</h1>
      <SearchField />
      <Result />
    </div>
  );
};

export default Search;

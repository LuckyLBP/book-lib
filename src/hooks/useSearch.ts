import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBooksByAuthor, searchBooksByTitle } from "../api/api";
import { setSearchResult } from "../redux/slices/searchSlice";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const search = async (searchTerm: string, searchType: string) => {
    setLoading(true);
    setError("");

    const fixedSearchTerm = searchTerm.replace(/ /g, "+");

    try {
      let response;
      if (searchType === "title") {
        response = await searchBooksByTitle(fixedSearchTerm);
        console.log('Title search response:', response); 
        dispatch(setSearchResult({ type: searchType, title: response.docs }));
      } else if (searchType === "author") {
        response = await searchBooksByAuthor(fixedSearchTerm);
        console.log('Author search response:', response); 
        dispatch(setSearchResult({ type: searchType, author: response.docs }));
      }
    } catch (err) {
      console.error('Search error:', err);
      setError("Error... Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, search };
};

export default useSearch;
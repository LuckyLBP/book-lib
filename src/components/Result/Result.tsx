import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchResult, SearchResult } from "../../redux/slices/searchSlice";
import * as TitleTypes from "../../types/titleTypes";
import * as AuthorTypes from "../../types/authorTypes";
import ResultCard from "./ResultCard";

// Number of books per page
const ITEMS_PER_PAGE = 8;

const Result = () => {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [paginationArray, setPaginationArray] = useState<any[]>([]);
  const [paginationTracker, setPaginationTracker] = useState(0);
  const searchData = useSelector(getSearchResult) as SearchResult;

  useEffect(() => {
    if (searchData) {
      setResult(searchData);
    }
  }, [searchData]);

  // Pagination
  useEffect(() => {
    if (result) {
      const combinedResults = [
        ...(result.title || []),
        ...(result.author || []),
      ];

      const paginatedArray = [];
      for (let i = 0; i < combinedResults.length; i += ITEMS_PER_PAGE) {
        paginatedArray.push(combinedResults.slice(i, i + ITEMS_PER_PAGE));
      }

      setPaginationArray(paginatedArray);
    }
  }, [result]);

  // Pagination for next page
  const handlePageUp = () => {
    setPaginationTracker((prev) =>
      prev === paginationArray.length - 1 ? 0 : prev + 1
    );
  };

  // Pagination for previous page
  const handlePageDown = () => {
    setPaginationTracker((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center py-10">
        {paginationArray[paginationTracker]?.map(
          (item: AuthorTypes.Doc | TitleTypes.Doc, index: number) => (
            <div key={index} className="flex p-4 w-72">
              <ResultCard item={item} inputType="add" />
            </div>
          )
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 mx-2" onClick={handlePageDown}>
          {"<"}
        </button>
        <button className="px-4 mx-2" onClick={handlePageUp}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Result;

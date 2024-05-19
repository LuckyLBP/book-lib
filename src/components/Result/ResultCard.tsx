import React from "react";
import * as TitleTypes from "../../types/titleTypes";
import * as AuthorTypes from "../../types/authorTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { addBook, removeBook } from "../../redux/slices/bookSlice";
import { addAuthor, removeAuthor } from "../../redux/slices/authorSlice";
import { openModal } from "../../redux/slices/modalSlice";
import { ResultCardProps } from "../../types/types";

const ResultCard: React.FC<ResultCardProps> = ({ item, inputType }) => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state: RootState) => state.books.books);
  const favoriteAuthors = useSelector(
    (state: RootState) => state.authors.authors
  );

  const isBookFavorited = favoriteBooks.some((book) => book.key === item.key);
  const authorName = item.author_name?.join(", ") || "";
  const isAuthorFavorited = favoriteAuthors.includes(authorName);

  // Handling the favorite button
  const handleFavorite = (type: string) => {
    if (type === "book") {
      if (isBookFavorited) {
        dispatch(removeBook({ book: item as TitleTypes.Doc }));
      } else {
        dispatch(addBook({ book: item as TitleTypes.Doc }));
      }
    } else if (type === "author") {
      if (isAuthorFavorited) {
        dispatch(removeAuthor({ authorName }));
      } else {
        dispatch(addAuthor({ authorName }));
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="relative" style={{ paddingBottom: "150%" }}>
        <img
          src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={`${item.title}`}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-2">
          Published: {item.first_publish_year}
        </p>
        <p className="text-gray-700 mb-4">Author(s): {authorName}</p>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleFavorite("book")}
            className={`py-2 px-4 rounded transition duration-200 ${
              isBookFavorited
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isBookFavorited ? "Remove from favorites" : "Favorite this book"}
          </button>
          <button
            onClick={() => handleFavorite("author")}
            className={`py-2 px-4 rounded transition duration-200 ${
              isAuthorFavorited
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isAuthorFavorited
              ? "Remove from favorites"
              : "Favorite this author"}
          </button>
          <button
            onClick={() => dispatch(openModal(item))}
            className="bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition duration-200"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

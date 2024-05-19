import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { removeBook } from "../redux/slices/bookSlice";

const Books = () => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state: RootState) => state.books.books);

  // Remove book from favorites
  const handleRemoveBook = (book: any) => {
    dispatch(removeBook({ book }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-4">Favorite Books</h1>
      {favoriteBooks.length > 0 ? (
        <ul>
          {favoriteBooks.map((book, index) => (
            <li key={index} className="mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-700">
                  Author: {book.author_name?.join(", ")}
                </p>
                <p className="text-gray-700">
                  Published: {book.first_publish_year}
                </p>
              </div>
              <button
                onClick={() => handleRemoveBook(book)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite books added.</p>
      )}
    </div>
  );
};

export default Books;

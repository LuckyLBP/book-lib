import { useLocation } from "react-router-dom";
import * as TitleTypes from "../types/titleTypes";
import * as AuthorTypes from "../types/authorTypes";

const BookPage = () => {
  const location = useLocation();
  const { value } =
    (location.state as { value: TitleTypes.Doc | AuthorTypes.Doc }) || {};

  console.log("BookPage location state:", location.state); // Debugging

  if (!value) {
    return <p>No book data available.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-4">{value.title}</h1>
      <p className="text-lg mb-2">Author(s): {value.author_name?.join(", ")}</p>
      <p className="text-lg mb-2">Published: {value.first_publish_year}</p>
      <img
        src={`https://covers.openlibrary.org/b/id/${value.cover_i}-L.jpg`}
        alt={value.title}
        className="w-full"
      />
    </div>
  );
};

export default BookPage;

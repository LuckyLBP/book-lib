import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { removeAuthor } from "../redux/slices/authorSlice";

const Authors = () => {
  const dispatch = useDispatch();
  const favoriteAuthors = useSelector(
    (state: RootState) => state.authors.authors
  );

  const handleRemoveAuthor = (authorName: string) => {
    dispatch(removeAuthor({ authorName }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-4">Favorite Authors</h1>
      {favoriteAuthors.length > 0 ? (
        <ul>
          {favoriteAuthors.map((authorName, index) => (
            <li key={index} className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">{authorName}</h2>
              <button
                onClick={() => handleRemoveAuthor(authorName)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite authors added.</p>
      )}
    </div>
  );
};

export default Authors;

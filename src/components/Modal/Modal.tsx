import React, { useState } from "react";
import { useModalState } from "../../hooks/useModal";
import { useReviews } from "../../hooks/useReviews";
import { useDispatch } from "react-redux";
import { addReviewedBook } from "../../redux/slices/reviewedBookSlice";

const BookModal: React.FC = () => {
  const { isVisible, book, handleClose } = useModalState();
  const { addReview, getReviews } = useReviews();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [pagesRead, setPagesRead] = useState(0);
  const [isSubjectCollapsed, setIsSubjectCollapsed] = useState(true);
  const dispatch = useDispatch();

  if (!isVisible || !book) return null;

  const genre = book.subject ? book.subject.join(", ") : "Nope";
  const firstSentence = book.first_sentence || "Nope";
  const totalPages = book.number_of_pages_median || "Nope";

  const charLimit = 100;
  const truncatedGenre =
    genre.length > charLimit ? genre.slice(0, charLimit) + "..." : genre;

  const handleReviewSubmit = () => {
    const reviewData = { review, rating, pagesRead };
    addReview(book.key, reviewData);
    dispatch(
      addReviewedBook({
        id: book.key,
        title: book.title,
        author: book.author_name.join(", "),
        coverId: book.cover_i,
        reviews: [reviewData],
      })
    );
    setReview("");
    setRating(1);
    setPagesRead(0);
  };

  const bookReviews = getReviews(book.key);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-full overflow-y-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
            className="w-1/2 h-auto mb-4"
          />
          <div className="w-full">
            <h2 className="text-xl font-bold text-center mb-4">{book.title}</h2>
            <p className="text-gray-700">
              <strong>Author:</strong> {book.author_name?.join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>Genre:</strong>{" "}
              {isSubjectCollapsed ? truncatedGenre : genre}
            </p>
            <button
              onClick={() => setIsSubjectCollapsed(!isSubjectCollapsed)}
              className="text-blue-500 mb-2"
            >
              {isSubjectCollapsed ? "Show Subjects" : "Hide Subjects"}
            </button>
            <p className="text-gray-700">
              <strong>First Sentence:</strong> {firstSentence}
            </p>
            <p className="text-gray-700">
              <strong>Total Pages:</strong> {totalPages}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Add a Review</h3>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            rows={4}
          />
          <div className="mt-2">
            <label className="block">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border rounded p-2"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <label className="block">Pages Read:</label>
            <input
              type="number"
              value={pagesRead}
              onChange={(e) => setPagesRead(Number(e.target.value))}
              className="border rounded p-2"
            />
          </div>
          <button
            onClick={handleReviewSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          >
            Submit Review
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
          {bookReviews.map((rev, index) => (
            <div key={index} className="mt-2 p-2 border rounded">
              <p className="text-gray-700">
                <strong>Rating:</strong> {rev.rating}
              </p>
              <p className="text-gray-700">
                <strong>Review:</strong> {rev.review}
              </p>
              <p className="text-gray-700">
                <strong>Pages Read:</strong> {rev.pagesRead}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookModal;

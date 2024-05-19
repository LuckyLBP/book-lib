import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/rootReducer";

const Read: React.FC = () => {
  const reviewedBooks = useSelector(
    (state: RootState) => state.reviewedBooks.reviewedBooks
  );

  if (reviewedBooks.length === 0) {
    return <p>No books reviewed yet.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books I've Read</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewedBooks.map((book: any) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-700">Author: {book.author}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Reviews</h3>
                {book.reviews.map((review: any, index: number) => (
                  <div key={index} className="mt-2 p-2 border rounded">
                    <p className="text-gray-700">
                      <strong>Rating:</strong> {review.rating}
                    </p>
                    <p className="text-gray-700">
                      <strong>Review:</strong> {review.review}
                    </p>
                    <p className="text-gray-700">
                      <strong>Pages Read:</strong> {review.pagesRead}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;

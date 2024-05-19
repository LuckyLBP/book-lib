import { useState } from "react";

interface Review {
  review: string;
  rating: number;
  pagesRead: number;
}

export const useReviews = () => {
  const [reviews, setReviews] = useState<{ [key: string]: Review[] }>({});

  // Add a review to a book
  const addReview = (bookId: string, review: Review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [bookId]: [...(prevReviews[bookId] || []), review],
    }));
  };

  // Get reviews for a book
  const getReviews = (bookId: string): Review[] => {
    return reviews[bookId] || [];
  };

  return {
    reviews,
    addReview,
    getReviews,
  };
};

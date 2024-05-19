import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Review {
  review: string;
  rating: number;
  pagesRead: number;
}

interface ReviewedBook {
  id: string;
  title: string;
  author: string;
  coverId: number;
  reviews: Review[];
}

interface ReviewedBooksState {
  reviewedBooks: ReviewedBook[];
}

const initialState: ReviewedBooksState = {
  reviewedBooks: [],
};

const reviewedBooksSlice = createSlice({
  name: 'reviewedBooks',
  initialState,
  reducers: {

    // Add reviewed book
    addReviewedBook: (state, action: PayloadAction<ReviewedBook>) => {
      const existingBook = state.reviewedBooks.find(
        (book) => book.id === action.payload.id
      );
      if (existingBook) {
        existingBook.reviews.push(...action.payload.reviews);
      } else {
        state.reviewedBooks.push(action.payload);
      }
    },
  },
});

export const { addReviewedBook } = reviewedBooksSlice.actions;

export default reviewedBooksSlice.reducer;

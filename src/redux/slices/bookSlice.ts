import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";
import { BooksState } from "../../types/types";

const initialState: BooksState = {
  books: [],
};

const favBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<{ book: any }>) {
      const { book } = action.payload;
      state.books.push(book);
    },
    removeBook(state, action: PayloadAction<{ book: any }>) {
      const { book: bookToRemove } = action.payload;
      state.books = state.books.filter(book => book.key !== bookToRemove.key);
    },
  },
});

export const { addBook, removeBook } = favBooksSlice.actions;
export const getFavoriteBooks = (state: RootState) => state.books;
export default favBooksSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import authorsReducer from '../slices/authorSlice';
import booksReducer from '../slices/bookSlice';
import modalReducer from '../slices/modalSlice';
import reviewedBooksReducer from '../slices/reviewedBookSlice'; 
import { SearchState, AuthorState, BooksState } from '../../types/types';

export interface RootState {
  search: SearchState;
  authors: AuthorState;
  books: BooksState;
  modal: any;
  reviewedBooks: any;
}

export const rootReducer = combineReducers({
  search: searchReducer,
  authors: authorsReducer,
  books: booksReducer,
  modal: modalReducer,
  reviewedBooks: reviewedBooksReducer,
});

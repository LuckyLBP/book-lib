import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";
import { AuthorState } from "../../types/types";

const initialState: AuthorState = {
  authors: [],
};

const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    addAuthor(state, action: PayloadAction<{ authorName: string }>) {
      const { authorName } = action.payload;
      state.authors.push(authorName);
    },
    removeAuthor(state, action: PayloadAction<{ authorName: string }>) {
      const { authorName } = action.payload;
      state.authors = state.authors.filter(name => name !== authorName);
    },
  },
});

export const { addAuthor, removeAuthor } = authorSlice.actions;
export const getAuthors = (state: RootState) => state.authors;
export default authorSlice.reducer;

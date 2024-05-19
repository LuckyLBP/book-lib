import { createSlice } from "@reduxjs/toolkit";

export interface SearchResult {
  author?: any[];
  title?: any[];
}

const initialState: SearchResult = {
  author: [],
  title: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      if (action.payload.type === "title") {
        state.title = action.payload.title;
      } else if (action.payload.type === "author") {
        state.author = action.payload.author;
      }
    },
  },
});

export const { setSearchResult } = searchSlice.actions;
export const getSearchResult = (state: any) => state.search;
export default searchSlice.reducer;
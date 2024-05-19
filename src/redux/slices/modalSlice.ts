import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isVisible: boolean;
  book: any | null; // Define the type according to your book details
}

const initialState: ModalState = {
  isVisible: false,
  book: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<any>) {
      state.isVisible = true;
      state.book = action.payload;
    },
    closeModal(state) {
      state.isVisible = false;
      state.book = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

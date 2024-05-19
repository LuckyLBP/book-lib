import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { closeModal } from "../redux/slices/modalSlice";

export const useModalState = () => {
  const dispatch = useDispatch();
  const { isVisible, book } = useSelector((state: RootState) => state.modal);

  // Closing the modal
  const handleClose = () => {
    dispatch(closeModal());
  };

  return {
    isVisible,
    book,
    handleClose,
  };
};

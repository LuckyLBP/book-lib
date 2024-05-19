import * as AuthorTypes from "../types/authorTypes";
import * as TitleTypes from "../types/titleTypes";
import { addAuthor, removeAuthor } from "../redux/slices/authorSlice";
import { addBook, removeBook } from "../redux/slices/bookSlice";
export const useFavorite = (
  favoriteType: string,
  dispatch: any,
  inputType: string,
  itemToFavorite: TitleTypes.Doc | AuthorTypes.Doc | string
) => {
  if (favoriteType === "book") {
    console.log("Favoriting a book");

    if (itemToFavorite) {
      if (inputType === "add") {
        dispatch(addBook({ book: itemToFavorite }));
      } else if (inputType === "remove") {
        dispatch(removeBook({ book: itemToFavorite }));
      }
    }
  } else if (favoriteType === "author") {
    console.log("Favoriting an author");
    if (typeof itemToFavorite !== "string") {
      if (
        itemToFavorite &&
        itemToFavorite.author_name &&
        itemToFavorite.author_name.length > 0
      ) {
        if (inputType === "add") {
          const favoriteAuthorName = itemToFavorite.author_name[0];
          console.log(favoriteAuthorName);
          dispatch(addAuthor({ authorName: favoriteAuthorName }));
        }
      }
    } else if (typeof itemToFavorite === "string") {
      dispatch(removeAuthor({ authorName: itemToFavorite }));
    }
  }
};

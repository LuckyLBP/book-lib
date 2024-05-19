import { Doc } from "./titleTypes";
import * as AuthorTypes from "./authorTypes";
import * as TitleTypes from "./titleTypes";

export type SearchState = {
    result: AuthorState | BooksState;
}

export type AuthorState = {
 authors: string[];
}

export type BooksState = {
    books: Doc[];
}

export type TitleSearch = {
    type: 'title';
    title: TitleTypes.Doc;
}

export type AuthorSearch = {
    type: 'author';
    author: AuthorTypes.Doc;
}

export type SearchResultType = {
    author: []
    title: []
}

export interface ResultCardProps {
    item: TitleTypes.Doc | AuthorTypes.Doc;
    inputType: string;
  }
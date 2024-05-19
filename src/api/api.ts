import axios from "axios";

const authorApi = "https://openlibrary.org/search.json";
const titleApi = "https://openlibrary.org/search.json";

export const searchBooksByAuthor = async (authorInput: string) => {
  try {
    const response = await axios.get(`${authorApi}?author=${authorInput}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchBooksByTitle = async (titleInput: string) => {
  try {
    const response = await axios.get(`${titleApi}?title=${titleInput}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

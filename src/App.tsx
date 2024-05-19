import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Search from "./components/Search/Search";
import BookModal from "./components/Modal/Modal";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Read from "./pages/Read";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Nav />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/books" element={<Books />} />
              <Route path="/search" element={<Search />} />
              <Route path="/read" element={<Read />} />
            </Routes>
          </div>
        </div>
        <BookModal />
      </Router>
    </Provider>
  );
};

export default App;

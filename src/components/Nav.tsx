import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="hover:underline">
            Search
          </Link>
        </li>
        <li>
          <Link to="/books" className="hover:underline">
            Favorite Books
          </Link>
        </li>
        <li>
          <Link to="/authors" className="hover:underline">
            Favorite Authors
          </Link>
        </li>
        <li>
          <Link to="/read" className="hover:underline">
            Books I've Read
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

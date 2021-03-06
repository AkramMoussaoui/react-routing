import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/job">Job</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

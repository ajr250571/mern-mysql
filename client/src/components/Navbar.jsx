import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">React Mysql</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

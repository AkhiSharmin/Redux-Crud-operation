import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mt-10">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          <Link to="/adduser" className="btn btn-ghost normal-case text-xl">
            Add User
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/LxdYVZQ/sharmin-akter-modified.png" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;

import { useState } from "react";
import Navber from "../../components/Navber/Navber";
import { addUser } from "./useReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name, phone, website })
    );
    navigate("/");
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold border-b-4 inline">Add New user</h2>
      <Navber></Navber>
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Website Name</span>
              </label>
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
                placeholder="Website Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Add User</span>
              </label>
              <input
                type="submit"
                className="btn btn-warning"
                value="Add User"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

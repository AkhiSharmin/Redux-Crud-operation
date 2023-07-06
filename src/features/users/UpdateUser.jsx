import { useState } from "react";
import Navber from "../../components/Navber/Navber";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./useReducer";

const UpdateUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((user) => user.id == id);

  const { name, phone, website } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uphone, setPhone] = useState(phone);
  const [uwebsite, setWebsite] = useState(website);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id,
        name: uname,
        phone: uphone,
        website: uwebsite,
      })
    );
    navigate("/");
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold border-b-4 inline">Update user</h2>
      <Navber></Navber>
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleUpdate}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={uname}
                required
                placeholder="Name"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={uphone}
                placeholder="Phone"
                className="input input-bordered"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Website Name</span>
              </label>
              <input
                type="text"
                name="website"
                defaultValue={uwebsite}
                placeholder="Website Name"
                className="input input-bordered"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Update User</span>
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

export default UpdateUser;

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./useReducer";

const ShowUsers = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-2xl">
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <Link to={`/updateuser/${user.id}`}>
                  <button className="btn btn-sm mr-4 bg-[#537b35]">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm bg-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;

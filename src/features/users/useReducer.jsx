import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../assets/Data";

const usersSlice = createSlice({
  name: "users",
  initialState: userList,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, phone, website } = action.payload;

      const updUsr = state.find((user) => user.id == id);

      if (updUsr) {
        updUsr.name = name;
        updUsr.phone = phone;
        updUsr.website = website;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updUsr = state.find((user) => user.id == id);
      if (updUsr) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

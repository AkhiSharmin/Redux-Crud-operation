import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddUser from "./features/users/AddUser.jsx";
import UpdateUser from "./features/users/UpdateUser.jsx";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/users/useReducer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "adduser",
    element: <AddUser></AddUser>,
  },
  {
    path: "updateuser/:id",
    element: <UpdateUser></UpdateUser>,
  },
]);

const store = configureStore({
  reducer: {
    users: useReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

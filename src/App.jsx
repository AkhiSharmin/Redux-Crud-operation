import "./App.css";
import ShowUsers from "./features/users/ShowUsers";
import Navber from "./components/Navber/Navber";
function App() {
  return (
    <>
      <h2 className="text-4xl font-bold border-b-4 inline">
        Our Crud Operation
      </h2>
      <Navber></Navber>
      <ShowUsers></ShowUsers>
    </>
  );
}

export default App;

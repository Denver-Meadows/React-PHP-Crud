import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <h2>React CRUD using PHP and MySQL</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="/create">Create User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/user/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

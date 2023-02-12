import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Profile from "./pages/Profile";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>

    </div>
  );
}

export default App;

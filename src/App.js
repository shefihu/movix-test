import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="login" index element={<Login />} />
        <Route path="home" index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

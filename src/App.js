import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="login" index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

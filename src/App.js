import { Route, Routes,Navigate } from "react-router-dom";
import "./App.css";
import Chats from "./Components/Chats";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <>
    <AppContext>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/signup" element={<SignUp />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
      {/* <Alert/> */}
    </AppContext>
    </>
  );
}

export default App;

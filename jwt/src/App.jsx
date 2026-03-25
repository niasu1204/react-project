import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Items from "./pages/Items";
import ChatApp from "./ChatApp";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 16px" }}>
        <Routes>
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
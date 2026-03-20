import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/notes/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
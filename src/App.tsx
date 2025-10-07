import "./globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pitch from "./pages/aligarh/Pitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pitch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

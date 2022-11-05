import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

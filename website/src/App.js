import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Services } from "./Pages/Services";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";


function App() {
  return (
    <home>
      <Navbar />
      <home />
      {/* <Navbar title="Textutils2" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
     
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </home>
  );
}

export default App;

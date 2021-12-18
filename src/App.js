import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import Product from "./Product";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Product />} />
        <Route path="/pricing" element={<Product />} />
        <Route path="/contact" element={<Product />} />
        <Route path="/signup" element={<Product />} />
        <Route path="/login" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

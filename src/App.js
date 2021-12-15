import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import homepage from "./homepage";
import product from "./product";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<homepage />} />
        <Route path="/product" element={<product />} />
        <Route path="/services" element={<product />} />
        <Route path="/pricing" element={<product />} />
        <Route path="/contact" element={<product />} />
        <Route path="/signup" element={<product />} />
        <Route path="/login" element={<product />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

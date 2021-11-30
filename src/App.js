import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Features from "./components/Features";
import Serve from "./components/Serve";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Features />
      <Serve />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

import Content from "./components/Content";
import Features from "./components/Features";
import Serve from "./components/Serve";
import FAQ from "./components/FAQ";

function homepage() {
  return (
    <div>
      <Content />
      <Features />
      <Serve />
      <FAQ />
    </div>
  );
}

export default homepage;

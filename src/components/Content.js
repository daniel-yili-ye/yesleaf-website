import coffeeshop from "../assets/coffeeshop.jpg";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="lg:flex container mx-auto p-6 items-center">
      <div className="flex flex-col items-start lg:mr-6 xl:mr-24">
        <p className="text-5xl font-bold">
          Simplify Your Business Finances & Operations
        </p>
        <p className="text-xl my-4">
          The all-in-one accounting software solution for your small business
          needs.
        </p>
        <Link
          to="/signup"
          className="text-xl leading-none px-4 py-2 lg:my-4 mb-4 rounded bg-blue-500 text-white hover:bg-blue-700"
        >
          Get Started Now!
        </Link>
      </div>
      <img
        src={coffeeshop}
        alt="coffee shop"
        className="rounded my-2 lg:my-0 lg:ml-2 lg:max-w-2xl"
      />
    </div>
  );
}

export default Content;

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={logo} alt="logo" className="h-5" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-200 hover:border-blue-200">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow">
          <Link
            to="/product"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Product
          </Link>
          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Contact
          </Link>
        </div>
        <div>
          <a
            href="/signup"
            className="block lg:inline-block px-4 py-2 leading-none border rounded text-blue-500 border-blue-500 hover:border-transparent hover:text-white hover:bg-blue-500 mt-4 lg:mt-0 lg:mr-4 mr-0"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="block lg:inline-block px-4 py-2 leading-none border rounded text-blue-500 border-blue-500 hover:border-transparent hover:text-white hover:bg-blue-500 mt-4 lg:mt-0"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

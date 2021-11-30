import logo from "../logo.svg";

function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="logo" className="h-5" />
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
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Product
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Services
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200 mr-4"
          >
            Pricing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-200"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block lg:inline-block px-4 py-2 leading-none border rounded text-blue-500 border-blue-500 hover:border-transparent hover:text-white hover:bg-blue-500 mt-4 lg:mt-0 lg:mr-4 mr-0"
          >
            Sign Up
          </a>
          <a
            href="#"
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

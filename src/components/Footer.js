import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="sm:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Contact Us</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Products</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Accounting Software
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Membership
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Donation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Sales & Purchasing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  POS & Hardware
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Inventory
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Payroll
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Case Management
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Services</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Accounting Consulting
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  POS Installation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Legal</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-blue-500 hover:text-blue-500"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:px-4 mt-12 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 sm:flex sm:justify-center xl:block">
            <img src={logo} alt="logo" className="h-10" />
          </div>
        </div>

        <div className="sm:flex sm:justify-center sm:flex-wrap mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="">
            © 2021 Yesleaf Business Solutions Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

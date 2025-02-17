import { useState } from "react";
import logo from "../assets/img/image.png";
import { Link } from "react-router-dom";

import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";


export const Title = () => (
  <a href="/">
    <img src={logo} alt="logo" className="w-24 p-2" />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const cartItems = useSelector((Store) => Store.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-100  font-[Poppins] py-2 shadow-xl">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-black ">
                <img src={logo} alt="logo" className="w-24 p-2" />
              </Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
              <Link
                to="/"
                className="text-black  hover:text-amber-600 px-3 py-2 rounded-md text-md font-medium transition-transform duration-500 transform hover:scale-[1.25]"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black  hover:text-amber-600  px-3 py-2 rounded-md text-md font-medium transition-transform duration-500 transform hover:scale-[1.25]"
              >
                About
              </Link>
              <Link
                to="/cart"
                className="text-black  hover:text-amber-600  px-3 py-2 rounded-md text-md font-medium transition-transform duration-500 transform hover:scale-[1.25]"
              >
                Cart - {cartItems.length} 🛒
              </Link>
              <div className="flex items-center gap-6">
                <button className="bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  Sign in{" "}
                  <span className="text-sm pl-3">
                    {" "}
                    {isOnline ? "🟢" : "🔴"}
                  </span>
                </button>
                <div className="flex justify-center items-center h-20">
                  {/* <h2 className="text-2xl"> {isOnline ? "✅" : "🔴"} </h2> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-black hover:bg-orange-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:bg-orange-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="text-black hover:bg-orange-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Cart - {cartItems.length} 🛒
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

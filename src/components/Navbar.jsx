import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CartSidebar from "./Cart";
import useAuthStore from "../store/authStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuthStore();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const location = useLocation(); // Get the current route location
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isLogin");

    // Set isLoggedIn to false in the auth store
    setIsLoggedIn(false);

    // Optionally, redirect to home page
    window.location.href = "/";
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path
      ? "text-orange-500 font-bold"
      : "text-gray-700 hover:text-orange-500";
  };

  return (
    <div className="font-poppins ">
      <div className="w-full fixed top-0 left-0 bg-white z-40">
        {/* Top bar */}
        <div className="w-full bg-[#2b2b2b] text-white">
          <div className="container mx-auto flex justify-between items-center py-2 text-sm px-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <i className="fas fa-phone-alt bg-orange-500 text-white p-1 rounded-full"></i>
                <span className="ml-2 hidden sm:inline">
                  Call Us 24/7 +251 938-022-222
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <i className="fas fa-envelope bg-orange-500 text-white p-1 rounded-full"></i>
                <span className="ml-2">Email info@dodai.co</span>
              </div>
              <div className="flex space-x-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-vk"></i>
                <i className="fab fa-telegram-plane"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="w-full container mx-auto px-4 relative">
          <div className="flex justify-start md:justify-between lg:justify-between gap-2 items-center py-4">
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden order-first">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center order-2 md:order-first">
              <div>
                <img src="/dodai.png" alt="Logo" className="mr-3" />
                <p className="text-sm text-gray-500">E-mobility for Africa</p>
              </div>
            </div>

            {/* Navigation Links - Always visible on desktop, toggleable on mobile */}
            <nav
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:relative left-0 right-0 top-full md:top-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-20`}
            >
              <a href="/" className={isActive("/")}>
                HOME
              </a>
              <a href="/About" className={isActive("/About")}>
                ABOUT
              </a>
              <a href="/Shop" className={isActive("/Shop")}>
                SHOP
              </a>
              <a href="/News" className={isActive("/News")}>
                NEWS
              </a>
              <a href="/Job" className={isActive("/Job")}>
                CAREERS
              </a>
              <a href="/Contact" className={isActive("/Contact")}>
                CONTACT US
              </a>
              <div className="flex items-center ml-6">
                {!isLoggedIn ? (
                  <a
                    href="/Auth"
                    className="hover:text-gray-700 p-4 rounded text-white bg-orange-500 md:py-0"
                  >
                    Sign in
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-orange-500 py-2 md:py-0"
                  >
                    logout
                  </a>
                )}
              </div>
            </nav>

            {/* Cart and Buy Button - Always visible on desktop */}
            <div className="hidden md:flex items-center space-x-6 order-last">
              <CartSidebar />
              <a
                href="/product"
                className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                Buy a Scooter
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* Mobile Cart and Buy Button */}
          <div className="md:hidden flex justify-between items-center py-4">
            <CartSidebar />
            <a
              href="#"
              className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
            >
              Buy
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

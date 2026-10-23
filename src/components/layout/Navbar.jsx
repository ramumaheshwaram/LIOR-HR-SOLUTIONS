import "../../index.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`w-full bg-primary sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-25 w-full max-w-[1400px] items-center justify-between px-4">
        {/* Logo */}
        <div className="shrink-0 max-md:w-50">
          <NavLink to="/">
            <img
              src="/images/Liora-hr-solutions-logo.png"
              alt="Liora HR Solutions"
              className="h-20 w-80 object-contain"
            />
          </NavLink>
        </div>
        {/* Desktop Navigation */}
        <div className="">
          <nav aria-label="Main Navigation" className="hidden lg:block">
            <ul className="flex justify-end items-center gap-8 focus:outline-2 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-secondary text-lg transition-all duration-500 hover:underline underline-offset-8 decoration-2 ${
                      isActive ? "underline" : "no-underline"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `text-secondary text-lg transition-all duration-500 hover:underline underline-offset-8 decoration-2 ${
                      isActive ? "underline" : "no-underline"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-secondary text-lg transition-all duration-500 hover:underline underline-offset-8 decoration-2 ${
                      isActive ? "underline" : "no-underline"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Hamburger Button: Tablet and Mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="text-3xl text-secondary lg:hidden bg-primary px-3"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Navigation */}
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className={`absolute left-0 right-0 top-20 z-50 w-full bg-primary border-t border-white/20 transition-all duration-500 ease-in lg:hidden ${
              isMenuOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-full opacity-0 invisible pointer-events-none"
            }`}
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen ? "" : undefined}
          >
            <ul className="flex flex-col px-6 py-2">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="block py-4 text-base text-secondary transition-colors duration-200 hover:text-gray-300"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  onClick={closeMenu}
                  className="block py-4 text-base text-secondary transition-colors duration-200 hover:text-gray-300"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="block py-4 text-base text-secondary transition-colors duration-200 hover:text-gray-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

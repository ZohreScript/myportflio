import { useState, useEffect } from "react";

const ResponsiveMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileScreen, setMobileScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setMobileScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="md:flex md:items-center
     md:justify-between">
      <div className="flex items-center
       justify-between md:w-auto">
        <ul className={`flex
         ${isMobileScreen ? "hidden" : 
         "visible"} gap-4`}>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isMobileScreen && (
        <div className="md:hidden">
       
               <span
            onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
                       <i className="ri-menu-line"></i>
</span>
         
          {isMenuOpen && (
            <div className="mt-2">
              <ul className="border-t border-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default ResponsiveMenu;
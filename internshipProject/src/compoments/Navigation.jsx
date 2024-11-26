// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react"; 

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Schemes", path: "/schemes" },
//     { name: "Courses", path: "/courses" },
//     { name: "Events", path: "/events" },
//     { name: "Contact", path: "/contact" },
//     { name: "Login", path: "/Login" },
//     { name: "Profile", path: "/Profile" },
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-red-600 text-white">
//       <div className="container mx-auto px-4 flex justify-between items-center">
      

//         {/* Hamburger Icon for Mobile */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </button>

//         {/* Navigation Links  */}
//         <ul
//           className={`md:flex md:items-center md:space-x-6 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           {navItems.map((item) => (
//             <li key={item.name} className="py-2 md:py-0">
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-300 font-bold"
//                     : "hover:text-blue-200"
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Import ChevronDown for dropdown icon

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Schemes", path: "/schemes" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Profile", path: "/profile" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-red-600 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="py-2 md:py-0">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-blue-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Dashboard Link with Dropdown */}
          <li className="relative py-2 md:py-0">
            <button
              className="flex items-center hover:text-blue-200 focus:outline-none"
              onClick={toggleDropdown}
            >
              Dashboard <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute bg-white text-black shadow-lg rounded mt-2 z-10">
                <li className="hover:bg-gray-200">
                  <NavLink
                    to="/dashboard/add-center"
                    className="block px-4 py-2"
                  >
                    Add Centers
                  </NavLink>
                </li>
                <li className="hover:bg-gray-200">
                  <NavLink
                    to="/dashboard/centers-list"
                    className="block px-4 py-2"
                  >
                    Centers List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

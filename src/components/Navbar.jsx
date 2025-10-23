// // Navbar.jsx
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
//       {/* Logo */}
//       <div className="text-2xl font-bold text-sky-500">TRI RATH</div>

//       {/* Menu (Desktop) */}
//       <ul className="hidden md:flex space-x-8">
//         <li className="hover:text-sky-500 cursor-pointer">Home</li>
//         <li className="hover:text-sky-500 cursor-pointer">About</li>
//         <li className="hover:text-sky-500 cursor-pointer">Experience</li>
//         <li className="hover:text-sky-500 cursor-pointer">Innovation</li>
//         <li className="hover:text-sky-500 cursor-pointer">Travel</li>
//         <li className="hover:text-sky-500 cursor-pointer">Contact</li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="focus:outline-none"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu (Dropdown) */}
//       {isOpen && (
//         <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center md:hidden space-y-4 py-4">
//           <li className="hover:text-sky-500 cursor-pointer">Home</li>
//           <li className="hover:text-sky-500 cursor-pointer">About</li>
//           <li className="hover:text-sky-500 cursor-pointer">Experience</li>
//           <li className="hover:text-sky-500 cursor-pointer">Innovation</li>
//           <li className="hover:text-sky-500 cursor-pointer">Travel</li>
//           <li className="hover:text-sky-500 cursor-pointer">Contact</li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-sky-500">TRI RATH</div>

      {/* Menu (Desktop) */}
      <ul className="hidden md:flex space-x-8">
        <li className="hover:text-sky-500 cursor-pointer">Home</li>
        <li className="hover:text-sky-500 cursor-pointer">About</li>
        <li className="hover:text-sky-500 cursor-pointer">Experience</li>
        <li className="hover:text-sky-500 cursor-pointer">Innovation</li>
        <li className="hover:text-sky-500 cursor-pointer">Travel</li>
        <li className="hover:text-sky-500 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center md:hidden space-y-4 py-4">
          <li className="hover:text-sky-500 cursor-pointer">Home</li>
          <li className="hover:text-sky-500 cursor-pointer">About</li>
          <li className="hover:text-sky-500 cursor-pointer">Experience</li>
          <li className="hover:text-sky-500 cursor-pointer">Innovation</li>
          <li className="hover:text-sky-500 cursor-pointer">Travel</li>
          <li className="hover:text-sky-500 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

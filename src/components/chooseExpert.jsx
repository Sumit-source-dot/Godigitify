// import React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const ChooseExpert = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('/');
//   const mobileMenuRef = useRef(null);
//   const location = useLocation();

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Update active link and close menu on route change
//   useEffect(() => {
//     setActiveLink(location.pathname);
//     setIsOpen(false);
//   }, [location]);

//   const navLinks = [
//     { path: '/', name: 'Home' },
//     { path: '/services', name: 'Services' },
//     { path: '/about', name: 'About Us' },
//     { path: '/contact', name: 'Contact' },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link
//               to="/"
//               className="flex-shrink-0 flex items-center"
//               onClick={() => setActiveLink('/')}
//             >
//               <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//               </svg>
//               <span className="ml-2 text-xl font-bold text-gray-900">ServicePro</span>
//             </Link>
//             <div className="hidden md:ml-8 md:flex md:space-x-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`${
//                     activeLink === link.path
//                       ? 'border-blue-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:text-gray-700'
//                   } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium transition-colors duration-200`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right side buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/login"
//               className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
//             >
//               Login
//             </Link>
//             <Link
//               to="/get-quote"
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
//             >
//               Get a Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//             >
//               {!isOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         ref={mobileMenuRef}
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'opacity-100 h-auto visible' : 'opacity-0 h-0 invisible'
//         }`}
//       >
//         <div className="pt-2 pb-4 space-y-1 bg-white shadow-lg">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`${
//                 activeLink === link.path
//                   ? 'bg-blue-50 border-blue-500 text-blue-700'
//                   : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800'
//               } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="mt-4 pt-4 border-t border-gray-200 px-4 space-y-2">
//             <Link
//               to="/login"
//               className="block px-4 py-2 text-base font-medium text-center text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors duration-200"
//             >
//               Login
//             </Link>
//             <Link
//               to="/get-quote"
//               className="block px-4 py-2 text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow transition-colors duration-200"
//             >
//               Get a Quote
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default ChooseExpert;
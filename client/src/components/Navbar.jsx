import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import '../styles/NavBar.css'; // Create a CSS file for your navbar styles
import '../index.css'
import FeaturedTours from "./FeaturedTours";

export default function NavBar(props) {

  const ToFeaturedTours = () =>{
    navigate
  }
  return (
    <nav  className="bg-white border-gray-200 dark:bg-gray-900">
    <div  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
        <Link className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-96" to="/">
        Flights.io
      </Link>
      <button data-collapse-toggle="navbar-default" type="button"  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span  className="sr-only">Open main menu</span>
          <svg  className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div  className="hidden  w-full md:block md:w-auto" id="navbar-default">
        <ul  className="font-medium flex flex-col justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {!isAuthenticated() ? (
            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to="/register"
              >
                Register
              </Link>
            </li>
          ) : null}
          
          {!isAuthenticated() ? (
            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
          ) : null}
  
          

         
            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
          
            {isAuthenticated() ? (
            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          ) : null}
          
            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to={ToFeaturedTours}
              >
                Tours
              </Link>
            </li>
        

          
  
           {isAuthenticated() ? (
            <li className="nav-item">
              <a
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                onClick={props.logoutUser}
                style={{cursor:"pointer"}}
              >
                Logout
              </a>
            </li>
          ) : null}
  
        </ul>
      </div>
    </div>
  </nav>
  
);
}


/*
import React, { useState } from 'react';

 function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow my-3 rounded-lg shadow-xl">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a className="text-xl font-bold text-blue-600 mr-96" href="#">
                Flights.io
            </a>
            {/* Mobile menu button 
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center text-blue-600 p-3"
                onClick={toggleMenu}
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            {/* Desktop menu 
            <ul
              className={`lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
                menuOpen ? '' : 'hidden'
              }`}
                >
              <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
              <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </li>
              <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
                <li className="text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </li>
			        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
                <li className="text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </li>
			            <li><a className="text-sm text-gray-400 hover:text-gray-500 mr-12" href="#">Contact</a></li>
            </ul>
            {/* Sign-in and Sign-up buttons 
            <a
              className="hidden ml-12 lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign In
            </a>
            <a
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
      {/* Mobile menu 
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        {/* Menu items 
        <ul className="bg-white py-2">
          <li>
            <a className="block px-4 py-2 text-sm text-gray-400 hover:text-gray-500" href="#">
              Home
            </a>
          </li>
          {/* Add more menu items here 
        </ul>
      </div>
    </div>
  );
}

export default NavBar; */

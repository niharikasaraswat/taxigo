import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} className="bg-black px-8 py-4" alt="" />
        <ul className="hidden md:flex gap-7 text-slate-950">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Ride with us
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            Corporates & Events
          </a>
          <a href="#Partner" className="cursor-pointer hover:text-gray-400">
            Partner with us
          </a>
          <a href="#Blogs" className="cursor-pointer hover:text-gray-400">
            Blogs & Intineraries
          </a>
        </ul>
        <button className="hidden md:block bg-green-500 px-10 py-4 rounded-full border-black border-4 font-bold text-lg ">
          Book Now
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
        ></img>
      </div>
      {/* ------Mobile - Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href=""
            className="px-4 py2 rounded-full inline-block"
          >
            {" "}
            Ride with us
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href=""
            className="px-4 py2 rounded-full inline-block"
          >
            Corporates & Events
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href=""
            className="px-4 py2 rounded-full inline-block"
          >
            {" "}
            Partner with us
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href=""
            className="px-4 py2 rounded-full inline-block"
          >
            {" "}
            Blogs & Intineraries
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

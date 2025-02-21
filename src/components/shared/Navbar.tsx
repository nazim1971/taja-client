"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { Input } from "../ui/input";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Initially visible
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [isAtTop, setIsAtTop] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true); // User is at the top, larger image size
      } else {
        setIsAtTop(false); // User scrolled down, smaller image size
      }

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const whatsappNumber = "+8801815533583";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div>
       <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      {/* Navbar Container */}
      <div
        className={`fixed max-w-[1200px] mx-auto top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-TPrimary text-center text-white p-2">
          <p>
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:{" "}
            <Link target="blank" href={whatsappLink} className="underline">
              +8801815533583
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-3 p-3 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-300 dark:border-gray-700  gap-5">
          <div className="flex justify-start items-center">
            <Input className="max-w-[300px] hidden lg:block" />
            <button
              onClick={toggleSidebar}
              className="text-2xl text-gray-500 dark:text-teal-400 hover:text-teal-700 transition lg:hidden"
            >
              <FiMenu />
            </button>
          </div>

          <div className="flex justify-center items-center ">
            <Image
             height={isAtTop ? 80 : 60} 
              width={isAtTop ? 80 : 60} 
              className="rounded-full transition-all duration-300"
              src={
                "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1739101285/455247063_122106278150462526_1208095306293753335_n_pvs3ka.jpg"
              }
              alt="website logo"
            />
          </div>

          <div className=" flex justify-end items-center">
            <ShoppingCart /> {/* Third column: Shopping Cart */}
          </div>
        </div>

        {/* Category */}
        <div className="p-3 lg:flex justify-center flex-wrap lg:gap-10  bg-gray-100 hidden ">
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    OFFER
  </p>
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    Ramadan Corner
  </p>
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    Mustard Oil
  </p>
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    Ghee (ঘি)
  </p>
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    খেজুর গুড়
  </p>
  <p className="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
    Masala
  </p>
</div>

      </div>
    </div>
  );
};

export default Navbar;

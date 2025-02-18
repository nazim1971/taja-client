"use client"
import { FiX } from "react-icons/fi";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed top-16 left-0 z-[500] w-64 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-5">
        <button onClick={closeSidebar} className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition">
          <FiX className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-start gap-5 p-5">
       
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
  );
};

export default Sidebar;

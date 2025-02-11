import Image from "next/image";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Input } from "../ui/input";
import { FaRegBell } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { RiMenu2Fill } from "react-icons/ri";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";


const Navbar = () => {
    return (
        <>
       <div className="hidden lg:block">
       <div className="py-2 flex items-center justify-between px-10 max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2">
            <MdOutlinePhoneInTalk />
            <p>We are available 24/7, Need help?</p>
            <span className="text-red-500">01815533583</span>
            </div>
            <div className="flex">
                <p className="px-2 border-black border-r-2">About Us</p>
                <p className="px-2 border-black border-r-2">Contact Us</p>
                <p className="px-2 border-black border-r-2">My Account</p>
                <p className="px-2 ">Login</p>
            </div>
        </div>
       </div>

        <div className="bg-[#3E7B27] md:sticky top-0 fixed w-full z-50">
        <div className="p-4 flex items-center justify-between md:px-10 max-w-[1200px] mx-auto ">
            <Image width={60} height={60} className="rounded-full hidden md:block " src={'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1739101285/455247063_122106278150462526_1208095306293753335_n_pvs3ka.jpg'} alt="Website Logo" />
            <div className="md:w-[70%] w-full relative">
            <Input  className="bg-white text-black " placeholder="Search for products (e.g fish, apple, oli"/>
            <BiSearch className="absolute right-2 top-3"/>
            </div>

            <div className=" gap-2 text-white font-semibold hidden md:flex">
            <FaRegBell />
            <BsCart2  />
            <FiUser />
            </div>
        </div>
        </div>

        {/* Bottom bar for small device */}
        <div className="bg-[#3E7B27] fixed bottom-0 w-full md:hidden block">
            <div className=" text-white font-semibold md:hidden flex justify-between p-4 text-2xl">
            <RiMenu2Fill />
            <FaRegBell />
            <BsCart2  />
            <FiUser />
            </div>
        </div>

        <div className="">
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        </div>
        </>
    );
};

export default Navbar;
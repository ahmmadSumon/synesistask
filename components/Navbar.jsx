"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNotification } from "../app/context/NotificationContext";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import BellCounter from "./BellCounter";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 const { notificationCount } = useNotification(); 

console.log(notificationCount); // Check if this prints the correct count value

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[120px] mx-1 bg-white md:ml-[69px] md:mr-[45px] max-w-[1884px] mx-auto flex justify-between items-center border-b-[1px] border-[#DBD7D7] transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo Section */}
      <div className="relative top-[20px] md:-left-[40px] gap-0">
        <Link href="/">
          <Image src="/images/logo.png" alt="synesis logo" width={300} height={100} />
        </Link>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden lg:flex justify-center items-center">
        <BellCounter />
        <div className="flex gap-[12px]">
          <div className="px-[44.75px] py-[8px] text-sm text-black rounded-xl border-[1px] border-[#767676] bg-[#E3E3E3]">
            Sign In
          </div>
          <div className="px-[44.75px] py-[8px] text-sm text-white rounded-xl bg-[#2C2C2C]">
            Register
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex relative justify-center items-center gap-5">
        <Sheet>
          <Image src="/images/Icon.png" alt="notification icon" width={21.33} height={26.67} 
          
          />
          {notificationCount > 0 && (
          <span className="absolute -top-2 left-4 flex items-center justify-center w-5 h-5  text-black font-bold text-2xl  rounded-full">
            {notificationCount}
          </span>
        )}
          <SheetTrigger asChild>
            <button className="p-2 h-[40px] w-[40px] text-black rounded-md focus:outline-none">
              <GiHamburgerMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Explore our pages and features.</SheetDescription>
            </SheetHeader>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-4 mt-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-lg text-gray-800 hover:text-black">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-lg text-gray-800 hover:text-black">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/services" className="text-lg text-gray-800 hover:text-black">
                      Services
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="text-lg text-gray-800 hover:text-black">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="mt-6">
              <div className="flex gap-4">
                <button className="w-full px-4 py-2 text-sm text-black rounded-xl border-[1px] border-[#767676] bg-[#E3E3E3]">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 text-sm text-white rounded-xl bg-[#2C2C2C]">
                  Register
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

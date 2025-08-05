import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
     sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Background" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-8 flex item-center justify-between z-50">
        <a href="/#top">
          <Image
            src={assets.logo_nits}
            className="w-28 cursor-pointer"
            alt="Great Stack Logo"
          />
        </a>
        <ul className="hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#service">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button>
            <Image
              src={assets.moon_icon}
              alt="Great Stack Logo"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 rounded-full px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="Send Icon" />
          </a>
          <button className="block md:hidden ml-3 cursor-pointer" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Great Stack Logo"
              className="w-6"
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transaction duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              className="w-5 cursor-pointer"
              alt=""
            />
          </div>

          <li>
            <a className="font-Ovo" href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu} >
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#service" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact"  onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

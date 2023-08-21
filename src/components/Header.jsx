import { motion } from "framer-motion";
import { Mobile_Menu } from "./Mobile_Menu";
import { useState, useEffect } from "react";

export const Header = () => {
  const [desktopMenu, setDesktopMenu] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(null)
  const toogleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    desktopMenu.classList.toggle('hidden')
    desktopMenu.classList.toggle('flex')
  }
  useEffect(() => {
    setDesktopMenu(document.getElementById("desktop-menu"))
    setMobileMenu(document.getElementById("mobile-menu"))
  })
  return (
    <>
      <header className=" text-white sticky top-0 z-10 backdrop-blur-sm">
        <section id="desktop-menu" className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <motion.h1
            className="text-5xl font-medium"
            animate={{
              scale: [1, 0.95, 1.05],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <a href="#hero">❤️Waifu</a>
          </motion.h1>
          <div>
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer"
              onClick={(toogleMobileMenu)}
            >
              &#9776;
            </button>
          </div>
          <nav className="hidden md:block space-x-8 text-3xl" aria-label="main">
            <a href="#waifu" className="hover:text-rose-600">
              Waifu
            </a>
            <a href="#quote" className="hover:text-rose-600">
              Quotes
            </a>
            <a href="#send" className="hover:text-rose-600">
              Send a letter
            </a>
            <a href="#footer" className="hover:text-rose-600">
              Legal
            </a>
          </nav>
        </section>
        <div className="absolute top-0 bg-transparent w-full text-5xl flex flex-col justify-center backdrop-blur-md h-full pointer-events-none"></div >
      </header>
      <Mobile_Menu onClick={toogleMobileMenu} />
    </>
  );
};

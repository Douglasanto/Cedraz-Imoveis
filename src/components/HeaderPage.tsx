"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/Marca Principal branca1.png";
import Link from "next/link";

export function HeaderPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const navLinks = [
    {
      id: "Home",
      title: "Home",
      url: "/",
    },
    {
      id: "About",
      title: "Venda Conosco",
      url: "#About",
    },
    {
      id: "Result",
      title: "Resultados",
      url: "#Result",
    },
    {
      id: "Imoveis",
      title: "Quem Somos",
      url: "#Imoveis",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header className="absolute w-full tracking-body z-40 top-0">
        <nav className="px-4 sm:px-7 2xl:px-10 pb-2 xl:pb-4 2xl:pb-6 mt-6 xl:mt-8 2xl:mt-10 flex items-center justify-around">
          <Image className="w-[150px] h-[150px]" src={Logo} alt="Cedraz" />
          <div className="hidden sm:flex items-start text-start gap-x-20">
            <div className="flex items-start gap-x-4 ">
              {navLinks.map((navLink) => (
                <Link
                  href={navLink.url}
                  key={navLink.id}
                  className="hover:text-black list-none font-semibold cursor-pointer ease-expo transition-all duration-500 group relative text-xl text-white"
                >
                  {navLink.title}
                  <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <button
        aria-label="Menu Navigation Button"
        aria-expanded={menuVisible}
        aria-controls="menu"
        className={`z-[999] flex h-16 w-16 2xl:w-20 2xl:h-20 flex-col items-center justify-center rounded-full bg-[#7f7f7f] ease-expo hover:scale-90 fixed left-6 top-6 sm:left-8 sm:top-8 transition-all duration-1000 group ${
          scrolled ? "scale-100" : "scale-0"
        }`}
        onClick={toggleMenu}
      >
        <span
          className={`absolute h-[2px] w-7 2xl:w-9 rounded-full bg-black transition-all duration-300 ease-in-out-circ ${
            menuVisible ? "translate-y-0 rotate-45" : "-translate-y-1 -rotate-0"
          }`}
        ></span>
        <span
          className={`absolute h-[2px] w-7 2xl:w-9 rounded-full bg-black transition-all duration-300 ease-in-out-circ ${
            menuVisible ? "translate-y-0 -rotate-45" : "translate-y-1 rotate-0"
          }`}
        ></span>
      </button>
      {menuVisible && (
        <>
          <div
            className="z-40 h-screen w-screen fixed top-0 left-0 bg-BGWhite cursor-pointer opacity-[0.4]"
            onClick={toggleMenu}
          ></div>
          <div className="fixed z-50 flex h-svh w-screen pointer-events-none ease-expo">
            <div className="relative z-20 m-2 flex h-[300px] max-w-sm 2xl:max-w-xl 3xl:max-w-3xl flex-col justify-between rounded-md py-10 overflow-hidden bg-BGWhite pointer-events-auto w-[inherit] opacity-1 ">
              <nav className="flex flex-col justify-center px-8 sm:px-14 h-full text-xl 2xl:px-20 font-bold text-black relative leading-[140%]">
                {navLinks.map((nav) => (
                  <div
                    key={nav.id}
                    className="group flex w-fit cursor-pointer items-center gap-x-4"
                  >
                    <span className="invisible inline-block h-3 w-3 rounded-full bg-black opacity-0 scale-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:scale-100 ease-expo duration-800"></span>
                    <div className="w-fit overflow-y-clip">
                      <div className="transform-none">
                        <a
                          className="group-hover:translate-x-6 inline-block duration-700 ease expo transition-transform"
                          href={`#${nav.id}`}
                        >
                          {nav.title}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/Marca Principal branca1.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import Link from "next/link";

export function Header() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navLinks = [
    {
      id: "Home",
      title: "Home",
    },
    {
      id: "About",
      title: "Venda Conosco",
    },
    {
      id: "Result",
      title: "Resultados",
    },
    {
      id: "Imoveis",
      title: "Quem Somos",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full font-myriad">
        <nav
          className={`w-full flex items-center py-1 px-6 fixed top-0 z-20 shadow-bar m-0 ${
            scrolling ? "bg-black opacity-80" : ""
          }`}
        >
          <div className="w-full flex justify-around items-center max-w-7xl mx-auto">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <Image
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                src={Logo}
                alt="Cedraz"
              />
            </Link>
            <ul className="list-none hidden lg:flex flex-row gap-10">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-gray-300" : "text-white"
                  } hover:text-primary text-[25px] cursor-pointer transition-easy LinkNav`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex flex-1 justify-end items-center pr-4">
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer mr-[8px]"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } flex p-6 primary-gradient absolute top-20 right 0 mx-4 my-2 min-w-[140px] rounded-xl`}
              >
                <ul className="list-none flex justify-center items-start flex-col gap-8 transition">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-secondary" : "text-white"
                      } hover:text-secondary text-[21px] font-semibold cursor-pointer transition-easy`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

"use client";
import { GiMummyHead } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { LiaHandPointUp } from "react-icons/lia";
import Link from "next/link";
import { useState } from "react";
import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar bg-neutral fixed z-[999]">
        <div className="container mx-auto flex justify-between px-4">
          <Link
            href="/"
            className="flex group items-center gap-2 text-primary font-bold text-xl"
          >
            <GiMummyHead className="group-hover:rotate-[25deg] transition-all" />
            <span className="group-hover:scale-105 transition-all">
              MUMI
              <span className="text-accent-content">NIME</span>
            </span>
          </Link>
          {/* MOBILE VIEW */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="btn btn-outline btn-primary btn-sm"
            >
              <LiaHandPointUp
                className={`text-lg text-center self-center ${isOpen ? "rotate-0" : "rotate-[900deg]"} transition-all duration-700`}
              />
            </button>
          </div>
          {/* DESKTOP VIEW*/}
          <div className="hidden lg:flex gap-4">
            <Link href="/" className="btn btn-primary btn-sm">
              LOGIN <IoMdLogIn />
            </Link>
            <Link href="/" className="btn btn-sm btn-primary btn-outline">
              REGISTER
            </Link>
          </div>
        </div>
      </nav>
      {/* MOBILE VIEW MENU*/}
      <div
        className={`block lg:hidden w-full h-full duration-700 ${isOpen ? "translate-y-0" : "-translate-y-full"} bg-primary fixed z-[10] transition-all`}
      >
        <div className="flex gap-2 text-center absolute text-xl font-bold text-primary-content flex-col w-full h-full justify-center items-center">
          <GiMummyHead className="text-6xl duration-500 rotate-0 hover:rotate-[1080deg] text-primary bg-primary-content p-2 rounded-full mb-6 hover:scale-150 scale-125 transition-all" />
          <NavbarBtn href="/" text="HOME" />
          <NavbarBtn href="/top/anime" text="TOP ANIME" />
          <NavbarBtn href="/top/manga" text="TOP MANGA" />
          <NavbarBtn href="/top/character" text="TOP CHARACTER" />
          <div className="flex justify-center gap-10 items-center text-sm mt-5 text-white">
            <Link
              href="/login"
              className="btn btn-primary-content px-6 btn-xs hover:scale-110 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary-content px-6 btn-xs hover:scale-110 transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

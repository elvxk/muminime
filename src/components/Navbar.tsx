"use client";
import { GiMummyHead } from "react-icons/gi";
import { IoMdLogIn, IoMdPersonAdd } from "react-icons/io";
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
          <div className="flex justify-center items-center gap-14">
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
            <div className="hidden font-bold lg:flex gap-8">
              <NavbarBtn
                href="/"
                text="Home"
                className="hover:text-primary-content transition-all"
              />
              <NavbarBtn
                href="/anime"
                text="Anime"
                className="hover:text-primary-content transition-all"
              />
              <NavbarBtn
                href="/manga"
                text="Manga"
                className="hover:text-primary-content transition-all"
              />
              <NavbarBtn
                href="/character"
                text="Character"
                className="hover:text-primary-content transition-all"
              />
            </div>
          </div>
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
            <Link href="/" className="btn w-[130px] btn-primary btn-sm">
              LOGIN <IoMdLogIn />
            </Link>
            <Link
              href="/"
              className="btn w-[130px] btn-sm btn-primary btn-outline"
            >
              REGISTER <IoMdPersonAdd />
            </Link>
          </div>
        </div>
      </nav>
      {/* MOBILE VIEW MENU*/}
      <div
        className={`block lg:hidden w-full h-full duration-700 ${isOpen ? "translate-y-0" : "-translate-y-full"} bg-primary fixed z-[10] transition-all`}
      >
        <div className="container px-10 mx-auto flex gap-2 text-center text-xl font-bold text-primary-content flex-col h-full justify-center items-center">
          <GiMummyHead className="text-6xl duration-500 rotate-0 hover:rotate-[1080deg] text-primary bg-primary-content p-2 rounded-full mb-6 hover:scale-150 scale-125 transition-all" />
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <NavbarBtn href="/" text="HOME" />
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <NavbarBtn href="/anime" text="ANIME" />
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <NavbarBtn href="/manga" text="MANGA" />
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <NavbarBtn href="/character" text="CHARACTER" />
          </button>
          <div className="flex flex-col justify-center gap-2 w-full items-center text-sm mt-6 text-white">
            <Link
              href="/login"
              className="btn btn-primary-content w-[186px] btn-xs hover:scale-110 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary-content w-[186px] btn-xs hover:scale-110 transition-all"
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

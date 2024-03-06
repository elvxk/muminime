"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { GiMummyHead } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { LiaHandPointUp } from "react-icons/lia";
import Image from "next/image";
import { CgLogOut, CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

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
            <div className="text-primary hidden font-bold lg:flex gap-8">
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
            {status !== "authenticated" ? (
              <Link href="/login" className="btn w-[130px] btn-primary btn-sm">
                LOGIN <IoMdLogIn />
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar flex gap-4 items-center justify-center"
                >
                  <h1 className="text-primary font-bold">
                    {session.user?.name}
                  </h1>
                  <div className="w-8 rounded-full border-2 border-primary ">
                    <Image
                      src={session.user?.image as string}
                      alt={session.user?.image as string}
                      width={420}
                      height={420}
                      placeholder="blur"
                      blurDataURL={session.user?.image as string}
                      className="w-[20px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-primary w-52"
                >
                  <li className="text-primary-content font-bold hover:text-primary hover:bg-primary-content transition-all">
                    <Link href="/profile">
                      <CgProfile /> Profile
                    </Link>
                  </li>
                  <li className="text-primary-content font-bold hover:text-primary hover:bg-primary-content transition-all">
                    <button onClick={() => signOut()}>
                      <CgLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
          <div className="flex flex-col justify-center gap-2 w-full items-center text-sm mt-6 text-white">
            {status !== "authenticated" ? (
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <Link
                  href="/login"
                  className="btn btn-primary-content w-[186px] btn-xs hover:scale-110 transition-all"
                >
                  Login
                </Link>
              </button>
            ) : (
              <>
                <h1 className="text-primary-content">{session.user?.name}</h1>
                <button onClick={() => setIsOpen((prev) => !prev)}>
                  <Link
                    href="/profile"
                    className="btn btn-primary-content w-[186px] btn-xs hover:scale-110 transition-all"
                  >
                    Profile
                  </Link>
                </button>
                <button
                  className="btn btn-primary-content w-[186px] btn-xs hover:scale-110 transition-all"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                    signOut();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarBtn = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link href={href} className="group relative hover:scale-110 transition-all">
      <span className={`relative z-10 ${className}`}>{text}</span>
      <span className="w-full duration-300 scale-x-0 group-hover:scale-x-125 -rotate-3 transition-all h-full -translate-x-full bg-warning absolute" />
    </Link>
  );
};

export default Navbar;

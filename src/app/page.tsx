"use client";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import { GiMummyHead } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-2 justify-center w-full items-center">
        <GiMummyHead className="text-6xl md:text-8xl fill-accent-content hover:scale-110 transition-all" />
        <h1 className="text-2xl md:text-4xl text-primary font-bold text-center">
          Welcome to <span className="text-accent-content">MUMI</span>
          NIME
        </h1>
        <h1 className="text-sm md:text-lg gap-2 flex font-bold text-center text-primary-content bg-primary px-2">
          <span className="hidden sm:block">Best website information for</span>
          <span className="block sm:hidden">Information for</span>
          <span className="text-base-100">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              words={[
                "Top Anime",
                "Top Manga",
                "Top People",
                "Top Characters",
                "Top Reviews",
              ]}
            />
          </span>
        </h1>
        <SearchBox panime pmanga />
        <div className="flex flex-col mt-6 items-center justify-center">
          <Link
            href="/login"
            className="text-accent-content hover:text-primary transition-all"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-accent-content hover:text-primary transition-all"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

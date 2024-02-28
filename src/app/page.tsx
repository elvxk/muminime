"use client";
import { GiMummyHead } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
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
        <label className="mt-6 mb-2 input input-bordered input-primary flex w-full max-w-xs md:max-w-md items-center justify-between right-0 gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search Anime or Manga"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex text-center max-w-xs md:max-w-md px-2 justify-around w-full gap-4 items-center">
          <Link
            href="/search/anime"
            className="btn btn-outline w-1/2 btn-primary rounded-lg"
          >
            Search Anime
          </Link>
          <Link
            href="/search/manga"
            className="btn btn-outline w-1/2 btn-primary rounded-lg"
          >
            Search Manga
          </Link>
        </div>
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

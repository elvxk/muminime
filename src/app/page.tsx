"use client";
import { GiMummyHead } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
const Home = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-2 justify-center items-center">
        <GiMummyHead className="text-6xl lg:text-8xl fill-accent-content hover:scale-110 transition-all" />
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Welcome to <span className="text-accent-content">MUMI</span>
          NIME
        </h1>
        <h1 className="text-sm lg:text-lg gap-2 flex font-bold text-center text-primary-content bg-primary px-2">
          <span className="hidden sm:block">Best website information for</span>
          <span className="block sm:hidden">Information for</span>
          <span className="text-accent-content">
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
        <label className="my-4 input input-bordered flex items-center lg:w-full gap-2">
          <input type="text" className="grow" placeholder="Search Anime" />
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
        <div className="flex gap-2">
          <Link
            href="/top/anime"
            className="btn btn-outline btn-primary rounded-full"
          >
            Top Anime
          </Link>
          <Link
            href="/top/manga"
            className="btn btn-outline btn-primary rounded-full"
          >
            Top Manga
          </Link>
        </div>
        <a href="" className="text-accent-content">
          Login
        </a>
      </div>
    </div>
  );
};
export default Home;

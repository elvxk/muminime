"use client";
import { GiMummyHead } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
const Home = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-2 justify-center items-center">
        <GiMummyHead className="text-6xl lg:text-8xl fill-accent-content hover:scale-110 transition-all" />
        <h1 className="text-2xl lg:text-4xl font-bold">
          Welcome to <span className="text-accent-content">MUMI</span>
          NIME
        </h1>
        <h1 className="text-md lg:text-lg font-bold text-primary-content bg-primary px-2">
          Best website information for{" "}
          <span className="text-accent-content">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              words={["Top Anime", "Anime Detail"]}
            />
          </span>
        </h1>
        <Link
          href="/top"
          className="btn btn-outline btn-primary rounded-full btn-wide mt-4"
        >
          Top Anime List
        </Link>
        <a href="" className="text-accent-content">
          Login
        </a>
      </div>
    </div>
  );
};
export default Home;

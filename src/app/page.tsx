import SearchBox from "@/components/SearchBox";
import TypingText from "@/components/TypingText";
import Link from "next/link";
import { GiMummyHead } from "react-icons/gi";


export default function Home() {
  <></>
  return (
    <main className="container mx-auto px-4 items-center flex justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        {/* Logo Section */}
        <GiMummyHead className="text-6xl md:text-8xl fill-accent-content hover:scale-110 transition-all" />

        {/* Welcome section */}
        <h1 className="text-2xl md:text-4xl text-primary font-bold text-center">
          Welcome to <span className="text-accent-content">MUMI</span>
          NIME
        </h1>

        {/* Typing section */}
        <h1 className="text-sm md:text-lg gap-2 flex font-bold text-center text-primary-content bg-primary px-2">
          <span className="hidden sm:block">Best website information for</span>
          <span className="block sm:hidden">Information for</span>
          <span className="text-base-100">
            <TypingText
              text={["Anime", "Manga", "Character"]}
              cur
              curstyle="_"
            />
          </span>
        </h1>

        {/* Search Box */}
        <SearchBox panime pmanga />

        {/* Login/Register */}
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
    </main>
  );
}

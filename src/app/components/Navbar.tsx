import { GiMummyHead } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral fixed z-10">
      <div className="container mx-auto flex justify-between px-4">
        <Link
          href="/"
          className="flex group items-center gap-2 font-bold text-xl"
        >
          <GiMummyHead className="group-hover:rotate-[25deg] transition-all" />
          <span className="group-hover:scale-105 transition-all">
            MUMI
            <span className="text-accent-content">NIME</span>
          </span>
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="btn btn-primary btn-sm">
            LOGIN <IoMdLogIn />
          </Link>
          <Link href="/" className="btn btn-sm">
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

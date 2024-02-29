import Link from "next/link";
import { TbError404Off } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="container mx-auto h-screen justify-center items-center flex flex-col gap-3 lg:gap-8">
      <h1 className="text-center gap-2 lg:scale-[140%] text-primary flex flex-col items-center justify-center text-6xl">
        <TbError404Off />
        <span className="px-2 text-xl font-bold bg-primary text-primary-content">
          PAGE NOT FOUND
        </span>
      </h1>
      <Link
        href="/"
        className="transition-all lg:text-lg text-accent-content text-sm hover:scale-[105%] hover:text-primary"
      >
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;

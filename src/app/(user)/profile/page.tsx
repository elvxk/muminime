"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Loading from "../../loading";
import Link from "next/link";
import { CgLogOut } from "react-icons/cg";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4">
      {session ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl mb-4 font-bold text-primary">MY PROFILE</h1>
          <div className="bg-primary-content rounded-box p-6 gap-4 flex-col flex items-center justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full border-2 border-primary">
                <Image
                  src={session.user?.image as string}
                  alt={session.user?.image as string}
                  width={420}
                  height={420}
                  placeholder="blur"
                  blurDataURL={session?.user?.image as string}
                  className="w-[20px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            <h1 className="font-bold text-primary-content bg-primary px-2 md:text-xl">
              {session?.user?.name}
            </h1>
            <p className="text-primary font-bold -mb-2">My Collection</p>
            <p className="text-primary -mt-2">
              {"3" + " Anime" + " & " + "5" + " Manga"}
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <Link
                className="btn btn-outline btn-xs md:btn-md px-10 btn-primary"
                href="/myanime"
              >
                My Anime
              </Link>
              <Link
                className="btn btn-outline btn-xs md:btn-md px-10 btn-primary"
                href="/mymanga"
              >
                My Manga
              </Link>
            </div>
            <button
              className="text-primary gap-1 flex items-center justify-center transition-all hover:scale-95"
              onClick={() => signOut()}
            >
              <CgLogOut /> Logout
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Page;

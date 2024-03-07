import Image from "next/image";
import Loading from "../../loading";
import Link from "next/link";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import LogoutBtn from "@/components/utils/LogoutBtn";

const Page = async () => {
  const session = await authUserSession();
  const qanime: any[] =
    await prisma.$queryRaw`SELECT * from "Collection" where user_email=${session?.email} and cat='anime'`;
  const qmanga: any[] =
    await prisma.$queryRaw`SELECT * from "Collection" where user_email=${session?.email} and cat='manga'`;

  const countAnime = qanime.length;
  const countManga = qmanga.length;

  return (
    <div className="container mx-auto px-4">
      {session ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl mb-4 font-bold text-primary">MY PROFILE</h1>
          <div className="bg-primary-content rounded-box p-6 gap-4 flex-col flex items-center justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full border-2 border-primary">
                <Image
                  src={session.image as string}
                  alt={session.image as string}
                  width={420}
                  height={420}
                  placeholder="blur"
                  blurDataURL={session.image as string}
                  className="w-[20px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            <h1 className="font-bold text-primary-content bg-primary px-2 md:text-xl">
              {session.name}
            </h1>
            <p className="text-primary font-bold -mb-2">My Collection</p>
            <p className="text-primary -mt-2">
              {countAnime + " Anime" + " & " + countManga + " Manga"}
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
            <LogoutBtn />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Page;

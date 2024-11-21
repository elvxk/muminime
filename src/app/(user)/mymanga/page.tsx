import BtnDelete from "@/components/utils/BtnDelete";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const category = "manga";

  const session = await authUserSession();
  const getData = await prisma.collection.findMany({
    where: { user_email: session?.email as string, cat: category },
  });

  return (
    <div className="container mx-auto px-4 py-[10vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase mb-4 page text-xl font-bold text-center text-primary">
          {`My ${category}`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {getData.map((data, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Link
                  href={`/${category}/detail/${data.mal_id}`}
                  className="border-4 duration-700 hover:border-primary border-transparent group card mt-8 w-full bg-neutral shadow-xl h-full transition-all"
                >
                  <figure className="max-h-96 rounded-xl">
                    <Image
                      src={data.image}
                      alt={data.image}
                      width={420}
                      height={420}
                      placeholder="blur"
                      blurDataURL={data.image}
                      className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
                    />
                  </figure>
                  <div className="card-body justify-between items-center -my-2">
                    <h1 className="card-title font-bold text-xl h-full text-center">
                      {data.title}
                    </h1>
                  </div>
                </Link>
                <BtnDelete
                  mal_id={data.mal_id as string}
                  user_email={session?.email as string}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default page;

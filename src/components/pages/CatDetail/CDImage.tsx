import Image from "next/image";
import CDCollection from "./CDCollection";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
const CDImage = async ({
  img,
  alt,
  id,
  cat,
}: {
  img: string;
  alt?: string;
  id: string;
  cat: string;
}) => {
  const user = await authUserSession();
  const checkCollection = await prisma.collection.findFirst({
    where: { user_email: user?.email as string, mal_id: id.toString() },
  });

  return (
    <div className="m-4 sm:me-8 sm:float-left items-center gap-4 flex flex-col justify-center">
      <Image
        src={img}
        alt={alt ? alt : img}
        width={420}
        height={420}
        placeholder="blur"
        blurDataURL={img}
        className="w-[250px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
      />
      {user &&
        (!checkCollection ? (
          <CDCollection id={id} user={user?.email as string} cat={cat} />
        ) : (
          <h1>In Collection</h1>
        ))}
    </div>
  );
};
export default CDImage;

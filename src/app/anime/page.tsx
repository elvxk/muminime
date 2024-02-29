import SearchBox from "@/components/SearchBox";
import SwiperCard from "@/components/SwiperCard";
import { apiHit } from "@/libs/api";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa";

const AnimePage = async () => {
  const topAnime = await apiHit("/top/anime?limit=10")
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <SearchBox panime />
      <div className="flex justify-between items-center">
        <h1 className="page text-xl font-bold text-primary">TOP ANIME</h1>
        <Link
          href="/anime/top"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={topAnime} />
      <div className="flex justify-between items-center mt-8 lg:mt-12">
        <h1 className="page text-xl font-bold text-primary">TOP ANIME</h1>
        <Link
          href="/anime/top"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={topAnime} />
    </div>
  );
};
export default AnimePage;

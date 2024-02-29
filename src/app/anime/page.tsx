import SearchBox from "@/components/SearchBox";
import SwiperCard from "@/components/SwiperCard";
import { apiHit, apiHitNest } from "@/libs/api";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa";

const Page = async () => {
  const topAnime = await apiHit(`/top/anime?limit=10`);

  let recAnime = await apiHitNest(`/recommendations/anime`);
  recAnime = { data: recAnime.sort(() => 0.5 - Math.random()).slice(0, 10) };

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <div className="flex mb-8 justify-center flex-col items-center">
        <h1 className="-mb-4 text-lg font-bold text-primary">Search Anime</h1>
        <SearchBox panime />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="page text-xl font-bold text-primary">TOP ANIME</h1>
        <Link
          href="/anime/top"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={topAnime.data} />
      <div className="flex justify-between items-center mt-8 lg:mt-12">
        <h1 className="page text-xl font-bold text-primary">
          RECOMMENDATION ANIME
        </h1>
        <Link
          href="/anime/recommendations"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={recAnime.data} />
    </div>
  );
};
export default Page;

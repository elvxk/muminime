import SearchBox from "@/components/SearchBox";
import SwiperCard from "@/components/SwiperCard";
import { apiHit, apiHitNest } from "@/libs/api";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa";

const Page = async () => {
  const topManga = await apiHit(`/top/manga?limit=10`);

  let recManga = await apiHitNest(`/recommendations/manga`);
  recManga = { data: recManga.sort(() => 0.5 - Math.random()).slice(0, 10) };

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <div className="flex mb-8 justify-center flex-col items-center">
        <h1 className="-mb-4 text-lg font-bold text-primary">Search Manga</h1>
        <SearchBox pmanga />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="page text-xl font-bold text-primary">TOP MANGA</h1>
        <Link
          href="/manga/top"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={topManga.data} type="manga" />
      <div className="flex justify-between items-center mt-8 lg:mt-12">
        <h1 className="page text-xl font-bold text-primary">
          RECOMMENDATION MANGA
        </h1>
        <Link
          href="/manga/recommendations"
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <SwiperCard data={recManga.data} type="manga" />
    </div>
  );
};
export default Page;

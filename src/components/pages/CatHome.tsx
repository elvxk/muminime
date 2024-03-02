/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import SearchBox from "@/components/SearchBox";
import SwiperCard from "@/components/utils/SwiperCard";
import { apiHit, apiHitNest } from "@/libs/api";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

interface ICatHome {
  apiTop: string;
  apiRec: string;
  category: "anime" | "manga";
}

const CatHome: React.FC<ICatHome> = ({ apiTop, apiRec, category }) => {
  const [topList, setTopList] = useState([]);
  const [recList, setRecList] = useState([]);

  // const topList = await apiHit(apiTop);

  // let recList = await apiHitNest(apiRec);
  // recList = { data: recList.sort(() => 0.5 - Math.random()).slice(0, 10) };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await apiHit(apiTop);
        const data1 = await response1;
        setTopList(data1.data);

        const response2 = await apiHitNest(apiRec);
        let data2 = await response2;
        data2 = { data: data2.sort(() => 0.5 - Math.random()).slice(0, 10) };
        setRecList(data2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let anime: boolean = false;
  let manga: boolean = false;
  if (category === "anime") anime = true;
  if (category === "manga") manga = true;

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      {/* Search Box */}
      <div className="flex mb-8 justify-center flex-col items-center">
        <h1 className="-mb-4 text-lg font-bold text-primary uppercase">
          Search {category}
        </h1>
        <SearchBox panime={anime} pmanga={manga} />
      </div>

      {/* Top Anime */}
      <div className="flex justify-between items-center">
        <h1 className="page text-xl font-bold text-primary uppercase">
          TOP {category}
        </h1>
        <Link
          href={`/${category}/top`}
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SwiperCard data={topList} type={category} />
      </Suspense>

      {/* Recommendation Anime */}
      <div className="flex justify-between items-center mt-8 lg:mt-12">
        <h1 className="page text-xl font-bold text-primary uppercase">
          RECOMMENDATION {category}
        </h1>
        <Link
          href={`/${category}/recommendations`}
          className="hover:scale-105 transition-all text-xs text-accent-content flex items-center justify-center gap-2"
        >
          more <FaRegHandPointRight />
        </Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SwiperCard data={recList} type={category} />
      </Suspense>
    </div>
  );
};
export default CatHome;

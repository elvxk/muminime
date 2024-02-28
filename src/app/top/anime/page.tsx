"use client";
import { useEffect, useState } from "react";
import { getTopAnime } from "@/libs/api";
import CardList from "@/components/CardList";

const TopAnime = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    getTopAnime((top: any) => {
      if (top.status == 200) {
        setTopAnime(top.anime);
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <h1 className="text-xl font-bold text-center">TOP ANIME</h1>
      <CardList api={topAnime} />
    </div>
  );
};
export default TopAnime;

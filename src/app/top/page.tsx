"use client";
import { useEffect, useState } from "react";
import { getTopAnime } from "@/app/libs/api";
import Card from "@/app/components/Card";

const TopAnime: React.FC = () => {
  const [topAnime, setTopAnime] = useState<any[]>([]);

  useEffect(() => {
    getTopAnime()
      .then(({ data }) => {
        setTopAnime(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <h1 className="text-xl font-bold">TOP ANIME</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topAnime.map(({ airing, title, images, score, status, mal_id }) => {
          return (
            <div key={mal_id}>
              <Card
                id={mal_id}
                airing={airing}
                title={title}
                image={images.webp.image_url}
                score={score}
                status={status}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TopAnime;

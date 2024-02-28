"use client";
import { useEffect, useState } from "react";
import { getTopAnime } from "./../libs/api";

import Card from "./../components/Card";
const TopAnime = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    getTopAnime()
      .then(({ data }) => {
        setTopAnime(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(topAnime);

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <h1 className="text-xl font-bold">TOP ANIME</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topAnime.map(
          (
            { airing, title, images, score, status, year, title_japanese },
            i,
          ) => {
            return (
              <div key={i}>
                <Card
                  airing={airing}
                  title={title}
                  jpn_title={title_japanese}
                  image={images.webp.image_url}
                  score={score}
                  status={status}
                  year={year}
                />
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};
export default TopAnime;

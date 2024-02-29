"use client";
import { apiHit } from "@/libs/api";
import CardList from "@/components/CardList";
import { useEffect, useState } from "react";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = async () => {
    await apiHit(`/top/anime?page=${page}`)
      .then((data) => {
        setTopAnime(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrev = () => {
    setPage(page - 1);
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className="items-center flex flex-col justify-center container mx-auto px-4 pt-[10vh]">
      <h1 className="mb-4 page text-xl font-bold text-center">TOP ANIME</h1>
      <div className="join">
        {page > 1 && (
          <button className="join-item btn" onClick={() => setPage(page - 1)}>
            «
          </button>
        )}
        <button className="join-item btn">
          Page {page} / {topAnime.pagination?.last_visible_page}
        </button>
        {topAnime.pagination?.has_next_page && (
          <button className="join-item btn" onClick={() => setPage(page + 1)}>
            »
          </button>
        )}
      </div>
      <CardList api={topAnime.data} isLoading={isLoading} />
      <div className="join my-20">
        {page > 1 && (
          <button className="join-item btn" onClick={handlePrev}>
            «
          </button>
        )}
        <button className="join-item btn">
          Page {page} / {topAnime.pagination?.last_visible_page}
        </button>
        {topAnime.pagination?.has_next_page && (
          <button className="join-item btn" onClick={handleNext}>
            »
          </button>
        )}
      </div>
    </div>
  );
};

export default TopAnime;

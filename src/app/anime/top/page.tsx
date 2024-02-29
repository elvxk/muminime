"use client";
import CardList from "@/components/CardList";
import { apiHit } from "@/libs/api";
import { SyntheticEvent, useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = () => {
    apiHit(`/top/anime?page=${page}`)
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
    setIsLoading(true);
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePage = (e: SyntheticEvent, destination: string) => {
    e.preventDefault();

    if (destination == "prev") {
      setPage(page - 1);
    } else if (destination == "next") {
      setPage(page + 1);
    }
  };

  return (
    <div className="items-center flex flex-col justify-center container mx-auto px-4 pt-[10vh]">
      <h1 className="mb-4 page text-xl font-bold text-center">TOP ANIME</h1>
      <div className="join">
        {page > 1 && (
          <button
            id="topprev"
            className="join-item btn"
            onClick={(e) => handlePage(e, "prev")}
          >
            «
          </button>
        )}
        <button className="join-item btn">
          Page {page} / {topAnime.pagination?.last_visible_page}
        </button>
        {topAnime.pagination?.has_next_page && (
          <button
            className="join-item btn"
            onClick={(e) => handlePage(e, "next")}
          >
            »
          </button>
        )}
      </div>
      <CardList api={topAnime.data} isLoading={isLoading} />
      <div className="join my-20">
        {page > 1 && (
          <button
            className="join-item btn"
            onClick={(e) => handlePage(e, "prev")}
          >
            «
          </button>
        )}
        <button className="join-item btn">
          Page {page} / {topAnime.pagination?.last_visible_page}
        </button>
        {topAnime.pagination?.has_next_page && (
          <button
            className="join-item btn"
            onClick={(e) => handlePage(e, "next")}
          >
            »
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;

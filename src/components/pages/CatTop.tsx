/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { apiHit } from "@/libs/api";
import { useEffect, useState } from "react";
import CardList from "../CardList";
import Pagination from "../Pagination";

interface ICatTop {
  category: "anime" | "manga";
}

const CatTop: React.FC<ICatTop> = ({ category }) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await apiHit(`/top/${category}?page=${page}`);
        const data = await response;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-[10vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4 page text-xl font-bold text-center text-primary">
          TOP ANIME
        </h1>
        <Pagination page={page} data={data} setPage={setPage} />
        <div className="mb-20">
          <CardList api={data.data} isLoading={isLoading} type="anime" />
        </div>
        <Pagination page={page} data={data} setPage={setPage} />
      </div>
    </div>
  );
};
export default CatTop;

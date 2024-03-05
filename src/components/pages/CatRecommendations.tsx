/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { apiHitNest } from "@/libs/api";
import { useEffect, useState } from "react";
import CardList from "../CardList";
import { useRouter } from "next/navigation";

interface ICatRec {
  category: "anime" | "manga";
}
const CatRecommendations: React.FC<ICatRec> = ({ category }) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClick, setIsClick] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        let response = await apiHitNest(`/recommendations/${category}`);
        response = {
          data: response.sort(() => 0.5 - Math.random()).slice(0, 25),
        };
        const data = await response;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isClick]);

  return (
    <div className="container mx-auto px-4 py-[10vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase mb-4 page text-xl font-bold text-center text-primary">
          Recommendations {category}
        </h1>
        <button
          onClick={() => setIsClick(isClick + 1)}
          className="btn btn-primary"
        >
          Refresh Recommendations
        </button>
        <div className="mb-20">
          <CardList
            api={data.data}
            isLoading={isLoading}
            type={category}
            hideRating={true}
          />
        </div>
        <button
          onClick={() => setIsClick(isClick + 1)}
          className="btn btn-primary"
        >
          Refresh Recommendations
        </button>
      </div>
    </div>
  );
};
export default CatRecommendations;

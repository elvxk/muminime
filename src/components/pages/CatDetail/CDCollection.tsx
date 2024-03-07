"use client";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const CDCollection = ({
  id,
  user,
  cat,
  title,
  image,
}: {
  id: string;
  user: string;
  cat: string;
  title: string;
  image: string;
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCol = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await axios
      .post("/api/v1/collection", {
        mal_id: id.toString(),
        user_email: user,
        cat: cat,
        title: title,
        image: image,
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
    if (res.isCreated) {
      setIsCreated(true);
    }
  };
  return (
    <>
      {!isCreated ? (
        <button onClick={handleCol} className="btn btn-primary btn-outline">
          <FaRegStar /> Add to Collection
        </button>
      ) : (
        <h1 className="flex gap-1 text-center justify-center items-center">
          Added Successfully
          <br />
          *please refresh page
        </h1>
      )}
    </>
  );
};
export default CDCollection;

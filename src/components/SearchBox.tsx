"use client";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import Modal from "./Modal";

const SearchBox = ({
  panime,
  pmanga,
}: {
  panime?: boolean;
  pmanga?: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const keyword = inputRef.current?.value!;
    const clicked = e.currentTarget.id;
    const destination = `/${clicked}/${keyword.replace(/\s+/g, " ").replace(/^\s+/g, "")}`;

    if (keyword.replace(/\s/g, "").length > 3 && keyword.trim() != "") {
      router.push(destination);
    } else {
      (document.getElementById("modal") as HTMLFormElement).showModal();
    }
  };

  return (
    <>
      <Modal message="Please enter a keyword of at least 3 characters" />
      <label className="mt-6 mb-2 input input-bordered input-primary flex w-full max-w-xs md:max-w-md items-center justify-between right-0 gap-2">
        <input
          ref={inputRef}
          type="text"
          className="grow"
          placeholder={`Search ${panime && pmanga ? "anime or manga" : (panime && "anime") || (pmanga && "manga")}`}
        />
        <IoMdSearch />
      </label>
      <div className="flex text-center max-w-xs md:max-w-md px-2 justify-around w-full gap-4 items-center">
        {panime && (
          <button
            id="anime"
            onClick={(e) => handleClick(e)}
            className="btn btn-outline w-1/2 btn-primary rounded-lg"
          >
            Search Anime
          </button>
        )}
        {pmanga && (
          <button
            id="manga"
            onClick={(e) => handleClick(e)}
            className="btn btn-outline w-1/2 btn-primary rounded-lg"
          >
            Search Manga
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBox;

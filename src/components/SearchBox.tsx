import { useRouter } from "next/navigation";
import { useRef } from "react";
import Modal from "./Modal";

const SearchBox = () => {
  const inputRef = useRef();
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    const destination = `/search/${event.target.name}/${inputRef.current.value}`;
    if (inputRef.current.value.length > 3) {
      router.push(destination);
    } else {
      document.getElementById("modal").showModal();
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
          placeholder="Search Anime or Manga"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex text-center max-w-xs md:max-w-md px-2 justify-around w-full gap-4 items-center">
        <button
          name="anime"
          onClick={handleClick}
          className="btn btn-outline w-1/2 btn-primary rounded-lg"
        >
          Search Anime
        </button>
        <button
          name="manga"
          onClick={handleClick}
          className="btn btn-outline w-1/2 btn-primary rounded-lg"
        >
          Search Manga
        </button>
      </div>
    </>
  );
};

export default SearchBox;

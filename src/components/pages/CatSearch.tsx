import { apiHit } from "@/libs/api";
import CardList from "../CardList";
import SearchBox from "../SearchBox";

interface ICatSearch {
  query: string;
  category: "anime" | "manga";
}

const CatSearch: React.FC<ICatSearch> = async ({ query, category }) => {
  const listing = await apiHit(`/${category}?q=${decodeURI(query)}`);

  return (
    <div className="container mx-auto px-4 pt-[10vh] flex justify-center flex-col items-center">
      <h1 className="text-xl font-bold text-center uppercase text-primary">
        RESULT SEARCH for {decodeURI(query)}
      </h1>
      <SearchBox panime />
      {listing.data.length > 0 ? (
        <CardList api={listing.data} type="anime" />
      ) : (
        <div className="mt-20">
          <h1 className="text-lg text-primary-content p-2 font-bold text-center uppercase bg-primary">
            search for {decodeURI(query)} not found
          </h1>
        </div>
      )}
    </div>
  );
};
export default CatSearch;

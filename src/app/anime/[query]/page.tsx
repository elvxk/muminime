import CardList from "@/components/CardList";
import SearchBox from "@/components/SearchBox";
import { apiHit } from "@/libs/api";

const SearchAnime = async ({ params }: { params: { query: string } }) => {
  const { query } = params;

  const listing = await apiHit(`/anime?q=${decodeURI(query)}`)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="container mx-auto px-4 pt-[10vh] flex justify-center flex-col items-center">
      <h1 className="text-xl font-bold text-center uppercase text-primary">
        RESULT SEARCH for {decodeURI(query)}
      </h1>
      <SearchBox panime />
      {listing.length > 0 ? (
        <CardList api={listing} />
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

export default SearchAnime;

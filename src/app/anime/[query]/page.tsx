import CardList from "@/components/CardList";
import SearchBox from "@/components/SearchBox";
import { apiHit } from "@/libs/api";

const SearchAnime = async ({ params }: { params: { query: string } }) => {
  const { query } = params;

  const listing = await apiHit(`/anime?q=${query}`)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="container mx-auto px-4 pt-[10vh] flex justify-center flex-col items-center">
      <h1 className="text-xl font-bold text-center uppercase">
        RESULT SEARCH for {decodeURI(query)}
      </h1>
      <SearchBox panime />
      <CardList api={listing} />
    </div>
  );
};

export default SearchAnime;

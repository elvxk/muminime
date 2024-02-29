import { apiHit } from "@/libs/api";
import CardList from "@/components/CardList";

const TopAnime = async () => {
  const listing = await apiHit("/top/anime")
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <h1 className="page text-xl font-bold text-center">TOP ANIME</h1>
      <CardList api={listing} />
    </div>
  );
};

export default TopAnime;

import { apiHit } from "@/libs/api";
import CardList from "@/components/CardList";

const TopAnime = async () => {
  const topAnime = await apiHit("/top/anime")
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="container mx-auto px-4 pt-[10vh]">
      <h1 className="text-xl font-bold text-center">TOP ANIME</h1>
      <CardList api={topAnime} />
    </div>
  );
};

export default TopAnime;

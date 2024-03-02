import CatHome from "@/components/pages/CatHome";

const Page = () => {
  return (
    <CatHome
      apiTop="/top/anime?limit=10"
      apiRec="/recommendations/anime"
      category="anime"
    />
  );
};
export default Page;

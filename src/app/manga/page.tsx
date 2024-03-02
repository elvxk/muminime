import CatHome from "@/components/pages/CatHome";

const Page = () => {
  return (
    <CatHome
      apiTop="/top/manga?limit=10"
      apiRec="/recommendations/manga"
      category="manga"
    />
  );
};
export default Page;

import CatSearch from "@/components/pages/CatSearch";

const Page = ({ params }: { params: { query: string } }) => {
  const { query } = params;

  return <CatSearch query={query} category="manga" />;
};

export default Page;

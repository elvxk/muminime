import CatDetail from "@/components/pages/CatDetail";

const Page = ({ params }: { params: { query: string } }) => {
  const { query } = params;

  return <CatDetail query={query} category="anime" />;
};
export default Page;

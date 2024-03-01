import YtPlayer from "@/components/Youtube";
import { apiHit } from "@/libs/api";
import Image from "next/image";

const Page = async ({ params }: { params: { query: string } }) => {
  const { query } = params;
  const { data } = await apiHit(`/manga/${query}`);

  return (
    <div className="px-4 py-[10vh]">
      <div className="flex flex-col gap-4 container mx-auto">
        <h1 className="text-2xl font-bold text-primary-content bg-primary text-center">
          {data.title}
        </h1>
        <div className="border-2 border-primary p-2">
          <div className="m-4 sm:me-8 sm:float-left items-center flex justify-center">
            <Image
              src={data.images.webp.image_url}
              alt={data.images.jpg.image_url}
              width={420}
              height={420}
              placeholder="blur"
              blurDataURL={data.images.webp.image_url}
              className="w-[250px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <p className="text-center sm:text-justify m-4 -mb-2">
            <span className="font-bold bg-primary px-2 text-primary-content">
              Overview
            </span>
          </p>
          <div className="flex flex-wrap gap-2 m-4 border-2 border-primary justify-center sm:justify-around">
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Score
              </span>
              <span className="text-lg font-bold text-primary">
                {data.score}
              </span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Rank
              </span>
              <span className="text-lg font-bold text-primary">
                #{data.rank}
              </span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Popularity
              </span>
              <span className="text-lg font-bold text-primary">
                #{data.popularity}
              </span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Status
              </span>
              <span className="font-bold text-primary">{data.status}</span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Chapters
              </span>
              <span className="font-bold text-primary">{data.chapters}</span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Volumes
              </span>
              <span className="font-bold text-primary">{data.volumes}</span>
            </h1>
            <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
              <span className="font-bold px-2 text-primary-content bg-primary">
                Year
              </span>
              <span className="font-bold text-primary">
                {data.published.prop.from.year} to {data.published.prop.to.year}
              </span>
            </h1>
          </div>
          <p className="text-justify m-4 mt-8">
            <span className="font-bold bg-primary px-2 text-primary-content">
              Synopsis
            </span>
            <br />
            <span className="text-justify text-primary">{data.synopsis}</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 border-2 border-primary p-6 justify-center items-center">
          <div className="flex flex-col gap-4">
            <p className="text-start md:text-center">
              <span className="font-bold bg-primary px-2 text-primary-content">
                Published
              </span>
              <br />
              <span className="text-justify text-primary">
                {data.published.string}
              </span>
            </p>
            <p className="text-start md:text-center">
              <span className="font-bold bg-primary px-2 text-primary-content">
                Authors
              </span>
              <br />
              {data.authors.map((item: any, i: number) => {
                return (
                  <span key={i} className="text-justify text-primary">
                    {`[${i + 1}]`}
                    {item.name}{" "}
                  </span>
                );
              })}
            </p>
            <p className="text-start md:text-center">
              <span className="font-bold bg-primary px-2 text-primary-content">
                Serializations
              </span>
              <br />
              {data.serializations.map((item: any, i: number) => {
                return (
                  <span key={i} className="text-justify text-primary">
                    {`[${i + 1}]`}
                    {item.name}{" "}
                  </span>
                );
              })}
            </p>
            <p className="text-start md:text-center">
              <span className="font-bold bg-primary px-2 text-primary-content">
                Genres
              </span>
              <br />
              {data.genres.map((item: any, i: number) => {
                return (
                  <span key={i} className="text-justify text-primary">
                    {`[${i + 1}]`}
                    {item.name}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;

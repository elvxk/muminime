import { apiHit } from "@/libs/api";
import CDImage from "./CatDetail/CDImage";
import CDTitle from "./CatDetail/CDTitle";
import CDOverview from "./CatDetail/CDOverview";
import CDDetailed from "./CatDetail/CDDetailed";

interface ICatDetail {
  query: string;
  category: "anime" | "manga";
}

const CatDetail: React.FC<ICatDetail> = async ({ query, category }) => {
  const { data } = await apiHit(`/${category}/${query}`);

  let year;
  let trailer;
  let episode_chapter;
  let duration_volume;
  let producer_author;
  let studio_serialization;

  if (category == "anime") {
    year = data.aired.prop.from.year;
    trailer = data.trailer.youtube_id;
    episode_chapter = data.episodes;
    duration_volume = data.duration;
    producer_author = data.producers;
    studio_serialization = data.studios;
  }
  if (category == "manga") {
    year = data.published.prop.from.year;
    trailer = "";
    episode_chapter = data.chapters;
    duration_volume = data.volumes;
    producer_author = data.authors;
    studio_serialization = data.serializations;
  }

  return (
    <div className="px-4 py-[10vh]">
      <div className="flex flex-col gap-4 container mx-auto">
        <CDTitle title={data.title} />
        <div className="border-2 border-primary p-2">
          <CDImage
            img={data.images.webp.image_url}
            alt={data.images.jpg.image_url}
            id={data.mal_id}
            cat={category}
            title={data.title}
          />
          <p className="text-center sm:text-justify m-4 -mb-2">
            <span className="font-bold bg-primary px-2 text-primary-content">
              Overview
            </span>
          </p>
          <CDOverview
            type={data.type}
            status={data.status}
            score={data.score}
            rank={data.rank}
            popularity={data.popularity}
            year={year}
          />
          <p className="text-justify m-4 mt-8">
            <span className="font-bold bg-primary px-2 text-primary-content">
              Synopsis
            </span>
            <br />
            <span className="text-justify text-primary">{data.synopsis}</span>
          </p>
        </div>
        <CDDetailed
          category={category}
          genres={data.genres}
          trailer={trailer}
          episode_chapter={episode_chapter}
          duration_volume={duration_volume}
          producer_author={producer_author}
          studio_serialization={studio_serialization}
        />
      </div>
    </div>
  );
};
export default CatDetail;

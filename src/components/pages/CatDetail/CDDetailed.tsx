import YtPlayer from "@/components/YtPlayer";

interface IDetailed {
  category: string;
  genres: Array<{ name: string }>;
  trailer: string;
  episode_chapter: string;
  duration_volume: string;
  producer_author: Array<{ name: string }>;
  studio_serialization: Array<{ name: string }>;
}

const CDDetailed: React.FC<IDetailed> = ({
  category,
  trailer,
  genres,
  episode_chapter,
  duration_volume,
  producer_author,
  studio_serialization,
}) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-primary p-6 justify-center items-center">
      {/* Trailer  */}
      {category == "anime" && trailer && (
        <div className="flex flex-col gap-4">
          <p className="text-center">
            <span className="font-bold bg-primary px-2 text-primary-content">
              Trailer
            </span>
          </p>
          <YtPlayer ytid={trailer} />
        </div>
      )}
      {/* Episode or Chapter */}
      {episode_chapter && (
        <p className="text-start md:text-center">
          <span className="font-bold bg-primary px-2 text-primary-content">
            {category == "anime" && "Episode"}
            {category == "manga" && "Chapter"}
          </span>
          <br />
          <span className="text-justify text-primary">{episode_chapter}</span>
        </p>
      )}

      {/* Duration or Volume */}
      {duration_volume && (
        <p className="text-start md:text-center">
          <span className="font-bold bg-primary px-2 text-primary-content">
            {category == "anime" && "Duration"}
            {category == "manga" && "Volume"}
          </span>
          <br />
          <span className="text-justify text-primary">{duration_volume}</span>
        </p>
      )}

      {/* Producers or Authors */}
      <p className="text-start md:text-center">
        <span className="font-bold bg-primary px-2 text-primary-content">
          {category == "anime" && "Producers"}
          {category == "manga" && "Authors"}
        </span>
        <br />
        {producer_author.map((item: any, i: number) => {
          return (
            <span key={i} className="text-justify text-primary">
              {`[${i + 1}]`}
              {item.name}{" "}
            </span>
          );
        })}
      </p>

      {/* Studio or Serialization */}
      <p className="text-start md:text-center">
        <span className="font-bold bg-primary px-2 text-primary-content">
          {category == "anime" && "Studios"}
          {category == "manga" && "Serializations"}
        </span>
        <br />
        {studio_serialization.map((item: any, i: number) => {
          return (
            <span key={i} className="text-justify text-primary">
              {`[${i + 1}]`}
              {item.name}{" "}
            </span>
          );
        })}
      </p>

      {/* Genres */}
      <div className="flex flex-col gap-4">
        <p className="text-start md:text-center">
          <span className="font-bold bg-primary px-2 text-primary-content">
            Genres
          </span>
          <br />
          {genres.map((item: any, i: number) => {
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
  );
};
export default CDDetailed;

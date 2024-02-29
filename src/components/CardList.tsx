/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaStar, FaStop, FaPlay } from "react-icons/fa";
import Image from "next/image";

interface IfTopAnime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  score: number;
  airing: boolean;
  status: string;
}
interface Props {
  api: IfTopAnime[];
}

const CardList: React.FC<Props> = ({ api }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {api.map((anime, i) => {
        return (
          <Link
            key={i}
            href={`/${anime.mal_id}`}
            className="border-4 duration-700 hover:border-primary border-transparent group card mt-8 w-full bg-neutral shadow-xl h-full transition-all"
          >
            <figure className="max-h-96 rounded-xl">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={420}
                height={420}
                placeholder="blur"
                blurDataURL={anime.images.webp.image_url}
                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
              />
            </figure>
            <div className="card-body justify-between items-center -my-2">
              <h1 className="card-title font-bold text-xl h-full text-center">
                {anime.title}
              </h1>
              <div className=" gap-3 flex-row sm:flex-col card-actions justify-center flex items-center">
                <div className="badge badge-secondary flex gap-2 py-3 w-full">
                  <span className="scale-75">
                    {anime.airing ? <FaPlay /> : <FaStop />}
                  </span>
                  {anime.status}
                </div>
                <div className="badge badge-primary flex gap-2 py-3 w-full">
                  <span className="scale-75">
                    <FaStar />
                  </span>
                  {anime.score}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CardList;

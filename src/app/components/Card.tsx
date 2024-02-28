import { FaStar, FaStop, FaPlay, FaCalendarTimes } from "react-icons/fa";
const Card = (props: any) => {
  const { title, image, score, status, year, airing, jpn_title } = props;
  return (
    <div className="border-4 hover:border-primary border-transparent group card mt-8 w-full bg-neutral shadow-xl h-full transition-all">
      <figure className="max-h-96 rounded-xl">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-all"
        />
      </figure>
      <div className="card-body justify-between items-center -my-2">
        <h1 className="card-title font-bold text-xl h-full text-center">
          {title}
        </h1>
        <div className=" gap-3 flex-row sm:flex-col card-actions justify-center flex items-center">
          <div className="badge badge-secondary flex gap-2 py-3 w-full">
            <span className="scale-75">{airing ? <FaPlay /> : <FaStop />}</span>
            {status}
          </div>
          <div className="badge badge-primary flex gap-2 py-3 w-full">
            <span className="scale-75">
              <FaStar />
            </span>
            {score}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

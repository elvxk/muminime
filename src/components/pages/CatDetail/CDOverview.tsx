interface IOverview {
  type: string;
  status: string;
  score: number;
  rank: number;
  popularity: number;
  year: string;
}

const CDOverview: React.FC<IOverview> = ({
  type,
  status,
  score,
  rank,
  popularity,
  year,
}) => {
  return (
    <div className="flex flex-wrap gap-2 m-4 border-2 border-primary justify-center sm:justify-evenly">
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Score
        </span>
        <span className="text-lg font-bold text-primary">{score}</span>
      </h1>
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Rank
        </span>
        <span className="text-lg font-bold text-primary">#{rank}</span>
      </h1>
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Popularity
        </span>
        <span className="text-lg font-bold text-primary">#{popularity}</span>
      </h1>
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Status
        </span>
        <span className="font-bold text-primary">{status}</span>
      </h1>
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Type
        </span>
        <span className="font-bold text-primary">{type}</span>
      </h1>
      <h1 className="flex flex-col gap-2 px-4 py-2 text-center">
        <span className="font-bold px-2 text-primary-content bg-primary">
          Year
        </span>
        <span className="font-bold text-primary">{year}</span>
      </h1>
    </div>
  );
};

export default CDOverview;

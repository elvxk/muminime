import { SyntheticEvent } from "react";

interface IPagination {
  page: number;
  data: any;
  setPage: any;
}

const Pagination: React.FC<IPagination> = ({ page, data, setPage }) => {
  const handlePage = (e: SyntheticEvent, destination: string) => {
    e.preventDefault();
    if (destination == "prev") {
      setPage(page - 1);
    } else if (destination == "next") {
      setPage(page + 1);
    }
  };

  return (
    <div className="join">
      {page > 1 && (
        <button
          id="topprev"
          className="join-item btn"
          onClick={(e) => handlePage(e, "prev")}
        >
          «
        </button>
      )}
      <button className="join-item btn">
        Page {page} / {data.pagination?.last_visible_page}
      </button>
      {data.pagination?.has_next_page && (
        <button
          className="join-item btn"
          onClick={(e) => handlePage(e, "next")}
        >
          »
        </button>
      )}
    </div>
  );
};
export default Pagination;

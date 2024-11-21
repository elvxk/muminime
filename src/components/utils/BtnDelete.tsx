"use client";

import axios from "axios";
import { SyntheticEvent } from "react";

interface BtnDelete {
  mal_id: string;
  user_email: string;
}

const BtnDelete = (data: BtnDelete) => {
  const handleDelete = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await axios
      .delete("/api/v1/collection", {
        data: {
          mal_id: data.mal_id,
          user_email: data.user_email,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
    if (res.isDeleted) {
      window.location.reload();
    }
  };
  return (
    <button
      className="btn btn-primary btn-outline btn-sm w-full"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};
export default BtnDelete;

import axios from "axios";
import rateLimit from "axios-rate-limit";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const api = rateLimit(axios.create(), {
  maxRequests: 1,
  perMilliseconds: 1000, // (1000 ms = 1 sec)
});

export const apiHit = async (url: string) => {
  const res = await api
    .get(`${API_URL}${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      if (e.response && e.response.status === 429) {
        console.error(
          "You have reached your request limit. Please try again later.",
        );
      } else {
        console.error("Error:", e.message);
        redirect("/404");
      }
    });
  return res;
};

export const apiHitNest = async (url: string) => {
  const res = await apiHit(url)
    .then((res) => {
      return res.data.flatMap((mumi: any) => mumi.entry);
    })
    .catch((e) => {
      if (e.response && e.response.status === 429) {
        console.error(
          "You have reached your request limit. Please try again later.",
        );
      } else {
        console.error("Error:", e.message);
        redirect("/404");
      }
    });
  return res;
};

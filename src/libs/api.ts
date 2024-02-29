import axios from "axios";
import rateLimit from "axios-rate-limit";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const api = rateLimit(axios.create(), {
  maxRequests: 1, // Jumlah maksimum permintaan
  perMilliseconds: 1000, // Periode waktu dalam milidetik (misalnya, 1000 ms = 1 detik)
});

export const apiHit = (url: string) => {
  const res = api
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
      }
    });
  return res;
};

export const apiHitNest = (url: string) => {
  const res = apiHit(url)
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
      }
    });
  return res;
};

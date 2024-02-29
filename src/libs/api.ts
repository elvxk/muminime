import axios from "axios";
import rateLimit from "axios-rate-limit";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const api = rateLimit(axios.create(), {
  maxRequests: 3, // Jumlah maksimum permintaan
  perMilliseconds: 1000, // Periode waktu dalam milidetik (misalnya, 1000 ms = 1 detik)
});

export const apiHit = async (url: string) => {
  const res = api
    .get(`${API_URL}${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
  return res;
};

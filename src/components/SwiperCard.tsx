"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IAnime {
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
const SwiperCard = ({ data }: { data: IAnime[] }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.map((api: IAnime, i: number) => {
        return (
          <SwiperSlide key={i}>
            <Link
              href={`/${api.mal_id}`}
              className="h-[168px] border-4 duration-700 hover:border-primary border-transparent group card w-full bg-neutral shadow-xl transition-all"
            >
              <figure className="relative max-h-96 rounded-xl">
                <Image
                  src={api.images.webp.image_url}
                  alt={api.title}
                  width={420}
                  height={420}
                  placeholder="blur"
                  blurDataURL={api.images.webp.image_url}
                  className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
                />
                <h1 className="absolute bottom-0 text-sm w-full bg-neutral text-primary font-bold p-2">
                  {api.title}
                </h1>
              </figure>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperCard;

import Image from "next/image";
const CDImage = ({ img, alt }: { img: string; alt?: string }) => {
  return (
    <div className="m-4 sm:me-8 sm:float-left items-center flex justify-center">
      <Image
        src={img}
        alt={alt ? alt : img}
        width={420}
        height={420}
        placeholder="blur"
        blurDataURL={img}
        className="w-[250px] rounded-lg object-cover h-auto group-hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};
export default CDImage;

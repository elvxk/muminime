import { GiMummyHead } from "react-icons/gi";
const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <GiMummyHead className="text-primary animate-bounce text-6xl" />
      <h1 className="text-primary flex gap-2 items-center font-bold justify-center">
        Loading
        <span className="loading loading-dots loading-xs" />
      </h1>
    </div>
  );
};
export default Loading;

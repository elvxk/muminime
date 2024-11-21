"use client";
import YouTube from "react-youtube";

const YtPlayer = ({ ytid }: { ytid: string }) => {
  const options = {
    width: "320",
    height: "180",
  };

  return (
    <YouTube
      videoId={ytid}
      onReady={(e: { target: { pauseVideo: () => any } }) =>
        e.target.pauseVideo()
      }
      opts={options}
    />
  );
};
export default YtPlayer;

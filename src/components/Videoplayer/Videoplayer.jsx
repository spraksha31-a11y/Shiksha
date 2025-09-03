import React, { useRef } from "react";
import "./Videoplayer.css";
import video_src from "../../assets/Yash_Radhika.mp4";

const Videoplayer = ({ Playstate, setPlaystate }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlaystate(false);
    }
  };

  return (
    <div
      className={`video-player ${Playstate ? " " : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video_src} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;

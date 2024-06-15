import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    width: "100%",
    borderRadius: "2rem",
  };

  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div>
        <div
          style={{
            maxWidth: "400px",
            maxHeight: "300px",
            margin: "auto",
            marginTop: "12px",
            minHeight: "20vh",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={videoReady}
          />
        </div>
      </div>
    </>
  );
};

export default YoutubePlayer;
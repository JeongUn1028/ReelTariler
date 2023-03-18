import React from "react";
import YouTube from "react-youtube";
import ids from "../../../channelId/ids";
import { useState, useEffect } from "react";
import {
  YOUTUBEURL,
  PLAYLISTS,
  apiKey,
  PLAYLISTSITEMS,
} from "../../../API/apis";

const HeaderMovie = () => {
  useEffect(() => {
  }, []);

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "460px",
          playerVars: {
            autoplay: 0, //자동재생 O
            rel: 0,
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </div>
  );
};

export default HeaderMovie;

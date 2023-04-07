import React from "react";
import ReactPlayer from "react-player";
import ids from "../../channelId/ids";
import Playlist from './Playlist';

const Player = ({viedoiId}) => {
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${viedoiId}`}
        width="100%"
        height="460px"
        muted={false}
        playing={false}
        loop={false}
      />
      {Playlist(ids.MarvelKorea)}
    </div>
  );
};

export default Player;

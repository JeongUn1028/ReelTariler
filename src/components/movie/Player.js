import React from "react";
import ReactPlayer from "react-player";
import { YOUTUBEURL } from "../../API/apis";
import { PlaylistItems } from "../../API/PlaylistItems";
import ids from "../../channelId/ids";
import Playlist from './Playlist';

const Player = ({width, height}) => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qT_fjEgPsaA"
        width={width}
        height={height}
        muted={false}
        playing={false}
        loop={false}
      />
      {Playlist(ids.MarvelKorea)}
    </div>
  );
};

export default Player;

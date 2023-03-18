import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import ids from "../../../channelId/ids";
import { useState, useEffect } from "react";
import {
  YOUTUBEURL,
  PLAYLISTS,
  apiKey,
  PLAYLISTSITEMS,
} from "../../../API/apis";

// UCSB5FOwUVnAhGo_o99IhxYA

const HeaderMovie = () => {

  const [plistItems, setPlistItems] = useState({});
  const [plist, setPlist] = useState({});
  const [videoId, setVideoId] = useState("");
  const [plistId, setPlistId] = useState("");

  const Playlist = async () => {
    try {
      const json = await (
        await fetch(
          `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.MarvelKorea}&part=snippet`
        )
      ).json();
      const plistId = json.items;
      const plistsId = plistId[0].id
    } catch (err) {
      console.log(err);
    }
    try {
      const json = await (
        await fetch(
          `${YOUTUBEURL}${PLAYLISTSITEMS}?key=${apiKey}&playlistId=${plistId}&part=snippet`
        )
      ).json();
      console.log(json);
      setVideoId(json.items[0].snippet.resourceId.videoId);
    } catch (err) {
      console.log(err);
    }
  };

  // const PlaylistItems = async ({plistsId}) => {
  //   console.log(plistsId);
  //   try {
  //     const json = await (
  //       await fetch(
  //         `${YOUTUBEURL}${PLAYLISTSITEMS}?key=${apiKey}&playlistId=${plistsId}&part=snippet`
  //       )
  //     ).json();
  //     console.log(json);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    Playlist();
    // PlaylistItems();
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
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
      {/* <Player width="960px" height="400px"/> */}
    </div>
  );
};

export default HeaderMovie;

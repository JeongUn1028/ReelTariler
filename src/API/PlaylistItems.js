import { YOUTUBEURL, PLAYLISTSITEMS, apiKey } from "./apis";
import { useState } from "react";
import Playlist from "../components/movie/Playlist";

export const PlaylistItems = async ({ channelId }) => {
  const [plistItems, setPlistItems] = useState([]);
  const id = Playlist(channelId)[0];
  const json = await (
    await fetch(
      `${YOUTUBEURL}${PLAYLISTSITEMS}?key=${apiKey}&playlistId=${id}&part=snippet`
    )
  ).json();
  setPlistItems(json);
console.log("PlaylistItem");
  const videoId = plistItems.items?.snippet.resourceId.videoId;
  console.log(videoId);
  return videoId;
};

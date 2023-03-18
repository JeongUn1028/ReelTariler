import { apiKey, PLAYLISTS, YOUTUBEURL } from "./apis";
import { useState } from "react";

export const Playlists = async ({channelId}) => {
  const [playlists, setPlaylists] = useState([]);

  const json = await (
    await fetch(
      `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${channelId}&maxResults=50&part=snippet`
    )
  ).json();
  setPlaylists(json);
  const id = playlists.items?.id;
  const title = playlists.items?.snippet.title;
  console.log("Playlist");
  console.log(id, title);
  
  return [id, title];
};


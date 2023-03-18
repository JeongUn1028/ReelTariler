import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ids from "../../channelId/ids";
import { apiKey, YOUTUBEURL, PLAYLISTS } from "../../API/apis";
import ClickMovie from "../part/ClickMovie";

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 240px;
  height: 160px;
  padding-right: 45px;
`;

const Title = styled.p`
  color: white;
`;
const Thumbnail = () => {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [modal, setModal] = useState(false);
  const outside = useRef();

  const getPlaylist = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.MarvelKorea}&maxResults=50&part=snippet,contentDetails`
      )
    ).json();
    setPlaylist(json);
    setLoading(false);
    // console.log(json);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <Div>
      {playlist.items?.map((e) => (
        <div key={e.etag} onClick={() => setModal(true)}>
          {modal && (
        <div
          ref={outside}
          onClick={(e) => {
            if (e.target === outside.current) setModal(false);
          }}
        >
          <ClickMovie />
        </div>
      )}
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
    </Div>
  );
};
export default Thumbnail;

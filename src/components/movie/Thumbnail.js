import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ids from "../../channelId/ids";
import { apiKey, YOUTUBEURL, PLAYLISTS, PLAYLISTSITEMS } from "../../API/apis";
import ClickMovie from "../part/Modal";
import Modal from "react-modal";
import PlayMovie from "./PlayMovie";
import { FaStar} from 'react-icons/fa'


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
  width: 240px;
  color: white;
  word-wrap: normal;
  text-align: center;
  padding-right: 40px;
`;
//모달 스타일
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    zIndex: 10,
    overflow: "hidden",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    border: "none",
    color: "white",
    borderRadius: "20px",
    overflowy: "scroll",
    WebkitOverflowScrolling: "touch",
    zIndex: 10,
    width: "80%",
    marginLeft: "85px",
  },
};

const ModalHeader = styled.div`
  width: 100%;
`;
const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ModalStory = styled.div`
  text-align: center;
  width: 50%;
`;

const ModalInfo = styled.div`
  text-align: center;
  width: 50%;
`;

const Btn = styled.div`
  font-size: 18px;
`
const ModalPlaylist = styled.div``;
const Thumbnail = () => {
  const [marvelPlaylist, setMarvelPlaylist] = useState([]);
  const [cjenmPlaylist, setCjenmPlaylist] = useState([]);
  const [centryPlaylist, setCentryPlaylist] = useState([]);
  const [warnerPlaylist, setWarnerPlaylist] = useState([]);
  const [showboxPlaylist, setShowboxPlaylist] = useState([]);
  const [marvelPlistItem, setMarvelPlistItem] = useState([]);
  const [modal, setModal] = useState(false);

  const getPlaylistMarvel = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.MarvelKorea}&maxResults=10&part=id,snippet`
      )
    ).json();
    setMarvelPlaylist(json);
  };
  const getPlistItems = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTSITEMS}?key=${apiKey}&playlistId=PL9ArOU7415dI9obxf4d-5ezi01fW8XBiv&maxResults=10&part=id,snippet`
      )
    ).json();
    console.log(json);
    setMarvelPlistItem(json);
  };

  const getPlaylistCJENM = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.CJENM}&maxResults=10&part=snippet`
      )
    ).json();
    setCjenmPlaylist(json.items);
  };

  const getPlaylistCentry = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.centryFox}&maxResults=10&part=snippet,contentDetails`
      )
    ).json();
    setCentryPlaylist(json.items);
  };

  const getPlaylistWarner = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.WarnerB}&maxResults=10&part=snippet,contentDetails`
      )
    ).json();
    setWarnerPlaylist(json.items);
  };

  const getPlaylistShowbox = async () => {
    const json = await (
      await fetch(
        `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&channelId=${ids.ShowBox}&maxResults=10&part=snippet,contentDetails`
      )
    ).json();
    setShowboxPlaylist(json.items);
  };

  useEffect(() => {
    getPlaylistMarvel();
    getPlistItems();
    getPlaylistCJENM();
    getPlaylistCentry();
    getPlaylistWarner();
    getPlaylistShowbox();
  }, []);
  // console.log(marvelPlistItem);
  return (
    <Div>
      {marvelPlaylist.items?.map((e) => (
        <div key={e.etag} onClick={() => setModal(true)}>
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
      {cjenmPlaylist?.map((e) => (
        <div key={e.etag}>
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
      {centryPlaylist?.map((e) => (
        <div key={e.etag}>
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
      {warnerPlaylist?.map((e) => (
        <div key={e.etag}>
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
      {showboxPlaylist?.map((e) => (
        <div key={e.etag}>
          <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
          <Title>{e.snippet.title}</Title>
        </div>
      ))}
      {/* 모달영역 */}
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        ariaHideApp={false}
        style={modalStyle}
      >
        <ModalHeader>
          <PlayMovie videoId={"qT_fjEgPsaA"} />
        </ModalHeader>
        <ModalContent>
          <ModalStory>
            줄거리
            <div>내용내용내용</div>
          </ModalStory>
          <ModalInfo>
            영화정보
            <div>장르</div>
            <div>배우</div>
            <div>감독</div>
            <div>개봉일</div>
            <Btn><FaStar /></Btn>
          </ModalInfo>
        </ModalContent>
        <div>
          {marvelPlistItem.items?.map((e) => (
            <div key={e.tag}>
              <Img src={e.snippet.thumbnails.medium.url} alt="thumbnail"></Img>
              <Title>{e.snippet.title}</Title>
            </div>
          ))}
        </div>
      </Modal>
    </Div>
  );
};
export default Thumbnail;

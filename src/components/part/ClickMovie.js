import React, { useEffect } from "react";
import Modal from "react-modal";
import MoviesInfo from "../movie/MoviesInfo";
import PlayMovie from "../movie/PlayMovie";
import Playlist from "../movie/Playlist";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useState } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  overflow: scroll;
`;

const Div = styled.div`
  width: 100%;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
`;

const Story = styled.div`
  text-align: center;
  width: 50%;
`;

const Info = styled.div`
  text-align: center;
  width: 50%;
`;

const ClickMovie = () => {
  const apiKey = "b69ce63df91b692b402e8436d1099819";
  const [info, setInfo] = useState([]);
  const date = new Date();
  const YesterDay =
    date.getFullYear() +
    "" +
    (date.getMonth() + 1 + "").padStart(2, 0) +
    (date.getDate() - 1 + "");

  // const movieData = async () => {
  //   const json = await (
  //     await fetch(
  //       `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${YesterDay}`
  //     )
  //   ).json();
  //   setInfo(json);
  //   // console.log(json);
  // };

  useEffect(() => {
    // movieData();
    document.body.style =
      "background-color: black; margin:0px; padding: 0px; box-sizing: border-box; overflow:hidden";
    return () =>
      (document.body.style = `background-color: black; margin:0px; padding: 0px; box-sizing: border-box;overflow:auto`);
  }, []);
  return createPortal(
    <StyledModal>
      <Div>
        {/* <PlayMovie videoId="qT_fjEgPsaA" /> */}
        <Content>
          <Story>
            <div>줄거리</div>
            <div>
              ㄴㅁㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄴㅇㄹㄴㅁㄹㄴㄹㅁㄴㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㄹㄴㅁ
            </div>
          </Story>
          <Info>
            <div>영화 정보</div>
            <div>장르</div>
            <div>배우</div>
            <div>평점</div>
            <button>즐겨찾기</button>
          </Info>
        </Content>
        <div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
          <div>pl1</div>
        </div>
      </Div>
    </StyledModal>,
    document.getElementById("modal")
  );
};

export default ClickMovie;

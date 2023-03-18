import React, { useEffect } from "react";
import Modal from "react-modal";
import MoviesInfo from "../movie/MoviesInfo";
import PlayMovie from "../movie/PlayMovie";
import Playlist from "../movie/Playlist";
import styled from "styled-components";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
`;

const Div = styled.div`
  width: 100%;
  height: 1000px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const Content = styled.div`
    display: flex;
    width: 1000px;
    text-align: center;
`

const ClickMovie = () => {
  useEffect(() => {
    document.body.style =
      "background-color: black; margin:0px; padding: 0px; box-sizing: border-box; overflow:hidden";
    return () =>
      (document.body.style = `background-color: black; margin:0px; padding: 0px; box-sizing: border-box;overflow:auto`);
  }, []);
  return createPortal(
    <StyledModal>
      <Div>
        <PlayMovie videoId="qT_fjEgPsaA" />
        <Content>
          <div>줄거리</div>
          <div>영화 정보</div>
        </Content>
        <Div>Playlist</Div>
      </Div>
    </StyledModal>,
    document.getElementById("modal")
  );
};

export default ClickMovie;

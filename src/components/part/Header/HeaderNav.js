import React from "react";
import styled from "styled-components";
import { FaSistrix, FaStar, FaRegStar } from 'react-icons/fa'

const Div = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  color: Red;
  font-size: 40px;
  :hover {
    cursor: pointer;
  }
`;
const Icons = styled.div`
  color: white;
  font-size: 40px;
`;

const HeaderNav = () => {
    const movieId = localStorage.getItem("vdieoId");
  return (
    <Div>
      <Title onClick={() => window.location.reload()}>
        Catch movies
      </Title>
      <Icons><FaSistrix />{movieId===null ? <FaRegStar /> : <FaStar />}</Icons>
    </Div>
  );
};
export default HeaderNav;

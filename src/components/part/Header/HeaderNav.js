import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Div = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  color: Red;
  font-size: 35px;
  :hover {
    cursor: pointer;
  }
`;
const Btn = styled.div`
  text-align: center;
  font-size: 40px;
  color:white;
  :hover {
    cursor: pointer;
  }
`;

const HeaderNav = () => {
  const [length, setLength] = useState(localStorage.length === 0 ? false : true);
  //array 로 저장

  return (
    <Div>
      <Title onClick={() => window.location.reload()}>ReelTrailer</Title>
      <Btn>{length === false ? <FaRegStar /> : <FaStar />}</Btn>
    </Div>
  );
};
export default HeaderNav;

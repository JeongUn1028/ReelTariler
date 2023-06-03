import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Exp = styled.p`
  border-radius: 10px;
  font-size: 5px;
  width: 190px;
`;

const Btn = styled.button`
  width: 100%;
  height: 50px;
  background: black;
  border: none;
  border-radius: 12px;
  padding-top: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  :hover {
    background-color: white;
    color: black;
    ${Exp} {
      color: red;
      background-color: white;
      text-align: center;
    }
    span {
      width: 70%;
      background-color: white;
    }
  }
  :focus {
    background-color: lightgray;
    color: black;
    ${Exp} {
      background-color: lightgray;
      color: red;
      text-align: center;
    }
    span {
      width: 70%;
      background-color: lightgray;
    }
  }
  ${Exp} {
    text-align: center;
    color: black;
    :hover {
      color: red;
    }
  }
`;

const SelectLeft = () => {
  const nav = useNavigate();

  const goNowPlayings = () => {
    nav('/nowplayings');
  };

  const goUpComings = () => {
    nav('/upcomings');
  };

  const goOtts = () => {
    nav('/otts');
  };
  return (
    <Div>
      <Btn onClick={goNowPlayings}>
        <span>최신 상영작</span>
        <Exp>* 개봉한지 2주일 안의 영화만 보여줍니다.</Exp>
      </Btn>
      <Btn onClick={goUpComings}>
        <span>상영 예정작</span>
        <Exp>* 상영까지 2주일 남은 예고편들을 보여줍니다.</Exp>
      </Btn>
      <Btn onClick={goOtts}>
        <span>OTTs</span>
        <Exp>* Netflix, Disney 등의 ott 들을 보여줍니다.</Exp>
      </Btn>
    </Div>
  );
};

export default SelectLeft;

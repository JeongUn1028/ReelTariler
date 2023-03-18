import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Exp = styled.p`
    font-size: 8px;
`

const Btn = styled.button`
  width: 100%;
  height: 50px;
  background: black;
  border: none;
  border-radius: 10px;
  padding-top: 10px;
  font-size: 18px;
  color: white;
  :hover {
    background-color: white;
    color: black;
    ${Exp} {
        color: red;
    }
  }
  ${Exp} {
    color: black;
    :hover {
        color: red;
    }
  }
`;



const Button = ({ name, index }) => {
  const explain = [
     "*3일 내에  예고편만 보여줍니다.",
     "*개봉한지 1주일 안의 영화만 보여줍니다.",
     "*상영까지 1주일만 남은 예고편들을 보여줍니다.",
     "*Netflix, Tving 등의 ott 들을 보여줍니다.",
];
  return (
    <Container>
      <Btn><span>{name}</span><Exp>{explain[index]}</Exp></Btn>
    </Container>
  );
};

export default Button;

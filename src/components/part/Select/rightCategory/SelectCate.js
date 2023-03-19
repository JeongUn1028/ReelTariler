import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color:white;
    text-align: center;
    padding-top:20px;
`

const SelectCate = () => {
  const genre = [
    "액션 |",
    "모험 |",
    "예술 |",
    "코미디 |",
    "드라마 |",
    "다큐멘터리 |",
    "교육 |",
    "판타지 |",
    "누아르 |",
    "공포 |",
    "미스터리 |",
    "SF |",
    "로맨스 |",
    "과학",
  ];
  const dialog = [
    "전체관람가 |",
    "12세 관람가 |",
    "15세 관람가 |",
    "청소년 관람불가",
  ];
  
  return (
    <Div>
      <div>
        국내 | 국외
      </div>
      <div>
        {genre.map((e, i) => (
          <span key={i}>{e} </span>
        ))}
      </div>
      <div>
        {dialog.map((e, i) => (
          <span key={i}>{e} </span>
        ))}
      </div>
      <div>
        <input type="range"></input>
      </div>
    </Div>
  );
};

export default SelectCate;

import React from "react";
import styled from "styled-components";
import Button from "../../lib/Button";

const Div = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SelectLeft = () => {
  return (
    <Div>
      <Button name={"새로나온 예고편"} index={0} />
      <Button name={"최신 개봉작"} index={1} />
      <Button name={"상영 까지 1주일"} index={2}/>
      <Button name={"OTT"} index={3} />
    </Div>
  );
};

export default SelectLeft;

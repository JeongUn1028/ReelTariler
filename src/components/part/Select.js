import React from "react";
import SelectLeft from "./Select/SelectLeft";
import SelectRight from "./Select/SelectRight";
import styled from "styled-components";

const SelectBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 240px;
`;

const Select = () => {
  return (
    <SelectBody>
      <SelectLeft />
      <SelectRight />
    </SelectBody>
  );
};

export default Select;

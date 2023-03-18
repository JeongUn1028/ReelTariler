import React from "react";
import styled from "styled-components";
import HeaderMovie from "./Header/HeaderMovie";
import HeaderNav from "./Header/HeaderNav";

const Div = styled.div`
  width: 100%;
  height: 500px;
  margin:0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Div>
      <HeaderNav />
      <HeaderMovie />
    </Div>
  );
};

export default Header;

import React from "react";
import Header from "./components/part/Header";
import Movies from "./components/part/Movies";
import Footer from "./components/part/Footer";
import Select from "./components/part/Select";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Select />
      <Movies />
      <Footer />
    </Wrapper>
  );
};

export default App;

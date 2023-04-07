import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const Footer = () => {
  return (
    <Div>
      <Content>Created By: 이정운</Content>
      <Content>|</Content>
      <Content>제휴제안</Content>
      <Content>|</Content>
      <Content>이용약관</Content>
      <Content>|</Content>
      <Content>고객센터</Content>
    </Div>
  );
};

export default Footer;

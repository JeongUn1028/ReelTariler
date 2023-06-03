import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { otts } from '../API/otts';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  margin-left: 40px;
`;

const Img = styled.img`
  width: 200px;
  height: 260px;
`;

const Title = styled.p`
  width: 240px;
  color: white;
  word-wrap: normal;
  text-align: center;
  padding-right: 50px;
  margin-top: 10px;
`;

const Div = styled.div`
  width: 218px;
  height: 300px;
  margin: 8px 8px 20px 8px;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const Otts = () => {
  const [netflix, setNetflix] = useState({});
  const [wavve, setWavve] = useState({});
  const [diseny, setDiseny] = useState({});
  const getOtts = useCallback(() => {
    //netflix
    otts(8).then((res) => {
      setNetflix(res);
    });
    //diseny
    otts(337).then((res) => {
      setDiseny(res);
    });
    //wavve
    otts(356).then((res) => {
      setWavve(res);
    });
  }, []);
  useEffect(() => {
    getOtts();
  }, []);
  return (
    <Wrapper>
      {netflix === false ? (
        <h1>Loading...</h1>
      ) : (
        netflix.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>
              OTT : NETFLIX
              <br />
              제목 : {e.name}
            </Title>
          </Div>
        ))
      )}
      {wavve === false ? (
        <h1>Loading...</h1>
      ) : (
        wavve.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>
              OTT : WAVVE
              <br />
              제목 : {e.name}
            </Title>
          </Div>
        ))
      )}
      {diseny === false ? (
        <h1>Loading...</h1>
      ) : (
        diseny.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>
              OTT : WAVVE
              <br />
              제목 : {e.name}
            </Title>
          </Div>
        ))
      )}
    </Wrapper>
  );
};

export default Otts;

import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { nowPlayings } from '../API/nowPlayings';
import dayjs from 'dayjs';
import MovieModal from '../components/movie/MovieModal';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  margin-left: 40px;
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

const NowPlaying = () => {
  const [nowPlay, setNowPlay] = useState({});
  const [nowPlay1, setNowPlay1] = useState({});
  const [nowPlay2, setNowPlay2] = useState({});
  const [nowPlay3, setNowPlay3] = useState({});

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [overView, setOverView] = useState('');
  const [realese, setRealese] = useState('');
  const [gerne, setGerne] = useState([]);
  const [voteRate, setVoteRate] = useState(0);
  const [modal, setModal] = useState(false);
  const [movieId, setMovieId] = useState({});

  const later = dayjs().add(14, 'd').format('YYYY-MM-DD');
  const today = dayjs().format('YYYY-MM-DD');
  const ago = dayjs().subtract(14, 'd').format('YYYY-MM-DD');

  const getNowPlayings = useCallback(() => {
    nowPlayings(1).then((res) => {
      setNowPlay1(res);
    });

    nowPlayings(2).then((res) => {
      setNowPlay2(res);
    });

    nowPlayings(3).then((res) => {
      setNowPlay3(res);
    });
  }, []);
  useEffect(() => {
    getNowPlayings();
  }, []);
  return (
    <Wrapper>
      {nowPlay1 === false ? (
        <h2>Loading...</h2>
      ) : (
        nowPlay1.results?.map((e) => {
          if (ago <= e.release_date && e.release_date <= today) {
            return (
              <Div
                key={e.id}
                onClick={() => {
                  setMovieId(e.id);
                  setImage(e.poster_path);
                  setTitle(e.title);
                  setOverView(e.overview);
                  setGerne(e.genre_ids);
                  setRealese(e.release_date);
                  setVoteRate(e.vote_average);
                  setModal(true);
                }}
              >
                <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
                <Title>
                  개봉일 : {e.release_date}
                  <br></br>제목 : {e.title}
                </Title>
              </Div>
            );
          }
        })
      )}
      {nowPlay2 === false ? (
        <h2>Loading...</h2>
      ) : (
        nowPlay2.results?.map((e) => {
          if (ago <= e.release_date && e.release_date <= today) {
            return (
              <Div
                key={e.id}
                onClick={() => {
                  setMovieId(e.id);
                  setImage(e.poster_path);
                  setTitle(e.title);
                  setOverView(e.overview);
                  setGerne(e.genre_ids);
                  setRealese(e.release_date);
                  setVoteRate(e.vote_average);
                  setModal(true);
                }}
              >
                <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
                <Title>
                  개봉일 : {e.release_date}
                  <br></br>제목 : {e.title}
                </Title>
              </Div>
            );
          }
        })
      )}
      {nowPlay3 === false ? (
        <h2>Loading...</h2>
      ) : (
        nowPlay3.results?.map((e) => {
          if (ago <= e.release_date && e.release_date <= today) {
            return (
              <Div
                key={e.id}
                onClick={() => {
                  setMovieId(e.id);
                  setImage(e.poster_path);
                  setTitle(e.title);
                  setOverView(e.overview);
                  setGerne(e.genre_ids);
                  setRealese(e.release_date);
                  setVoteRate(e.vote_average);
                  setModal(true);
                }}
              >
                <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
                <Title>
                  개봉일 : {e.release_date}
                  <br></br>제목 : {e.title}
                </Title>
              </Div>
            );
          }
        })
      )}
    </Wrapper>
  );
};

export default NowPlaying;

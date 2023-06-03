import React, { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { upComings } from '../../API/upComings';
import { nowPlayings } from '../../API/nowPlayings';
import { movies } from '../../API/getMovieKeys';
import MovieModal from './MovieModal';
import { otts } from '../../API/otts';

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

const Poster = () => {
  //movies
  const [upcoming, setUpcoming] = useState({});
  const [nowPlay, setNowPlay] = useState({});
  const [nowPlay1, setNowPlay1] = useState({});
  const [nowPlay2, setNowPlay2] = useState({});
  const [nowPlay3, setNowPlay3] = useState({});
  const [movieId, setMovieId] = useState({});
  //otts
  const [netflix, setNetflix] = useState({});
  const [wavve, setWavve] = useState({});
  const [diseny, setDiseny] = useState({});

  const [modal, setModal] = useState(false);

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [overView, setOverView] = useState('');
  const [realese, setRealese] = useState('');
  const [gerne, setGerne] = useState([]);
  const [voteRate, setVoteRate] = useState(0);
  const later = dayjs().add(14, 'd').format('YYYY-MM-DD');
  const today = dayjs().format('YYYY-MM-DD');
  const ago = dayjs().subtract(14, 'd').format('YYYY-MM-DD');

  const getUpComings = useCallback(() => {
    upComings().then((res) => {
      setUpcoming(res);
    });
  }, []);

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

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    getUpComings();
    getNowPlayings();
    getOtts();
  }, []);
  return (
    <Wrapper>
       {upcoming === false ? (
        <h2>Loading...</h2>
      ) : (
        upcoming.results?.map((e) => {
          if (e.release_date <= later) {
            return (
              <Div
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
                  개봉예정일 : {e.release_date}
                  <br></br>제목 : {e.title}
                </Title>
              </Div>
            );
          }
        })
      )}
      {nowPlay1 === false ? (
        <h2>Loading...</h2>
      ) : (
        nowPlay1.results?.map((e) => {
          if (ago <= e.release_date && e.release_date <= today) {
            return (
              <Div
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
      {netflix === false ? (
        <h1>Loading...</h1>
      ) : (
        netflix.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>OTT : NETFLIX<br/>제목 : {e.name}</Title>
          </Div>
        ))
      )}
      {wavve === false ? (
        <h1>Loading...</h1>
      ) : (
        wavve.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>OTT : WAVVE<br/>제목 : {e.name}</Title>
          </Div>
        ))
      )}
      {diseny === false ? (
        <h1>Loading...</h1>
      ) : (
        diseny.results?.map((e) => (
          <Div key={e.videoId}>
            <Img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></Img>
            <Title>OTT : WAVVE<br/>제목 : {e.name}</Title>
          </Div>
        ))
      )}
      <MovieModal
        open={modal}
        title={title}
        image={image}
        videoId={movieId}
        close={close}
        overview={overView}
        genre={gerne}
        realese={realese}
        voteRate={voteRate}
      />
    </Wrapper>
  );
};

export default Poster;

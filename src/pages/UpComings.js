import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { upComings } from '../API/upComings';
import dayjs from 'dayjs';

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

const UpComings = () => {
  const [upcoming, setUpcoming] = useState({});
  const [movieId, setMovieId] = useState({});
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [overView, setOverView] = useState('');
  const [realese, setRealese] = useState('');
  const [gerne, setGerne] = useState([]);
  const [voteRate, setVoteRate] = useState(0);
  const [modal, setModal] = useState(false);

  const later = dayjs().add(14, 'd').format('YYYY-MM-DD');
  const today = dayjs().format('YYYY-MM-DD');
  const ago = dayjs().subtract(14, 'd').format('YYYY-MM-DD');

  const getUpComings = useCallback(() => {
    upComings().then((res) => {
      setUpcoming(res);
    });
  }, []);

  useEffect(() => {
    getUpComings();
  }, []);
  return (
    <Wrapper>
      {upcoming === false ? (
        <h2>Loading...</h2>
      ) : (
        upcoming.results?.map((e) => {
          if (e.release_date <= later) {
            return (
              <Div key={e.id}
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
    </Wrapper>
  );
};

export default UpComings;

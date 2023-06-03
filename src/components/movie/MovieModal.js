import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FaStar, FaRegStar } from 'react-icons/fa';
import PlayMovie from './PlayMovie';
import { getMovieList } from '../../API/getMovieList';
import MovieIdsContext from '../../contexts/bookMarkIds';

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    zIndex: 10,
    overflow: 'hidden',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    borderRadius: '20px',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    zIndex: 10,
    width: '80%',
    marginLeft: '150px',
  },
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Btn = styled.div`
  text-align: center;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;

const Plist = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const PlistItems = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  justify-content: left;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;
const PlistItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
`;
const PlistItemsTitle = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding-right: 40px;
  word-wrap: normal;
`;
const Img = styled.img`
  width: 240px;
  height: 160px;
  padding-right: 45px;
`;
const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Overview = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;
const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 15px;
`;
const InfoList = styled.li`
  margin: 15px;
  list-style: none;
`;
const Warning = styled.div`
  color: red;
`;

const MovieModal = (props) => {
  const TMDBURL = 'https://api.themoviedb.org/3/movie';

  // eslint-disable-next-line no-unused-vars
  const [movieId, setMovieId] = useState([]);
  const [bookmark, setBookmark] = useState(false);
  const [headerMovie, setHeaderMovie] = useState('');
  const [firstMovie, setFirstMovie] = useState({});
  const [secMovie, setSecMovie] = useState({});
  const [thirdMovie, setThirdMovie] = useState({});
  const [fourMovie, setFourMovie] = useState({});
  const [fifthMovie, setFifthMovie] = useState({});
  const { movieIds, setMovieIds, deleteMovieId } = useContext(MovieIdsContext);
  const getMovieKey = async () => {
    let first;
    let second;
    let third;
    let fourth;
    let fifthx;
    await fetch(`
    ${TMDBURL}/${props.videoId}/videos?api_key=b69ce63df91b692b402e8436d1099819&language=en
    `)
      .then((res) => res.json())
      .then((res) => {
        first = res.results[0].key;
        second = res.results[1].key;
        third = res.results[2].key;
        fourth = res.results[3].key;
        fifthx = res.results[4].key;
        setMovieId(() => res.results?.map((e) => e.key));
      });
    getMovieList(first).then((res) => setFirstMovie(res));
    getMovieList(second).then((res) => setSecMovie(res));
    getMovieList(third).then((res) => setThirdMovie(res));
    getMovieList(fourth).then((res) => setFourMovie(res));
    getMovieList(fifthx).then((res) => setFifthMovie(res));
  };

  useEffect(() => {
    getMovieKey(props);
    findGenre();
    setHeaderMovie('');
  }, [props]);

  const initialGenre = [
    { id: 28, name: '액션' },
    { id: 12, name: '모험' },
    { id: 16, name: '애니메이션' },
    { id: 35, name: '코미디' },
    { id: 80, name: '범죄' },
    { id: 99, name: '다큐멘터리' },
    { id: 18, name: '드라마' },
    { id: 10751, name: '가족' },
    { id: 14, name: '판타지' },
    { id: 36, name: '역사' },
    { id: 27, name: '공포' },
    { id: 10402, name: '음악' },
    { id: 9648, name: '미스테리' },
    { id: 10749, name: '로맨스' },
    { id: 878, name: '공상과학' },
    { id: 10770, name: 'TV 영화' },
    { id: 53, name: '스릴러' },
    { id: 10752, name: '전쟁' },
    { id: 37, name: '서부' },
  ];

  const findGenre = () => {
    const newArr = [];
    for (let i = 0; i < props.genre.length; i++) {
      for (let y = 0; y < initialGenre.length; y++) {
        props.genre[i] === initialGenre[y].id && newArr.push(initialGenre[y].name);
      }
    }
    return newArr.toString();
  };

  // bookMark setting
  const onClick = () => {
    if (localStorage.getItem(props.videoId) === null) {
      localStorage.setItem(props.videoId, JSON.stringify(props));
      setBookmark(true);
      setMovieIds((prev) => [...prev, props.videoId]);
    } else {
      console.log(movieIds);
      localStorage.removeItem(props.videoId);
      setBookmark(false);
      deleteMovieId(props.videoId);
    }
  };
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={() => {
        props.close();
      }}
      ariaHideApp={false}
      style={modalStyle}
    >
      <ModalHeader>
        <Btn
          onClick={() => {
            onClick();
          }}
        >
          {movieIds.includes(props.videoId) === false ? <FaRegStar /> : <FaStar />}
        </Btn>
        <PlayMovie videoId={headerMovie} />
      </ModalHeader>
      <MiddleWrapper>
        <Overview>
          <h1>줄거리</h1>
          <div>{props.overview}</div>
        </Overview>
        <MovieInfo>
          <ul>
            <InfoList>제목: {props.title}</InfoList>
            <InfoList>개봉일: {props.realese}</InfoList>
            <InfoList>장르: {findGenre()}</InfoList>
            <InfoList>평점: {props.voteRate}</InfoList>
            {props.voteRate === 0 && <Warning>* 투표수가 낮으면 평점이 0 으로 표시될 수도 있습니다.</Warning>}
          </ul>
        </MovieInfo>
      </MiddleWrapper>
      <Plist>
        {firstMovie.items?.map((e) => (
          <PlistItems onClick={() => setHeaderMovie(e.id)}>
            <Img src={e.snippet.thumbnails.medium.url}></Img>
            <PlistItemsInfo>
              <PlistItemsTitle>{e.snippet.title}</PlistItemsTitle>
            </PlistItemsInfo>
          </PlistItems>
        ))}
        {secMovie.items?.map((e) => (
          <PlistItems onClick={() => setHeaderMovie(e.id)} key={e.etag}>
            <Img src={e.snippet.thumbnails.medium.url}></Img>
            <PlistItemsInfo>
              <PlistItemsTitle>{e.snippet.title}</PlistItemsTitle>
            </PlistItemsInfo>
          </PlistItems>
        ))}
        {thirdMovie.items?.map((e) => (
          <PlistItems onClick={() => setHeaderMovie(e.id)}>
            <Img src={e.snippet.thumbnails.medium.url}></Img>
            <PlistItemsInfo>
              <PlistItemsTitle>{e.snippet.title}</PlistItemsTitle>
            </PlistItemsInfo>
          </PlistItems>
        ))}
        {fourMovie.items?.map((e) => (
          <PlistItems onClick={() => setHeaderMovie(e.id)}>
            <Img src={e.snippet.thumbnails.medium.url}></Img>
            <PlistItemsInfo>
              <PlistItemsTitle>{e.snippet.title}</PlistItemsTitle>
            </PlistItemsInfo>
          </PlistItems>
        ))}
        {fifthMovie.items?.map((e) => (
          <PlistItems onClick={() => setHeaderMovie(e.id)}>
            <Img src={e.snippet.thumbnails.medium.url}></Img>
            <PlistItemsInfo>
              <PlistItemsTitle>{e.snippet.title}</PlistItemsTitle>
            </PlistItemsInfo>
          </PlistItems>
        ))}
      </Plist>
    </Modal>
  );
};

export default MovieModal;

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FaStar, FaRegStar } from 'react-icons/fa';
import PlayMovie from './PlayMovie';
import { getMovieKeys } from '../../API/getMovieKeys';
import { getMovieList } from '../../API/getMovieList';

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
`;
const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
const InfoList = styled.li`
  margin: 4px;
  list-style: none;
`;

const Warning = styled.div`
  color: red;
`
const MovieModal = (props) => {
  const [movieId, setMovieId] = useState([]);
  const [bookmark, setBookmark] = useState(false);
  const [movieList, setMovieList] = useState({});

  const getMovieKey = useCallback(() => {
    getMovieKeys(props.videoId).then((res) => {
      setMovieId(res.results?.map((e) => e.key));
    });
  }, [props.videoId]);

  const getMoviesList = useCallback(() => {
    getMovieList('vBwj0QpKbSM').then((res) => {
      setMovieList((prev) => {
        return { ...prev, res };
      });
    });
  }, []);

  // async function getMoviessList() {
  //   const json = await Promise.all(
  //     movieId.map((e) => {
  //       return getMovieList(e);
  //     }),
  //   );
  //   console.log(json);
  // }

  useEffect(() => {
    getMovieKey();
    getMoviesList();
  }, []);

  // bookMark setting
  const onClick = () => {
    if (localStorage.getItem(props.videoId) === null) {
      localStorage.setItem(props.videoId, JSON.stringify(props));
      setBookmark(true);
    } else {
      localStorage.removeItem(props.videoId);
      setBookmark(false);
    }
  };
  console.log(movieId);
  console.log(movieList);
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
          {bookmark === false ? <FaRegStar /> : <FaStar />}
        </Btn>
        <PlayMovie videoId={'cYX2_lDYZpI'} />
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
            <InfoList>장르: {props.genre}</InfoList>
            <InfoList>평점: {props.voteRate}</InfoList>
            {props.voteRate === 0 &&(<Warning>투표수가 낮으면 평점이 0 으로 표시될 수도 있습니다.</Warning>)}
          </ul>
        </MovieInfo>
      </MiddleWrapper>
      <Plist>
        <PlistItems>
          <Img src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="thumbnail"></Img>
          <PlistItemsInfo>
            <PlistItemsTitle>{props.title}</PlistItemsTitle>
            <div>{props.title}</div>
          </PlistItemsInfo>
        </PlistItems>
      </Plist>
    </Modal>
  );
};

export default MovieModal;

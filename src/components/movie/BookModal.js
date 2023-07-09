import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import MovieIdsContext from '../../contexts/bookMarkIds';
import { FaStar, FaRegStar } from 'react-icons/fa';
import MovieModal from './MovieModal';

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
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    zIndex: 10,
    width: '80%',
    marginLeft: '150px',
  },
};

const NoBookMark = styled.h1`
  text-align: center;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BodyMain = styled.div`
  display: flex;
  border: 1px dotted white;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  width: 100%;
`;

const Img = styled.img`
  width: 150px;
  height: 195px;
  margin: 10px;
`;

const Descript = styled.div`
  width: 500px;
  height: 200px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
`;

const OverView = styled.div`
  height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyDeleteBtn = styled.button`
  color: white;
  margin-left: 20px;
  font-size: 40px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const BookModal = (props) => {
  const { movieIds, deleteMovieId } = useContext(MovieIdsContext);
  const [modal, setModal] = useState(false);

  //modal close
  const close = () => {
    setModal(false);
  };

  const deleteBookMark = (movieId) => {
    deleteMovieId(movieId);
    localStorage.removeItem(movieId);
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
      {movieIds.length !== 0 ? (
        <Wrapper>
          <HeaderWrapper>
            <Title>즐겨찾기 목록</Title>
          </HeaderWrapper>
          <BodyWrapper>
            {movieIds.map((e) => {
              const movieData = JSON.parse(localStorage.getItem(e));
              const {title, image, videoId, overview, realese, genre, voteRate} = movieData
              return (
                <>
                  <BodyMain onClick={() => setModal(true)} key={e.id}>
                    <Img src={`https://image.tmdb.org/t/p/w200/${movieData.image}`}></Img>
                    <Descript>
                      <div>제목 : {movieData.title}</div>
                      <br />
                      <div>개봉일 : {movieData.realese}</div>
                      <br />
                      <OverView>{movieData.overview}</OverView>
                    </Descript>
                    <BodyDeleteBtn onClick={() => deleteBookMark(movieData.videoId)}>
                      {movieIds.includes(movieData.videoId) ? <FaStar /> : <FaRegStar />}
                    </BodyDeleteBtn>
                  </BodyMain>
                  <MovieModal
                    open={modal}
                    close={close}
                    title={title}
                    image={image}
                    videoId={videoId}
                    overview={overview}
                    realese={realese}
                    genre={genre}
                    voteRate={voteRate}
                  />
                </>
              );
            })}
          </BodyWrapper>
        </Wrapper>
      ) : <NoBookMark>즐겨찾기 한 영상이 없습니다.</NoBookMark>}
    </Modal>
  );
};

export default BookModal;

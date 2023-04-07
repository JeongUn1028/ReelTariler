import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FaStar, FaRegStar } from 'react-icons/fa';
import PlayMovie from './PlayMovie';

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
    overflowy: 'scroll',
    WebkitOverflowScrolling: 'touch',
    zIndex: 10,
    width: '80%',
    marginLeft: '85px',
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

const BookModal = (props) => {
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
        <Btn>{window.localStorage.getItem(props.videoId) === null ? <FaRegStar /> : <FaStar />}</Btn>
        <PlayMovie videoId={props.videoId} />
      </ModalHeader>
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

export default BookModal;

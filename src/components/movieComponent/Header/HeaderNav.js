import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar } from 'react-icons/fa';
import BookModal from '../../movie/BookModal';
import MovieIdsContext from '../../../contexts/bookMarkIds';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  color: Red;
  font-size: 35px;
  :hover {
    cursor: pointer;
  }
`;
const Btn = styled.div`
  text-align: center;
  font-size: 40px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const HeaderNav = () => {
  const [modal, setModal] = useState(false);
  const { movieIds } = useContext(MovieIdsContext);
  const nav = useNavigate();

  const goHome = () => {
    nav('/');
  };

  const close = () => {
    setModal(false);
  };

  return (
    <Div>
      <Title onClick={goHome}>ReelTrailer</Title>
      <Btn
        onClick={() => {
          setModal(true);
        }}
      >
        {movieIds.length === 0 ? <FaRegStar /> : <FaStar />}
      </Btn>
      <BookModal open={modal} close={close} />
    </Div>
  );
};
export default HeaderNav;

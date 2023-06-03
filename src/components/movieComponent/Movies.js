import React from 'react';
import styled from 'styled-components';
import Poster from '../movie/Poster';

const Div = styled.div`
  width: 100%;
`;

const Movies = () => {
  return (
    <Div>
      <Poster />
    </Div>
  );
};

export default Movies;

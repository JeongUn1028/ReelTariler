import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../movie/Thumbnail'

const Div = styled.div`
    width: 100%;
`

const Movies = () => {
    return (
        <Div>
            <Thumbnail />
        </Div>
    );
};

export default Movies;
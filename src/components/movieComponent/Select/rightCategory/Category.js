import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    font-size: 20px;
    width: 20%;
    color:white;
`

const Category = () => {
    return (
        <Div>
            <span>국내 • 외</span>
            <span>장르</span>
            <span>관람등급</span>
        </Div>
    );
};

export default Category;
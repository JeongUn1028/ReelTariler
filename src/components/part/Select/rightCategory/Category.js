import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    font-size: 20px;
    width: 20%;
    color:white;
    padding-top:20px;
`

const Category = () => {
    return (
        <Div>
            <span>국내 • 외</span>
            <span>장르</span>
            <span>관람등급</span>
            <span>평점</span>
        </Div>
    );
};

export default Category;
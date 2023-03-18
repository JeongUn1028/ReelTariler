import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    color:white;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.div`
    color:Red;
    font-size: 2.3rem;

`
const Icons = styled.div`
    color:white;
    font-size: 2.1rem;
`

const HeaderNav = () => {
    return (
        <Div>
            <Title>
                Catch Movie
            </Title>
            <Icons>
                🔍  ★
            </Icons>
        </Div>
    );
};

export default HeaderNav;
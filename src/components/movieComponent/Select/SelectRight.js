import React from 'react';
import styled from 'styled-components';
import Category from './rightCategory/Category';
import SelectCate from './rightCategory/SelectCate';

const Div=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const SelectRight = () => {
    return (
        <Div>
            <Category />
            <SelectCate />
        </Div>
    );
};

export default SelectRight;
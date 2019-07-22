import React from 'react';
import styled from 'styled-components';

import { theme } from '../../constants'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${ props => props.theme.mainColor};
`;

const AvatarImage = styled.img`
    height: 40%;
    margin-top: 20%
    border: 2px solid white;
    padding-left: 0.25%;
    padding-bottom: 0.5%;
    padding-right: 0.25%;
    background-color: white;
    border-radius: 50%;
`;

const Dot = styled.img`
    height: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    background: white;
`;

export default (props) => {
    const { avatarSrc } = props;

    return (
        <HeaderWrapper theme={theme}>
            <AvatarImage src={avatarSrc}/>
            <Dot/>
        </HeaderWrapper>
    );
}
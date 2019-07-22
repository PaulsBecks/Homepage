import React from 'react';
import styled from 'styled-components';

import { theme } from '../../constants';
import { Icon, FloatingButton } from '..';

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    background: ${ props => props.theme.mainColor };
`;

const MenuHeader = styled.h5`
    display: inline-block;
    margin: 0.82em 0 0.656em;
    text-align: center;
    font-size: 1.64rem;
    font-weight: 300;
    letter-spacing: 5px;
    color: white;
`;

const MenuEmail = styled.a`
    text-decoration: none;
    letter-spacing: 0.125em;
    color: white;
`;

const SocialBar = styled.div`
    margin-top: 2em;

    button:not(:first-child) {
        margin-left: 0.5em;
    }
`;

export default (props) => {
    const { onClose } = props;

    return (
        <MenuWrapper theme={theme}>
            <MenuHeader >PAUL DAVID BECK</MenuHeader>
            <MenuHeader >JS Full Stack Developer at Lition Energy</MenuHeader>
            <MenuEmail href="mailto: paul.beck.berlin@gmail.com">paul.beck.berlin@gmail.com</MenuEmail>
            <SocialBar>
                <FloatingButton onClick={()=>window.location.assign("https://github.com/PaulsBecks")}>
                    <Icon.Github/>
                </FloatingButton>
                <FloatingButton onClick={()=>window.location.assign("https://www.linkedin.com/in/paul-david-beck-b29b1512b/")}>
                    <Icon.LinkedIn/>
                </FloatingButton>
                <FloatingButton onClick={()=>window.location.assign("https://stackoverflow.com/story/paulbeck")}>
                    <Icon.Stackoverflow/>
                </FloatingButton>
            </SocialBar>
            <FloatingButton isFixed bottom='5%' right='5%' onClick={onClose}>
                <Icon.Close/>
            </FloatingButton>
        </MenuWrapper>
    )
}
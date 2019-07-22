import React from 'react';
import styled from 'styled-components';

import theme from '../../constants/theme';

const RoundedButton = styled.button`
    position: ${props => props.isFixed ? 'fixed' : 'relative'};
    top: ${props => props.top};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    width: 66px;
    height: 66px;
    padding: 0;
    z-inex: 3;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    background: ${props => props.theme.secondaryColor};
    color: white;

    :focus {
        outline: none;
    }

    > svg {
        fill: white;
        width: 30;
        height: 30;
    }
`;

RoundedButton.displayName = 'RoundedButton';

export default (props) => {

    const { children } = props;

    return (
        <RoundedButton theme={theme} {...props}>
            {children}
        </RoundedButton>
    );
}
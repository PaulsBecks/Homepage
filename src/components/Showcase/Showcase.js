import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';


const ShowcaseCard = styled.div`
    position: relative;
    width: ${(props) => {
        if(props.size === "s" ) {
            return '22.5%';
        }
        if(props.size === "m" || props.size === "ml") {
            return '47.5%';
        }
        return '97.5%';
    }};
    padding-top: ${(props) => {
        if(props.size === "s" || props.size === "m") {
            return '40%';
        }
        if(props.size === "ml") {
            return '84.4%';
        }
        return '54.84375%';
    }};
    margin: 1.25%;
    overflow: hidden;

    @media (max-width: 700px){
        width: 100%;
        padding-top: ${(props) => {
            if(props.size === "s" || props.size === "ml") {
                return '177.77777%';
            }
            if(props.size === "m") {
                return '45%';
            }
            return '56.25%';
        }};
    }
`

const ShowcaseContent = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

const ShowcaseImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    opacity: ${ props => props.isVisible ? 1 : 0};
    transition: opacity 1s;
`;

const ShowcaseOverlay = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    opacity: ${ props => props.isHovered ? '1' : '0'};
    transition: opacity 1s;
`;

const ShowcaseTitle = styled.h4`
    text-align: center;
`;

const ShowcaseLink = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: ${props => props.theme.mainColor};
`;

export default function(props){
    const { title, link, images, size} = props;

    const [ imageVisible, setImageVisible] = useState(0);
    const [ isHovered, setIsHovered ] = useState(false);
    const [ timer, setTimer ] = useState(null);

    useEffect(() => {
        if(isHovered && !timer){
            setTimer(setTimeout(setImageVisible((imageVisible + 1) % images.length), 1000));
        }
        if(!isHovered && timer){
            clearTimeout(timer);
            setTimer(null);
        }
        return ()=>{};
    }, [imageVisible, isHovered, images])
    
    return (
        <ShowcaseCard size={size}>
            <ShowcaseContent>
                <div>
                    {
                        images.map(({url, name}, i)=> {
                            return <ShowcaseImage src={url} alt={name} isVisible={imageVisible === i}/>
                        })
                    }
                </div>
                <ShowcaseOverlay 
                    onMouseOver={()=>setIsHovered(true)} 
                    onFocus={()=>setIsHovered(true)} 
                    onMouseOut={()=>setIsHovered(false)} 
                    onBlur={()=>setIsHovered(false)}
                    isHovered={isHovered}
                >
                    <ShowcaseTitle>
                        <ShowcaseLink href={link} theme={theme}>
                            {title}
                        </ShowcaseLink>
                    </ShowcaseTitle>
                </ShowcaseOverlay>
            </ShowcaseContent>
        </ShowcaseCard>
    )
}
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Showcases } from '../../services/content';
import { inSuccession } from '../../services/helpers';
import { Showcase, AvatarHeader, FloatingButton, Icon, Menu } from '../../components'

const ShowcaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterImg = styled.img`
  width: 100%;
`;

export default function() {

  const [showcases, setShowcases] = useState([]);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(()=>inSuccession(Showcases.getAll, setShowcases), []);


  return (
    <div>
      <AvatarHeader avatarSrc='/static/img/paul.jpg'/>
      <ShowcaseContainer>
        {showcases.map(({title, link, images, size})=>{
          return (<Showcase title={title} link={link} images={images} size={size} />)
        })}
      </ShowcaseContainer>
      <FloatingButton onClick={()=>setIsMenuActive(true)} isFixed bottom='5%' right='5%'>
        {isMenuActive ? <Icon.Close/> : <Icon.Menu/>}
      </FloatingButton>
      {
        isMenuActive && <Menu onClose={()=>setIsMenuActive(false)}/>
      }
      <FooterImg src="/static/img/footer_img.jpg" alt="Paul Beck standing in front of the Olgas."/>
    </div>
  );
}

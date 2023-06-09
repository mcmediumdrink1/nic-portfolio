import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Photo from '../assets/images/polaroid.jpg'
import Video from '../assets/videos/nic-icaza-homepage-videobg.mp4'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay muted loop playsInline/>
        </HeroBg>
        <HeroContent>
            <HeroItems>
            <PhotoBg src={Photo} type="img/jpeg"/>
                <HeroP>
                Nic is an Austin, TX based data science professional with a strong focus on advancing creative momentum through technology and data.
                </HeroP>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer =  styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1rem;
position: relative;
margin-top:-96px;
color: #fff;
:before{
    content:"";
    position: absolute;
    top:0;
bottom: 0;
right: 0;
left: 0;
z-index: 2;
background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%,),linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%,)
}
`
const HeroBg =  styled.div`
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
height:100%;
width:100%;
justify-content: center;
align-items: center;
`

const VideoBg =  styled.video`
width:100%
height:100%
-o-object-fit: cover;
object-fit: cover;
`
const PhotoBg =  styled.img`
background: transparent;
max-width: 70vw;
max-height: 70vh;
padding-top: 100px;
object-fit: constrained;
justify-content: center;
align-items: center;
opacity: 0.80;

/*&:hover {
    transform: scale(1.01);
}*/
`
const HeroContent =  styled.div`
z-index: 3;
height: calc(100vh - 100px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) /2);
`
const HeroItems =  styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
max-height: 100%;
padding:0;
color:#fff;
line-height: 1.1;
line-weight: bold;
`
const HeroH1 =  styled.h1`
font-size: clamp(1.5rem, 6vw, 4rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
font-weight: bold;
padding: 0 1rem;

`
const HeroP =  styled.p`
font-size: clamp(.75rem, 1vw, 1.25rem);
margin-bottom: 2rem;
font-family: "Poppins",sans-serif;
fill: #F2EFE8;
letter-spacing: 0.2em;
`



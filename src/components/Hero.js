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
        <PhotoBg src={Photo} type="img/jpeg" />
            <HeroItems>

                <HeroH1>
                    Nic Icaza
                </HeroH1>
                <HeroP>
                    Creativity in Data
                </HeroP>

                <Button big="true" primary ="true" round="true">ITP Camp</Button>
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

`
const HeroBg =  styled.div`
background: green;
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
height:100%;
width:100%;
overflow:hidden;
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
max-width: 80vw;
max-height: 80vh;
object-fit: constrained;
justify-content: center;
align-items: center;
opacity: 0.85;
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
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;

`



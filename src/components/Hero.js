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
        <PhotoBg src={Photo} type="img/jpeg" />

 
        </HeroBg>
        <HeroContent>
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
background: #C0C6C6;
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
object-fit: constained;
`
const PhotoBg =  styled.img`
max-width: 80vw;
max-height: 80vh;
object-fit: constrained;
justify-content: center;
align-items: center;
`
const HeroContent =  styled.div`

`
const HeroItems =  styled.div`

`
const HeroH1 =  styled.h1`

`
const HeroP =  styled.p`

`



import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Photo from '../assets/images/polaroid.jpg'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBg>
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



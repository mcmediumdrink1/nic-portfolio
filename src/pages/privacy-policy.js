import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  aboutImage,
  thurmanImage
} from './index.module.css'
import styled from 'styled-components'


const AboutPage = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <HeroContainer>
        <Wrapper>
          <div>
            <AboutP1>
        <p>Raised in Galesburg, IL, a small and historic Midwestern town that flourished over time with inventors, poets, and entrepreneurs who have shaped life as we know it (among them, Carl Sandburg, George Washington Gale Ferris Jr., and Whitcomb L. Judson), Nic grew up with admiration for artistry and with an aspiration to rank among these creative forces.</p>


</AboutP1>
        </div>

</Wrapper>

<div>

</div>





      </HeroContainer>
    </Layout>

  )
}

export const Head = () => <title>About | Nic Icaza</title>

export default AboutPage

const HeroContainer =  styled.div`
min-height: 120vh;
max-height: 150vh;
padding: 1fr;
background: #181B2C;
color: #181B2C;
margin-top:-96px;
padding-top: 120px;
}
`
const Wrapper =  styled.div`
display:grid ;
grid-template-columns: 1fr;
grid-auto-rows: min-content;
padding: 0 2rem;
justify-items: center;
float: left;
position: relative;

@media screen and (max-width:868px) {
  grid-template-columns: 1fr;
  background: #181B2C;
}
`
const WrapperAlt =  styled.div`
background:#181B2C;
display:grid ;
grid-template-columns: 1fr 2fr;
padding: 0 2rem;
justify-items: center;
float: left;
position: relative;

@media screen and (max-width:868px) {
  grid-template-columns: 1fr;
}
`
const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;`

const AboutP1 = styled.p`
font-size: clamp(.75rem, 1vw, 1.5rem);
padding-right:24px;
`

const AboutP2 = styled.p`
font-size: clamp(.75rem, 1vw, 1.5rem);
padding-left:24px;
padding-bottom: 120px;
`
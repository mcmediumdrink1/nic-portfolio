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
    <Layout pageTitle="About">
      <HeroContainer>
        <Wrapper>
          <div>
            <AboutP1>
        <p>Raised in Galesburg, IL, a small and historic Midwestern town that flourished over time with inventors, poets, and entrepreneurs who have shaped life as we know it (among them, Carl Sandburg, George Washington Gale Ferris Jr., and Whitcomb L. Judson), Nic grew up with admiration for artistry and with an aspiration to rank among these creative forces.</p>
        <br /><p>Following in the footsteps of these pioneers, Nic moved to Chicago in 2011, where he attended Loyola University Chicago, studying marketing and advertising and eventually graduating with a B.B.A., Marketing (cum laude) in 2015.  The Windy City (and City of Broad Shoulders) has had a lasting impact on Nic to this day, and he still returns to the city yearly.</p>
        <br /><p>After college, Nic relocated to Memphis, TN where he embarked on developing his professional career. Nic has such a soft spot for Memphis and has considered the city a spiritual second-home since childhood when visiting with family. He asserts that you’ll find the best chicken wings in Memphis.</p>        <br/>

</AboutP1>
        </div>
        <StaticImage 
        alt="Photo of Texas Sunset Captured by Nic"
        src="../assets/images/sunset.png"
        placeholder="blurred"
        className={aboutImage}/>
        <br />


</Wrapper>
<WrapperAlt>

        <StaticImage
        src="../assets/images/thurman-the-fifty-three-percent-black-lab.png"
        placeholder="blurred"
        className={thurmanImage}
        />
                  <div>
        <AboutP2>
        <br /><p>In early 2021, Nic threw all caution to the wind and moved to Austin, TX, despite not having any friends or family in the city and still in the midst of the pandemic. Nic still resides in ATX with his best friend and companion, Thurman. According to the numbers, there are 14 distinct dog breeds found in Thurman’s DNA, which includes 53% Labrador Retriever, 13% German Shorthaired Pointer, and 8% English Setter.</p>
        <br /><p>When not chasing squirrels at the park with Thurman, Nic enjoys mixed-medium art (watercolor, acrylic, charcoal, pencil drawing) and he has recently taken up film photography (medium format 120 film). You may also find Nic noodling on the guitar, powerlifting, writing, baking bread and pastries from scratch, and daydreaming live concert productions as he listens to music on Spotify.</p>
        </AboutP2>
        </div>



</WrapperAlt>
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
padding: 5rem calc((100vw - 2000px)/2);
background: #181B2C;
color: #181B2C;
margin-top:-96px;
padding-top: 120px;
}
`
const Wrapper =  styled.div`
display:grid ;
grid-template-columns: 2fr 1fr;
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
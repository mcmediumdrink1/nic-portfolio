import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Main from './USN'
import styled from 'styled-components'
import Img from "gatsby-image"
import {
  dashboardImage
} from './index.module.css'


const WorkPage = () => {
  return (
    <Layout pageTitle="Work">
      <Work>
      <Wrapper>

        <StaticImage 
        src='../assets/images/usaf-integrated-marketing-channel-dashboard.png'
        className={dashboardImage}
        />
<WorkP1>
<p>Pictured above is a sample dashboard designed for USAF Recruiting to encompass cross-channel marketing performance. Please note that the charts shown above include only mock sample data and do not reflect true performance in order to protect sensitive client information.</p>
      <br /><p>Data analytics often feels esoteric and confounding to the very people who benefit most from its understanding. In other words, measuring and interpreting data is not a lite task, especially taking complex concepts and calculations and conveying them to the layperson.</p>
      <br /><p>And then, we’re faced with another dilemma. All too often, the road to delivering these clean and ‘easy to digest’ analyses strips us of all imagination in how findings are presented.</p>
      <br /><p>There is assuredly another way -- an artistic route which envisions measurement, analysis, and visualization of data just as much an art as it is a science. Nic has made it his mission to work with technology and data not as a means to an end but instead as a method of artistic narration. </p>
      <br /><p>Nic has spent the past 6+ years in the marketing and advertising industry, chiefly as a data analyst for VMLY&R and GSD&M, supporting the U.S. Department of Defense recruiting mission on behalf of United States Navy, United States Air Force (Air Force Active Duty, Air Force Reserve, Air National Guard), and United States Space Force.</p>
      <br /><p>During this time, Nic has specialized in measurement and analytics implementation across the respective recruitment websites and organic social media channels for Navy, Air Force, and Space Force.</p>
      <br/>
      </WorkP1>
      </Wrapper>
      <Main />
      <WrapperAlt>
        <WorkP2>
      <p>Video captured during overnight Embark trip on behalf of U.S. Navy Recruiting aboard the U.S.S. John C. Stennis (CVN 74). </p>
      <br/><p>Nic’s experience has encompassed:</p>
<li>Full website analytics and media tracking implementation through tag and pixel setup  </li>
<li>Event-Driven Data Layer implementation to scale across Google Analytics (Universal Analytics + GA4) and Adobe Analytics</li>
<li>Designing and running A/B and multivariate website test design, with an emphasis on testing hypotheses related to personalization, optimized user journeys, and lead generation</li>
<li>Creating integrated dashboard and automation through Tableau and Google Data Studio</li>
<li>Writing Python scripts for web scraping, as well as data ETL and creating notebooks for data analysis</li>
<li>Web design and development (including this very website through React.js)</li>
</WorkP2>
</WrapperAlt>

</Work>
    </Layout>
  )
}

export const Head = () => <title>Work | Nic Icaza</title>

export default WorkPage

const Work =  styled.div`
min-height: 120vh;
max-height: 150vh;
padding: 5rem calc((100vw - 3000px)/2);
background: #181B2C;
color: #fff;
margin-top:-96px;
padding-top: 120px;
}
`
const Wrapper =  styled.div`
display:grid ;
grid-template-columns: 1fr;
grid-auto-rows: min-content;
padding: 0 2rem;
padding-top: 1rem;
justify-items: left;
float: left;
position: relative;
background: #181B2C;

@media screen and (max-width:868px) {
  grid-template-columns: 1fr;
  background: #181B2C;
}
`
const WrapperAlt =  styled.div`
display:grid;
grid-template-columns: 1fr;
grid-auto-rows: min-content;
padding: 0 2rem;
justify-items: left;
float: left;
position: relative;
background: #181B2C;
padding-bottom: 120px;

@media screen and (max-width:868px) {
  grid-template-columns: 1fr;
  background: #181B2C;
}
`
const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
padding-bottom: 1rem;
`

const ProductImg = styled(Img)`
height:100%;
max-width: 100%;
position: relative;
border-radius: 10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&hover{
  filter: brightness(100%);
}
`


const WorkP1 = styled.p`
font-size: clamp(.75rem, 1vw, 1.5rem);
padding-right:24px;
padding-top:1rem;
`

const WorkP2 = styled.p`
font-size: clamp(.75rem, 1vw, 1.5rem);
padding-left:24px;
padding-bottom: 120px;
`
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
        <p>Privacy Policy
<br/><br/>Last updated: 4/9/2023
<br/><br/>Introduction
<br/><br/>This privacy policy describes how this website collects, uses, and protects the personal information you provide on our website. We respect your privacy and are committed to protecting your personal information in accordance with the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR).
<br/><br/>What personal information we collect
<br/><br/>We may collect personal information such as your name, email address, phone number, and other contact information when you use our website. We may also collect information about your device and how you use our website through cookies and other tracking technologies.
<br/><br/>How we use your personal information
<br/><br/>We use your personal information to provide and improve our website, to communicate with you, and to comply with legal obligations. We may also use your information to send you marketing communications that may interest you.
<br/><br/>How we share your personal information
<br/><br/>We do not sell your personal information to third parties. However, we may share your information with service providers that help us operate our website and provide services to you. We may also share your information with law enforcement or regulatory authorities when required by law.
<br/><br/>Your rights
<br/><br/>Under CCPA and GDPR, you have the right to request access to your personal information, to have it corrected, deleted, or transferred to another provider. You also have the right to object to the processing of your personal information and to withdraw your consent at any time.
<br/><br/>How we protect your personal information
<br/><br/>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
<br/><br/>Changes to this privacy policy
<br/><br/>We reserve the right to change this privacy policy at any time. If we make any material changes, we will notify you by email or by posting a notice on our website.
<br/><br/>Contact us
<br/><br/>If you have any questions or concerns about this privacy policy or the way youe personal information is handled, please contact us at nic@nicicaza.com.
<br/><br/>Thank you for visiting Nic's portfolio!</p>


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
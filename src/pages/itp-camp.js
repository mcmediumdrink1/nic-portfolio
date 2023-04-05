import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


const ITPCamp = () => {
  return (
    <Layout pageTitle="ITP Camp">
      <Camp>
      <p>Howdy from Texas,</p>
      <br /><p>My name is Nic and I am a data science professional working in the marketing/advertising industry, with more than 6 years combined experience leading website and organic social media measurement on behalf of the U.S. Department of Defense recruiting mission for Navy [2016 - 2020], as well as Air Force, and our newest branch, Space Force [2020 - present].</p>
      <br /> <p>I have learned so much in these roles and I have been given the freedom to grow and the encouragement to move with curiosity and to take risks, both professionally and personally. The next challenge I foresee for myself is to explore the field of data not just as a mode of interpretation, but also as an outlet for creation. </p>
      <br /><p>NYU’s ITP Summer Camp seems like just the right avenue to immerse myself in a culture of change and inventiveness and to share back with the community a perspective and experience that is uniquely my own. </p>
      <br /> <p>As a foray into my expressive aspirations, I’ve conceptualized a sample project to explore in ITP Summer Camp, with background information below for consideration.</p>
      <br /> <p>Concept
While iTunes has sadly fallen by the wayside, the legacy is everlasting. A fixture of the iTunes experience was the visualizer that paired with one’s music library, giving users options to customize the experience and deliver a unique visual accompaniment with every listen.</p>
<br /><p>With the advent of music streaming platforms and machine learning models, what if we could breathe life back into the ‘visualizer’? And what if this technology could extend beyond recorded music to capture and visualize live, real-time audio (and even video) signals as well? </p>
<br /><p>Inputs
Through our inputs, we’re able to imagine an array of influences that can help shape the visual experience. We may want to visualize our favorite artist as we listen to them on Spotify, and consider their existing visual design language or terms in the artist’s bio that can inform what we see. Or we’re playing a record on vinyl, and we can quickly listen for and identify the song, artist and album, query the track listing through the web, and sync the visual to that sound. Or we would like to visualize sounds in nature -- perhaps the noise captured by NASA’s Mars Perseverance rover, which launched with microphones aboard.</p>
<br /><p>Includes:
- Spotify API / Apple Music / YouTube API / ShazamKit
- Live audio (line-in/mic-in)
- Computer vision
- Web scraping</p>
<br /><p>Tranformations + Decoding
This is where the beauty unfolds. As structured and unstructured data points are extracted from the inputs, we will begin to process, learn from, and creatively transform this data so it can be rendered as a companion to the source. </p>
<p>Includes:
- Deep learning and machine learning models
- Natural Language Processing models
- Generative AI</p>
<br /><p>Outputs
After the data is transformed, the returned feedback will be our one-of-one accompanying visual outputs. This could vary based on use case or desired experience. Perhaps it’s a video to be displayed in-app or instead, signals to interact with the physical world, such as an on-stage projection mapping during a live concert or to create a tactile experience through tangible media that allows someone hearing impaired to experience sound.
</p>
<br /><p>Includes:
- Video
- Vector images
- MIDI/Light programming
- 3D models</p>
<br /><p>I appreciate the time and attention you’ve given to my application. I am looking forward to attending NYU’s ITP Summer Camp 2023 and so hopeful to develop this project (and others) with backing from a community of like-minded and restless Campers, Session Leaders, and Counselors.</p>
<br /><p>Cheers,</p>
<br /><p>-Nic</p>

</Camp>
    </Layout>
  )
}

export const Head = () => <title>Work | Nic Icaza</title>

export default ITPCamp

const Camp =  styled.div`
min-height: 120vh;
max-height: 150vh;
padding: 5rem calc((100vw - 2000px)/2);
background: #181B2C;
color: #fff;
margin-top:-96px;
padding-top: 120px;
}
`
import * as React from 'react'
import Layout from '../components/layout'
import Video from '../components/video'

const WorkPage = () => {
  return (
    <Layout pageTitle="Work">
      <section><p>Pictured above is a sample dashboard designed for USAF Recruiting to encompass cross-channel marketing performance. Please note that the charts shown above include only mock sample data and do not reflect true performance in order to protect sensitive client information.</p>
      <p>Data analytics often feels esoteric and confounding to the very people who benefit most from its understanding. In other words, measuring and interpreting data is not a lite task, especially taking complex concepts and calculations and conveying them to the layperson.</p>
      <p>And then, we’re faced with another dilemma. All too often, the road to delivering these clean and ‘easy to digest’ analyses strips us of all imagination in how findings are presented.</p>
      <p>There is assuredly another way -- an artistic route which envisions measurement, analysis, and visualization of data just as much an art as it is a science. Nic has made it his mission to work with technology and data not as a means to an end but instead as a method of artistic narration. </p>
      <p>Nic has spent the past 6+ years in the marketing and advertising industry, chiefly as a data analyst for VMLY&R and GSD&M, supporting the U.S. Department of Defense recruiting mission on behalf of United States Navy, United States Air Force (Air Force Active Duty, Air Force Reserve, Air National Guard), and United States Space Force.</p>
      <p>During this time, Nic has specialized in measurement and analytics implementation across the respective recruitment websites and organic social media channels for Navy, Air Force, and Space Force.</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/gpsDOt0GS9A?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1modestbranding=1&mute=1"
        videoTitle="Official Music Video on YouTube"
      />
      <p>Video captured during overnight Embark trip on behalf of U.S. Navy Recruiting aboard the U.S.S. John C. Stennis (CVN 74). </p>
      <p>Nic’s experience has encompassed:
- Full website analytics and media tracking implementation through tag and pixel setup  
- Event-Driven Data Layer implementation to scale across Google Analytics (Universal Analytics + GA4) and Adobe Analytics
- Designing and running A/B and multivariate website test design, with an emphasis on testing hypotheses related to personalization, optimized user journeys, and lead generation
- Creating integrated dashboard and automation through Tableau and Google Data Studio
- Writing Python scripts for web scraping, as well as data ETL and creating notebooks for data analysis
- Web design and development (including this very website) </p>
</section>
    </Layout>
  )
}

export const Head = () => <title>Work | Nic Icaza</title>

export default WorkPage
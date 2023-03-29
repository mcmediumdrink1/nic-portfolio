import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nic playing acoustic guitar with friends"
        src="/Users/nic/nic-s-portfolio/gatsbynetlify/src/images/polaroid.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
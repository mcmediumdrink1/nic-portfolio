import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  homeImage
} from './index.module.css'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import Info from '../components/Info'


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home | Nic Icaza" />
      <Hero />
      {/* <Info /> */}

    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Nic Icaza | Portfolio">
      <p>Nic Icaza</p>
      <StaticImage
        alt="Nic playing acoustic guitar with friends"
        src="https://lh3.googleusercontent.com/pw/AMWts8DhFsZJp5d3YiJmVX8DfKU7MAvkD3vb0ZBpkgu-_1CrEfEARam3CooJmW8yq-Rh24UHlXhCmZ8haQej8KKqQSCQ5ewNQWepywpUYlH_u2GESdBTCuzuXQHNE_1fbB2E6N7I6C2qKChyKJJJgtDdB8dKYQ=w1170-h1560-s-no?authuser=0"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
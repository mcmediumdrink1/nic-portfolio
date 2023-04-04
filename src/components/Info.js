import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Img from "gatsby-image"

const Info = () => {
const data = useStaticQuery(graphql`
query MyQuery {
  allInfoJson {
    edges {
      node {
        img {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}
`)

function getInfo(data){
  const infoArray = []
  data.allInfoJson.edges.forEach((item, index)=>{
    infoArray.push(
      <div key={index}>
        {item.node.img && <Img src={item.node.img.childImageSharp?.fluid.src}
        fluid={item.node.img.childImageSharp.fluid} />}
      </div>
    )
  })
  return infoArray
}

  return (
   <ProductsContainer>
    <ProductsHeading>Heading</ProductsHeading>
    <ProductWrapper>{getInfo(data)}</ProductWrapper>
   </ProductsContainer>
  )
}

export default Info

const ProductsContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 3000px)/2);
background: red;
color: #fff;

`
const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
color: #000;
`
const ProductWrapper = styled.div`
`
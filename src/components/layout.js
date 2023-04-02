import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  subHeader
} from './layout.module.css'
import {FaBars} from 'react-icons/fa'
import { GlobalStyle } from './GlobalStyles'
import {menuData} from '../data/MenuData'
import { Button } from './Button'


function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          subHeader
        }
      }
    }
  `)

  return (

    <div className={container}>

       <Nav>
       <Link to="/" className={navLinkText} style={{ textDecoration: 'none' }}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <h1 className={subHeader}>{data.site.siteMetadata.subHeader}</h1>
        </Link>
       <Bars />
        <NavMenu>
          {menuData.map((item,index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to = "/" big="true" primary="true" round="true">Get Info</Button>
        </NavBtn>
        </Nav>
    <main>
        {children}
    </main>
    </div>

  )
}


export default Layout



const Nav = styled.nav`
background: transparent;
height: 100px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px)/2);
z-index: 100;
position: relative;
`
const Bars = styled(FaBars)`
display:none;
fill: #fff;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute
  top: 0;
  right: 0;
  transform: translate (-100%, 75%);
  fill: #CD4A00;
  font-size:1.8rem;
  cursor: pointer;
}
`
const NavLink = styled(Link)`
fill: #CD4A00;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`
const NavMenu = styled.div`
display: flex;
align-items:center;
fill: #CD4A00;

@media screen and (max-width: 768px){
display: none;

}
`

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;


@media screen and (max-width: 768px){
  display: none;
}
`
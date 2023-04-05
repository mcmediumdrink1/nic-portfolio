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
import { GlobalStyle } from './GlobalStyles'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'



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

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if(showMenu){
    menu=
    <HMenu>
    </HMenu>
  }

  return (

    <div className={container}>

       <Nav>
       <Link to="/" className={navLinkText} style={{ textDecoration: 'none' }}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <h1 className={subHeader}>{data.site.siteMetadata.subHeader}</h1>
        </Link>
      <span>
       <Bars onClick ={() => setShowMenu(!showMenu)}/>
      </span>
        <NavMenu>
          {menuData.map((item,index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to = "/" big="true" primary="true" round="true">Contact</Button>
        </NavBtn>
        </Nav>
        {menu}
    <main>
        {children}

    </main>
    </div>

  )
}


export default Layout



const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 3000px)/2);
z-index: 100;
position: relative;
`

const NavLink = styled(Link)`
fill: #F2EFE8;
text-color:F2EFE8;
font-size: 0.75rem;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 45%;
cursor: pointer;
`
const NavMenu = styled.div`
display: flex;
align-items:center;
fill: #F2EFE8;

@media screen and (max-width: 768px){
display: none;

}
`

const NavBtn = styled.div`
display: flex;
align-items: center;
padding: 0 2rem;
margin-top: 1rem;
margin-right: 1rem;

@media screen and (max-width: 768px){
  display: none;
}
`
const Bars = styled(FaBars)`
display:none;
fill: #F2EFE8;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute
  padding: 0 2rem;
  margin-top: 1rem;
  margin-right: 1rem;
  transform: translate (-100%, 75%);
  fill: #F2EFE8;
  font-size:1.5rem;
  font-weight: lighter;
  stroke-width= 0.5;
  cursor: pointer;
}
`

const HMenu = styled.div`
position: fixed;
background: #DEC4E9;
top:0;
left:0;
height:100%;
width: 100%;
z-index: 50;
opacity: 90%;
`
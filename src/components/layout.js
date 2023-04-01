import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Link to="/" className={navLinkText} style={{ textDecoration: 'none' }}><header className={siteTitle}>{data.site.siteMetadata.title}</header></Link>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} style={{ textDecoration: 'none' }} activeStyle={{ color: "#CD4A00" }}>
              ABOUT
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/work" className={navLinkText} style={{ textDecoration: 'none' }} activeStyle={{ color: "#CD4A00" }}>
              WORK
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href = "mailto: nicazatmg@gmail.com" className={navLinkText} style={{ textDecoration: 'none' }} activeStyle={{ color: "#CD4A00" }}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
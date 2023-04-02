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
      <Link to="/" className={navLinkText} style={{ textDecoration: 'none' }}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <h1 className={subHeader}>{data.site.siteMetadata.subHeader}</h1>
      </Link>
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
            <Link href="mailto: nicazatmg@gmail.com" className={navLinkText} style={{ textDecoration: 'none' }} activeStyle={{ color: "#CD4A00" }}>
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

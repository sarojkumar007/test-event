import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import "../styles/base.scss"
import Styles from "../styles/layout.module.scss"

export default (props) =>{
  const data = useStaticQuery(graphql`
    query{
      site {
      siteMetadata {
        title
        author
      }
    }
  }
  `)
  return(
    <div className={Styles.container}>
    <header className={Styles.header}>
    {data.site.siteMetadata.title}
    </header>
    <div className={Styles.content}>
    {props.children}
    </div>
    <footer className={Styles.footer}>
    <span>Copyrights - Cyber Fiesta 2020</span>
    <span><strong>By:&nbsp;</strong><a target="_blank" rel="noopener noreferrer" href="https://github.com/sarojkumar007">{data.site.siteMetadata.author}</a></span>
    </footer>
    </div>
  )
}

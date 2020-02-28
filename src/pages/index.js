import React from "react"
import Layout from "../components/layout"
import Styles from "../styles/index.module.scss"

const Event = ({event,url,disabled=false,btnText}) =>{
  return(
    <div className={Styles.event}>
      <h2 className={Styles.eventHead}>{event}</h2>
      <a className={`${Styles.btn} ${disabled ? "disabled" : ""}`} href={url}>{btnText}</a>
    </div>
  )
}

export default () => {
  return(
    <Layout>
      <Event event="Code Chef" url="#" btnText="Not Started" disabled="true" />
      <Event event="Webster" url="https://github.com" btnText="Take Test" />
      <Event event="Computer Maniac" url="#" disabled="true" btnText="Finished" />
      <Event event="Hackathon" url="https://github.com" btnText="Take Test" />
      <Event event="Gadget Guru" url="https://github.com" btnText="Take Test" />
    </Layout>
  )
}

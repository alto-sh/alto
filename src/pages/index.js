import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alto" />
    <br/>
    <p
      style={{
        fontFamily: "Gabriela, sans-serif",
        fontSize: "18pt",
        fontWeight: "bold",
        color: "#666",
        lineHeight: "1.4",
      }}
    >
      Alto is a coding co-operative working to build connections while building useful programs! We are dedicated to expanding accessibility to Software Development for enthusiastic young developers!
    </p>
    <br/>
    <button
      id="join-btn"
      style={{
        fontFamily: "Gabriela, sans-serif"
      }}
    >
      Join Alto
    </button>
    <br/><br/>
    <hr/>
    <br/>
    <h1>Portfolio</h1>
    <Link to="https://github.com/alto-sh/colandria">
      <div className="project-callout">
        <h2>Colandria<span className="in-progress">&nbsp;&nbsp;In Development</span></h2>
        <p>The reading directory for bookworms.</p>
      </div>
    </Link>
    <Link to="https://github.com/alto-sh/amnis">
      <div className="project-callout">
        <h2>Amnis<span className="in-progress">&nbsp;&nbsp;In Development</span></h2>
        <p>A Thought Organizer for the 21st Century.</p>
      </div>
    </Link>
    {/*<p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>*/}
  </Layout>
)

export default IndexPage

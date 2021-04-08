import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  const projects = [
    { name: "Wall", link: "https://github.com/alto-sh/wall", description: "Graffiti the Web", inProgress: false },
    { name: "Colandria", link: "https://github.com/alto-sh/colandria", description: "The Reading Directory for Bookworms", inProgress: true },
    { name: "Amnis", link: "https://github.com/alto-sh/amnis", description: "The Thought Organizer for the 21st Century", inProgress: true },
  ]

  return (
    <Layout>
      <SEO title="Alto" />
      <br/>
      <p
        style={{
          fontFamily: "Gabriela, sans-serif",
          fontSize: "22pt",
          fontWeight: "bold",
          color: "#666",
          lineHeight: "1.4",
        }}
      >
        Alto is a community of young developers, writing code to build connections.
      </p>
      <br/>
      <Link 
        to="https://airtable.com/shrYonv1BROnD6Yc9"
        target="_blank"
        rel="noreferrer"
      >
        <button
          id="join-btn"
          style={{
            fontFamily: "Gabriela, sans-serif"
          }}
        >
          Join Alto
        </button>
      </Link>
      <br/><br/>
      <hr/>
      <br/>
      <h1>Portfolio</h1>
      {
        projects.map(p => (
          <Link to={p.link}>
            <div className="project-callout">
              <h2>
                {p.name}
                {p.inProgress ? <span className="in-progress">&nbsp;&nbsp;In Development</span> : null}
              </h2>
              <p>{p.description}</p>
            </div>
          </Link>
        ))
      }
      {/*<p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>*/}
    </Layout>
  )
}

export default IndexPage

import React from 'react'
import Layout from '../components/Layout' 
import { graphql } from 'gatsby'


const About = ({data}) => {
  debugger
    return (
        <Layout>
          <h1>{data.site.siteMetadata.title}</h1>
          <h1>{data.site.siteMetadata.body.content}</h1>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title 
        body {
          content
        }
      }
    }
  }
`

export default About

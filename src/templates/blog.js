import React from 'react' 
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Blog = ({data}) => {

    const { html, frontmatter: {title} } = data.markdownRemark
    return (
        <Layout>
            <h1>{title}</h1>
            {/* <p>{slug}</p> */}
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    } 
`
export default Blog
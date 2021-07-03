import React from 'react' 
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import '../../templates/blog.scss'

const Blog = ({data}) => {

    const { html, frontmatter: {title} } = data.markdownRemark
    return (
        <Layout>
            <h1>{title}</h1>
            {/* <p>{slug}</p> */}
            <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
            }
        }
    } 
`
export default Blog
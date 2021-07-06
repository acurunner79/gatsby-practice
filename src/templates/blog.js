import React from 'react' 
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import './blog.scss'

const Blog = ({data}) => {

    const { html, frontmatter: {title, subtitle, coverImage} } = data.markdownRemark
    return (
        <Layout>
            <Seo 
               title={title} 
               description={subtitle}
               image={coverImage}
            />
            <h1>{title}</h1>
            {/* <p>{slug}</p> */}
            <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                subtitle
                coverImage
            }
        }
    } 
`
export default Blog
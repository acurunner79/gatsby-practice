import React from 'react' 
import Layout from '../components/Layout'


const Post = ({pageContext: {post}}) => {
    // console.log("this is title", post?.title)
    return(
        <Layout>
            <h1>Post Detail Page</h1>
            <p>ID: {post?.id}</p>
            <p>Title: {post?.title}</p>
            <p>Body: {post?.body}</p>
        </Layout>
    )
}


export default Post
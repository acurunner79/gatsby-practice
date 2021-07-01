// import React from 'react' 
// import Layout from '../components/Layout'
// import { Link, graphql } from 'gatsby'

// const TestingPage = ({data}) => {
//     const posts = data.allPost
//     return(
//         <Layout>
//             <h1>I am posts page</h1>
//             {/* <p>{JSON.stringify(posts)}</p> */}
//             <ul>
//             { posts.map(post =>
//                 <li key={post?.id}>
//                     <Link to={`/posts/${post.id}`}>{post?.title}</Link>
//                 </li>)}
//             </ul>
//         </Layout>
//     )
// }

// export const query = graphql`
//    query JustTesting {
//        allPost {
//            id
//            body
//            title
//        }
//    }
// `
// export default TestingPage
import React from 'react' 
import Blog from './Blog'


const BlogListing = ({blogs}) => {
    return (
        <>
        <div className="columns is-multiline">
            {blogs.map(({frontmatter, id}) => 
               <div key={id} className="column is-9">
                   <Blog 
                       title={frontmatter.title}
                       subtitle={frontmatter.subtitle}
                       slug={frontmatter.slug}
                       date={frontmatter.date}
                    />
               </div>
            )

            }
        </div>
        </>
    )
}


export default BlogListing
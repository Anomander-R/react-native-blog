import React, {createContext, useState} from "react";

const BlogContext = createContext();

export const BlogProvider =({children})=>{
    const [blogPosts, setBlogPosts] = useState([]);
const addBlogPost = ()=>{
    setBlogPosts([...blogPosts, {title: `BlogPost #${blogPosts.length + 1}`}])
}

    const blogPosts1 =[
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'},
        {title: 'Blog Post #3'},
        {title: 'Blog Post #4'},
        {title: 'Blog Post #5'},
        {title: 'Blog Post #6'},
        {title: 'Blog Post #7'},
        {title: 'Blog Post #8'},
        {title: 'Blog Post #9'},
    ]
    return  <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
                {children}
            </BlogContext.Provider>
}

export default BlogContext;
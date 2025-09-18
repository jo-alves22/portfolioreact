import BlogNavbar from "./BlogNavbar"
import BlogPosts from "./BlogPosts"
import './Blog.css'

function Blog() {
    return(
        <>
        <BlogNavbar />
        <main className="blog-container">
            <div className="blog-header">
                <h1>Blog</h1>
                <p>Explorando tecnologia, programação e desenvolvimento web</p>
            </div>
            <BlogPosts />
        </main>
        </>
    )
}

export default Blog
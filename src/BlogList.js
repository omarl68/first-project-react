const BlogList = ({blogs,title}) => {
/*     const blogs = props.blogs;
    const title = props.title; */
  
    return (
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-perview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
 
export default BlogList;
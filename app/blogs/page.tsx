import { getBlogs } from "../services/blogs";

export default function Blogs() {
    const blogs = getBlogs();
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title} - {blog.author} <a href={blog.url} target="_blank">link</a></li>
        ))}
      </ul>
    </div>
  );
}

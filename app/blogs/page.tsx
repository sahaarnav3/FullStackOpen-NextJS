export const instant = false

import Link from "next/link";
import { getBlogs } from "../services/blogs";

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) {
  const { filter } = await searchParams;
  let blogs = getBlogs();
  if(filter)
    blogs = blogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Blogs</h2>
      <form action="/blogs">
        <input type="text" name="filter" defaultValue={filter} />
        <button type="submit">search</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> - {blog.author}{" "}
            <a href={blog.url} target="_blank">
              link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

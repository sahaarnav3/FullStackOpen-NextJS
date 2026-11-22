export const instant = false

import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import Link from "next/link";
import { increaseBlogLike } from "@/app/actions/blogs";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog) notFound();

  return(
    <div>
        <h2>{blog.title}</h2>
        <h3>{blog.author}</h3>
        <h3>url <Link href={blog.url} target="blank_">{blog.url}</Link> </h3>
        <h3>Likes - { blog.likes }</h3>
        <form action={increaseBlogLike}>
            <input type="hidden" name="id" value={blog.id} />
            <button type="submit">Like</button>
        </form>
    </div>
  )
};

export default BlogPage;

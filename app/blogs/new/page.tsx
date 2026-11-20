import { createBlog } from "@/app/actions/blogs";

export default function NewBlog() {
  return (
    <div>
      <h2>Create New Blog</h2>
      <form action={createBlog}>
        <div>
          <label>Title {" "}</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Author {" "}</label>
          <input type="text" name="author" required />
        </div>
        <div>
          <label>Url {" "}</label>
          <input type="text" name="url" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

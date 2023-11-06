import { useState } from "react";
import "./PostForm.scss";

function PostForm({ addPost }) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addPost({ title, content });
    setTitle("");
    setContent("");
    console.log({ title, content });
  };

  return (
    <>
      <section className="post">
        <section className="post__centered">
          <h2 className="post__title">Creating a Post</h2>
          Here we are handling the event
          <form className="post__form" onSubmit={handleSubmit}>
            <section className="post__text">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </section>
            <section>
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </section>
            <button type="submit">Submit</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default PostForm;

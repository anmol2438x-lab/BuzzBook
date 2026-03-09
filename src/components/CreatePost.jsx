import { useContext, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { PostListContext } from "../store/PostListContext";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostbodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody = PostbodyElement.current.value;

    const tags = tagsElement.current.value
      .split(" ")
      .filter((tag) => tag.trim() !== "");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: PostTitle,
        body: PostBody,
        userId: userId,
        reactions: {
          likes: Math.floor(Math.random() * 1000),
          dislikes: Math.floor(Math.random() * 100),
        },
        tags,
      }),
    })
      .then((res) => res.json())
      .then((post) =>
        addPost({
          ...post,
          reactions: Math.floor(Math.random() * 1000),
        }),
      );

    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostbodyElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your userId :
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your post userId..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title :
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter your post title..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content :
        </label>
        <textarea
          type="text"
          ref={PostbodyElement}
          rows={4}
          className="form-control"
          id="body"
          placeholder="About your post content..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags :
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your post tags..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST <MdAddTask />
      </button>
    </form>
  );
};
export default CreatePost;

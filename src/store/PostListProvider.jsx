import { useCallback, useEffect, useReducer, useState } from "react";
import { PostListContext } from "./PostListContext";

const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];

    case "ADD_INITIAL_POSTS":
      if (state.length > 0) return state;

      return action.payload.posts || [];

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);

    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addInitialPosts = useCallback((posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  }, []);
  const addPost = (POST) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: POST,
    });
  };

  const deletePost = useCallback((id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: id,
    });
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      setFetching(true);
      try {
        const res = await fetch("https://dummyjson.com/posts", { signal });
        const data = await res.json();
        addInitialPosts(data.posts);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      } finally {
        setFetching(false);
      }
    };

    const controller = new AbortController();
    const signal = controller.signal;

    loadPosts();

    return () => controller.abort();
  }, [addInitialPosts]);
  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
        fetching,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

import { useContext } from "react";
import { BiDislike, BiLike, BiSolidLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { LuSaveAll } from "react-icons/lu";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import LoadingSpinner from "../components/LodingSpinner";
import WelcomeMsg from "../components/welcomeMsg";
import { PostListContext } from "../store/PostListContext";
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};
const PostList = () => {
  const { postList, fetching, deletePost } = useContext(PostListContext);

  const handleGetPostClick = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMsg onGetPostsClick={handleGetPostClick} />
      )}
      {!fetching &&
        postList.map((post) => (
          <div key={post.id} className="card m-2  post-card">
            <div className="glassmorphism card-body">
              <h5 className="d-flex justify-content-between align-items-center">
                {post.title}{" "}
                <span
                  className="deleteBtn "
                  style={{ cursor: "pointer" }}
                  onClick={() => deletePost(post.id)}
                >
                  <TiDelete />
                </span>
              </h5>
              <p>{post.body}</p>
              <p>User ID: {"@fbxz_" + post.userId}</p>
            </div>

            <p>
              <BiSolidLike />
              <span className="ms-2">
                {formatNumber(post.reactions?.likes ?? post.reactions)}
              </span>
            </p>
            <div>
              {post.tags?.map((tag, index) => (
                <span key={index} className="badge bg-primary m-1">
                  #{tag}
                </span>
              ))}
              <div
                className="alert alert-info reaction glassmorphism"
                role="alert"
              >
                <span>
                  {" "}
                  <BiLike />
                  <p>Like </p>
                </span>
                <span>
                  {" "}
                  <BiDislike />
                  <p>Unlike</p>
                </span>
                <span>
                  {" "}
                  <GoCommentDiscussion />
                  <p>Comment</p>
                </span>
                <span>
                  {" "}
                  <LuSaveAll />
                  <p>Save</p>
                </span>
                <span>
                  {" "}
                  <FaShare />
                  <p>Share</p>
                </span>
                <span>
                  {" "}
                  <RiMenuUnfoldLine />
                  <p>Menu</p>
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;

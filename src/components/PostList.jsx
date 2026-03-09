import { useContext } from "react";
import { BiDislike, BiLike, BiSolidLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { LuSaveAll } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { RiMenuUnfoldLine } from "react-icons/ri";
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
          <div key={post.id} className="card m-3 p-3 post-card">
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ cursor: "pointer" }}
              onClick={() => deletePost(post.id)}
            >
              <MdDeleteSweep />
            </span>
            <h5>{post.title}</h5>
            <p>{post.body}</p>

            <p>User ID: {"@" + post.userId}</p>
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
              <div className="alert alert-info reaction" role="alert">
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

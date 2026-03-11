import { FaHome, FaUserFriends } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { RiNotification2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-1 text-bg-dark header">
      {" "}
      <div className="container">
        {" "}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {" "}
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {" "}
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 d-flex justify-content-center gap-4 mb-md-0">
            {" "}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reels"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <PiFilmReelFill />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-post"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <MdAddToPhotos />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/friends"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <FaUserFriends />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/msg"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <FaFacebookMessenger />
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/notification"
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "active" : ""}`
                }
              >
                <RiNotification2Fill />
              </NavLink>
            </li>{" "}
          </ul>{" "}
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            {" "}
            <input
              type="search"
              className="form-control "
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="text-end">
            {" "}
            <a
              href="https://full-stack-todo-gray.vercel.app/"
              target="_blank"
              className="btn me-2 loginBtn"
            >
              Login
            </a>
            <a
              href="https://full-stack-todo-gray.vercel.app/"
              target="_blank"
              className="btn signBtn"
            >
              Sign-up
            </a>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};
export default Header;

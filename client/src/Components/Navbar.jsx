/* eslint react/prop-types: 0 */

import { useNavigate } from "react-router-dom";

export function Navbar(props) {
  const navigate = useNavigate();
  function handleClick(e) {
    if (e.target.name == "home") {
      navigate("/");
    } else {
      navigate("/addPost");
    }
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light gradient-custom-2"
        id="neubar"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="imgs/icon.png" height="60" />
          </a>
          <h1>Culturify</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className={`nav-link mx-2 ${props.active.Home}`}
                  name="home"
                  aria-current="page"
                  onClick={handleClick}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link mx-2 ${props.active.Post}`}
                  name="post"
                  aria-current="page"
                  onClick={handleClick}
                >
                  Create a Post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import "../component/css/Navbar.css";
import Logo from '../assets/logo.png'
const Home = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <img className="ms-large" src={Logo} alt="logo"  />
          <span style={{ color: "white", fontSize: "20px" }}>Abstract</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <span className="vertical-bar ms-3 mt-1">|</span>

              <a
                className="nav-link active ms-3"
                aria-current="page"
                href="#"
                style={{ color: "white", fontSize: "20px" }}
              >
                Help Center
              </a>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-secondary custom-margin-right"
                type="submit"
              >
                Submit a request
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;

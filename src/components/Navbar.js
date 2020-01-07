import React, { useState } from "react";
import theevictions from "../img/theevictions.jpg";
import facebook from "../img/fb1.png";
import instagram from "../img/insta1.png";
import youtube from "../img/yt1.png";
import mail from "../img/mail.png";
import { Link } from "gatsby";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleMobileNavClick = e => {
    e.preventDefault();
    setMobileNavOpen(!mobileNavOpen);
  };
  return (
    <div className="fullpage forward">
      <div className="bodywrap">
        <div className="row group">
          <nav className="grid6">
            <div className="logo hide-phone">
              <Link to="/">
                <img src={theevictions} alt="The Evictions" />
              </Link>
            </div>
          </nav>
          <nav className="grid6">
            <div className="logo">
              <a id="pull" onClick={handleMobileNavClick}>
                <img src={theevictions} alt="The Evictions" />
              </a>
            </div>
            <ul className={`social ${mobileNavOpen ? "open" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shows">Shows</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/photos">Photos</Link>
              </li>
              <li>
                <a href="https://www.facebook.com/theevictions">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/the_evictions/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=XoIK5J5xdK0">
                  <img src={youtube} alt="YouTube" />
                </a>
              </li>
              <li>
                <a href="mailto:TheEvictions@gmail.com">
                  <img src={mail} alt="Email" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    // <nav
    //   className="navbar is-transparent"
    //   role="navigation"
    //   aria-label="main-navigation"
    // >
    //   <div className="container">
    //     <div className="navbar-brand">
    //       <Link to="/" className="navbar-item" title="Logo">
    //         <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
    //       </Link>
    //       {/* Hamburger menu */}
    //       <div
    //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
    //         data-target="navMenu"
    //         onClick={() => this.toggleHamburger()}
    //       >
    //         <span />
    //         <span />
    //         <span />
    //       </div>
    //     </div>
    //     <div
    //       id="navMenu"
    //       className={`navbar-menu ${this.state.navBarActiveClass}`}
    //     >
    //       <div className="navbar-start has-text-centered">
    //         <Link className="navbar-item" to="/about">
    //           About
    //         </Link>
    //         <Link className="navbar-item" to="/products">
    //           Products
    //         </Link>
    //         <Link className="navbar-item" to="/blog">
    //           Blog
    //         </Link>
    //         <Link className="navbar-item" to="/contact">
    //           Contact
    //         </Link>
    //         <Link className="navbar-item" to="/contact/examples">
    //           Form Examples
    //         </Link>
    //       </div>
    //       <div className="navbar-end has-text-centered">
    //         <a
    //           className="navbar-item"
    //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <span className="icon">
    //             <img src={github} alt="Github" />
    //           </span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

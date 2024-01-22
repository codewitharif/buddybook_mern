import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand color-white" to="/">
            BuddyBook
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

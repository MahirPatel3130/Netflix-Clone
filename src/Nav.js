import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="../Netflix_logo_PNG1.png"
        alt="Netflix logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;

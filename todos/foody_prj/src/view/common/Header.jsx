import React from "react";
import NavList from "./nav/NavList";

import "../../assets/app.css";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row ">
          <div className="header_main">
            <a href="#" className="header_logo">
              Foody
            </a>
            <NavList></NavList>
          </div>
        </div>
      </div>
    </header>
  );
}

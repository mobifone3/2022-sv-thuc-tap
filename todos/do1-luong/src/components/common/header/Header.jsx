import React from "react";
import Logo from "./Logo";
import headerLogo from "../../../assets/image/logo1.png";
import MenuList from "./MenuList";
function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Logo link={"#"} img={headerLogo} alt={"logo"}></Logo>
            {/* <img src={logo}></img> */}
          </div>
          <div className="col-md-8">
            <MenuList></MenuList>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

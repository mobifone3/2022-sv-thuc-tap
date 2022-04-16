import React from "react";
import Image from "./Header/Image";
import foodylogo1 from "../assets/img/foodylogo1.png";
import MenuList from "./Header/MenuList";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light border-bottom shadow-lg bg-body ">
      <Image
        className={"navbar-brand"}
        src={foodylogo1}
        width={50}
        height={30}
      ></Image>
      <MenuList></MenuList>
    </nav>
  );
}

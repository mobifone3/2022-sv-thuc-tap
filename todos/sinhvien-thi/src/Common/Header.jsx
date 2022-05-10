import React from "react";
import Image from "./Header/Image";
import foodylogo1 from "../assets/img/foodylogo1.png";
import MenuList from "./Header/MenuList";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light border-bottom shadow-lg bg-body ">
      <Image
        className={"navbar-brand"}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFMnfHUv0UMJ5qvSE5hhBiJa8bXeiZk0ihQ&usqp=CAU"
        width={50}
        height={30}
      ></Image>
      <MenuList></MenuList>
    </nav>
  );
}

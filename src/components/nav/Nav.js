import React from "react";
import DeskNav from "../desktop nav/DeskNav";
import MobileNav from "../mobile nav/MobileNav";
import '../css/nav.css'

function Nav() {
  return (
    <>
      <DeskNav></DeskNav>
      <MobileNav></MobileNav>
    </>
  );
}

export default Nav;

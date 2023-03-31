import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./SiteBar.css";

export default function SiteBar({ openSiteBar, setOpenSiteBar }) {
  return (
    <>
      <div className="siteBar">
        <div className="menu_btn" onClick={() => setOpenSiteBar(!openSiteBar)}>
          <BiMenu />
        </div>

        <h1>Admin</h1>
      </div>
    </>
  );
}

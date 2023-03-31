import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function SiteBarLists({ setOpenSiteBar, openSiteBar }) {
  return (
    <div className={`siteMenu ${openSiteBar ? "siteMenu_open" : ""}`}>
      <div className="menu_btn exit_menu">
        <BsArrowLeftCircle onClick={() => setOpenSiteBar(!openSiteBar)} />
      </div>
      <ul>
        <li>
          <NavLink
            exact="true"
            onClick={() => setOpenSiteBar(!openSiteBar)}
            to="/"
            activeClassName="active"
          >
            New Post
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => setOpenSiteBar(!openSiteBar)}
            exact="true"
            to="/drafts"
            activeClassName="active"
          >
            Drafts
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpenSiteBar(!openSiteBar)}
            exact="true"
            to="/publishedposts"
            activeClassName="active"
          >
            Published Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

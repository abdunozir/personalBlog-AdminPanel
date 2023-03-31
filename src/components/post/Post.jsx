import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Post({ el, del, edit }) {
  console.log(el);
  const parser = new DOMParser();
  const body = parser.parseFromString(el.body, "text/html");
  return (
    <li className="post_draft">
      <div className="title_wrapper">
        <NavLink
          exact="true"
          // onClick={() => setOpenSiteBar(!openSiteBar)}
          to={`/post/${el._id}`}
          activeClassName=""
        >
          <h2 className="post_title">
            <div
              dangerouslySetInnerHTML={{
                __html: `<h${el.title[0].data.level}>${el.title[0].data.text}</h${el.title[0].data.level}>`,
              }}
            />
          </h2>
        </NavLink>
        <div className="action_btns">
          <NavLink to={"/edit/post/" + el._id}>
            <button onClick={edit} className="action_btn_edit">
              <CiEdit />
            </button>
          </NavLink>
          <button onClick={del} className="action_btn_del">
            <MdDelete />
          </button>
        </div>
      </div>
      {/* <div className="tag_btns"> */}
      {/* {el.tags.map((tag) => {
                        return <button className="tag_btn">{tag}</button>;
                      })} */}
      {/* <button className="tag_btn">{el.author}</button> */}
      {/* </div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<p>${el.body[1].data.text}</p>`,
        }}
      />
      <div className="author">
        <a className="draft_post_more" href="#">
          more...
        </a>
        <p>
          <span>#</span>
          {el.author}
        </p>
      </div>
    </li>
  );
}

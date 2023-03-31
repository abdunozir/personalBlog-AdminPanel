import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import apis from "../../api/Api";
import "./SinglePost.css";

export default function SinglePost() {
  const location = useLocation();

  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  let [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(apis.PostsApi + "/" + id)
      .then((data) => {
        console.log(data);
        setPost([...data.data.data.body]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="post">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: post
              .map((el) => {
                if (el.type === "header") {
                  return `<h${el.data.level} className="post_title">${el.data.text}</h${el.data.level}>`;
                } else if (el.type === "paragraph") {
                  return `<p>${el.data.text}</p>`;
                } else if (el.type === "quote") {
                  return `<blockquote>${el.data.text} <figcaption>${el.data.caption}</figcaption></blockquote>`;
                } else if (el.type === "embed") {
                  return `<embed type="video/webm" src="${el.data.embed}" width="500" height="400">`;
                } else if (el.type === "list") {
                  return `<${el.data.style === "ordered" ? "ol" : "ul"}>
                   ${el.data.items
                     .map((item) => {
                       return `<li>${item}</li>`;
                     })
                     .join("<br>")}
                  </${el.data.style === "ordered" ? "ol" : "ul"}>`;
                } else if (el.type === "code") {
                  return `<code>${el.data.code
                    .split("\n")
                    .map((el) => el + `</br>`)
                    .join(" ")}
                    </code>`;
                }
              })
              .join("</br>"),
          }}
        />
      </div>
    </div>
  );
}

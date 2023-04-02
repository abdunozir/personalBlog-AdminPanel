import axios from "axios";
import React, { useEffect, useState } from "react";

import Keyboard from "../../components/keyborad/Keyboard";
import Title from "../../components/Title/Title";
import "./Post.css";

export default function Post() {
  let [text, setText] = useState({});
  let [author, setAuthor] = useState("Mr.Abduvaliev");
  let [published, setPublished] = useState(false);

  const handleScroll = (e) => {
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const posting = (bool) => {
    axios
      .post("https://personalblog.herokuapp.com/api/posts", {
        title: [{ ...text.blocks[0] }],
        body: text.blocks,
        isPublished: bool,
        tags: [],
        author: author,
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function saveAsDraft() {
    if (text.blocks) {
      posting(false);
    }
  }

  function publishFunc() {
    if (text.blocks) {
      posting(true);
    }
  }
  return (
    <div className="Post">
      <div className="container">
        <div className="post_btns">
          <button onClick={() => publishFunc()}>Publish</button>
          <button className="post_darft_btn" onClick={saveAsDraft}>
            Save as draft
          </button>
        </div>
        <Keyboard text={text} setText={setText} />
      </div>
    </div>
  );
}

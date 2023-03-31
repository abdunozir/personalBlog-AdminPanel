import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import apis from "../../api/Api";
import Keyboard from "../../components/keyborad/Keyboard";

export default function EditPost() {
  let [posts, setPosts] = useState([]);
  let [text, setText] = useState({});
  const location = useLocation();

  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  let [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(apis.PostsApi + "/" + id)
      .then((data) => {
        setPost([...data.data.data.body]);
        console.log(data.data.data.body);
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let [desc, setDesc] = useState("");
  let [title, setTitle] = useState(null);
  let [author, setAuthor] = useState("Mr.Abduvaliev");
  let [published, setPublished] = useState(false);

  const posting = () => {
    axios
      .put("https://personalblog.herokuapp.com/api/posts/" + id, {
        title: [{ ...text.blocks[0] }],
        body: text.blocks,
        isPublished: true,
        tags: [],
        author: author,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function saveAsDraft() {
    setPublished(false);
    posting();
  }

  function publishFunc() {
    setPublished(true);
    console.log(text);

    posting();
  }
  return (
    <div>
      <div className="post_btns">
        <button onClick={() => publishFunc()}>Publish</button>
        <button className="post_darft_btn" onClick={() => saveAsDraft}>
          Save as draft
        </button>
      </div>
      {post.length !== 0 ? (
        <Keyboard text={text} setText={setText} defaultData={post} />
      ) : (
        "loading..."
      )}
    </div>
  );
}

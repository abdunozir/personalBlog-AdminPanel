import axios from "axios";
import React, { useEffect, useState } from "react";
import apis from "../../api/Api";
import "./Drafts.css";
import Post from "../../components/post/Post";

export default function Drafts() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(apis.PostsApi)
      .then((data) => {
        console.log(data.data.data);
        setPosts([...data.data.data.filter((el) => !el.isPublished)]);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <h1>Drafts</h1>
      </div>
      <div className="posts">
        <ul>
          {posts.length !== 0 ? (
            posts.map((el) => {
              return <Post el={el} />;
            })
          ) : (
            <p>data not found...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

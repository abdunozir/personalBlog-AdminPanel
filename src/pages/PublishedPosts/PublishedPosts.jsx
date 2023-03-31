import axios from "axios";
import React, { useEffect, useState } from "react";
import apis from "../../api/Api";
import Post from "../../components/post/Post";

export default function PublishedPosts() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(apis.PostsApi)
      .then((data) => {
        console.log(data.data.data);
        setPosts([...data.data.data.filter((el) => el.isPublished)]);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, []);

  function del(id) {
    axios.delete(apis.PostsApi + "/" + id).then((data) => {
      console.log(data.data.result);
      if (data.data.result) {
        setPosts([...posts.filter((el) => el._id !== id)]);
      }
    });
  }

  return (
    <div className="container">
      <div>
        <h1>Published posts</h1>
      </div>
      <div className="posts">
        <ul className="publishedPostsList">
          {posts.length !== 0 ? (
            posts.map((el) => {
              return <Post del={() => del(el._id)} el={el} />;
            })
          ) : (
            <p>data not found...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

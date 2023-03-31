import axios from "axios";

let apis = {
  PostsApi: "https://personalblog.herokuapp.com/api/posts",
  getAll() {
    axios
      .get(this.PostsApi)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
  editPost(data, id) {
    axios
      .put(this.PostsApi + id, data)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
  delPost(id) {
    axios
      .delete(this.PostsApi + id)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default apis;

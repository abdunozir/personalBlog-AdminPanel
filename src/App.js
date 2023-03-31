import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import SiteBar from "./components/SiteBar/SiteBar";
import Drafts from "./pages/Drafts/Drafts.";
import Post from "./pages/Post/Post";
import PublishedPosts from "./pages/PublishedPosts/PublishedPosts";
import SiteBarLists from "./components/SiteBar/SiteBarLists";
import { useState } from "react";
import SinglePost from "./pages/SinglePost/SinglePost";
import EditPost from "./pages/EditPost/EditPost";

function App() {
  let [openSiteBar, setOpenSiteBar] = useState(false);

  return (
    <div className="App">
      <SiteBarLists setOpenSiteBar={setOpenSiteBar} openSiteBar={openSiteBar} />
      <div className="App_conatiner">
        <SiteBar setOpenSiteBar={setOpenSiteBar} openSiteBar={openSiteBar} />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/publishedposts" element={<PublishedPosts />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/edit/post/:id" element={<EditPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

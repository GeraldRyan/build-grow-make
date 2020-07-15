import React from "react";
import { Blogposts } from "../assets/Blogposts";

const Blog = () => {
  return (
    <div id="blogdiv">
      My Blog
      <br/>
      <br/>
      <div>{Blogposts[1]["title"]}</div>
      <div>{Blogposts[1]["body"]}</div>
      <br />
    </div>
  );
};

export default Blog;

import React from "react";
import {Blogposts} from '../assets/Blogposts'

const Blog = () => {
  return (
    <div id="blogdiv">
      My Blog
      <div>{Blogposts[1]["title"]}</div>
      <br/>
    </div>
  );
};

export default Blog;

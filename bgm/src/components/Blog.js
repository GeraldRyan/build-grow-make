import React from "react";
import { Blogposts } from "../assets/Blogposts";

const Blog = () => {
  return (
    <div id="blogdiv">
      <br />
      <div>My Blog</div>
      <br />
      <div className="post">
        {Object.keys(Blogposts).map(key => (
          <div key={key}>

            <div className="blogtitle">{Blogposts[key]["title"]}</div>
            <div className="blogcontent">{Blogposts[key]["body"]}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import Gears from "../assets/gears.jpg";
import {BrowserRouter as Router} from 'react-router-dom'

const Blog = () => {
  return (
    <div id="blogdiv">
      Blog
      <img src={Gears} alt="" />
    </div>
  );
};

export default Blog;

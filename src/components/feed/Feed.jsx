import React from "react";

import Post from "../Posts/Post";
import PostHeading from "./PostHeading";

const Feed = () => {
  return (
    <div className="p-4">
      {/* header section */}
      <PostHeading />

      {/* post area */}
      <div className=" p-3 w-full  shadow-lg rounded-xl mt-5   ">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;

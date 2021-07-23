import React from "react";

import PostHeading from "../../components/feed/PostHeading";
import Topbar from "../../components/topbar/Topbar";
import Post from "../../components/Posts/Post";
import Details from "../../components/details/Details";
import ProfileHeading from "./ProfileHeading";
import ProfileLeftBar from "./ProfileLeftBar";
import Friends from "../../components/friends/Friends";
import MutualFriends from "../../components/mutualFriends/MutualFriends";

const Profile = () => {
  return (
    <div className="bg-gray-50 m-0 p-0 h-full  overflow-x-hidden">
      <Topbar />
      <div className="w-screen   ">
        <div className="hidden md:block">
          <div className="flex flex-row justify-between ">
            <div className=" w-3/12 ">
              <div>
                <ProfileLeftBar />
              </div>
              <div>
                <MutualFriends />
              </div>
            </div>
            <div className="  w-9/12 mr-6">
              {" "}
              <div className="mt-4 w-full ">
                <ProfileHeading />
              </div>
              <div className="w-full flex">
                <div className="w-8/12 ">
                  <PostHeading />
                  <div className="p-3 w-full  shadow-lg rounded-xl mt-5  ">
                    <Post />
                    <Post />
                    <Post />
                  </div>
                </div>
                <div className="w-4/12 ml-2">
                  <div className="ml-2 mb-4">
                    <Details />
                  </div>
                  <div className="mt-12">
                    <Friends />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

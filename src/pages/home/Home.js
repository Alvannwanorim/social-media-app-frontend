import React from "react";
import Feed from "../../components/feed/Feed";
import { LeftBar } from "../../components/left/LeftBar";
import RightBar from "../../components/right/RightBar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <div className="bg-gray-50 m-0 p-0 h-screen overflow-hidden">
      <Topbar />
      <div className="w-screen   ">
        <div className="hidden md:block">
          <div className="flex flex-row justify-between ">
            <div className=" w-3/12 ">
              <LeftBar />
            </div>
            <div className="  w-6/12 overflow-y-scroll h-screen scrollbar-hide ">
              <Feed />
            </div>
            <div className=" w-3/12  ">
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

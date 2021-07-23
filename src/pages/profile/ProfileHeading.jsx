import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const ProfileHeading = () => {
  return (
    <div className=" shadow-inner p-2 font-roboto">
      <div className="flex flex-col relative ">
        <div className="h-64 overflow-hidden">
          <img
            src="/assets/post/1.jpeg"
            className="w-full  object-fit rounded-2xl  "
            alt=""
          />
        </div>
        <div className=" ">
          <div className="w-full flex justify-center">
            <div className="w-24 h-24 rounded-full shadow-lg absolute bottom-16">
              <img
                src="/assets/person/1.jpeg"
                className="p-1 w-24 h-24 rounded-full "
                alt=""
              />
            </div>
          </div>
          <div className=" mt-4 ">
            <div className="flex flex-row space-x-5">
              <div className="">James Author </div>
            </div>
            <div className="flex flex-row space-x-5">
              <div className=" text-gray-500">@jamesauthor</div>
            </div>
            <div className="flex flex-row space-x-5"></div>
            <div className="flex flex-row justify-evenly p-1 mt-2 border-2 border-gray-400 rounded-lg shadow-lg">
              <div className="  ">
                <a href="#!" className="hover:text-blue-400  ">
                  Followers:
                </a>{" "}
                <span className="font-semibold"> 1023 </span>
              </div>
              <div className="">
                <a href="#!" className="hover:text-blue-400  ">
                  Following:
                </a>{" "}
                <span className="font-semibold"> 239 </span>
              </div>
              <div className="font-semibold flex flex-row">
                <a href="#!" className="hover:text-blue-400  ">
                  Message
                </a>
                <span>
                  <BsChatDotsFill className="w-4 h-4 text-blue-300" />
                </span>
              </div>

              <div className="">
                <a href="#!" className="hover:text-blue-400 font-semibold ">
                  TimeLine{" "}
                </a>
              </div>
              <div className="">
                <a href="#!" className="hover:text-blue-400 font-semibold ">
                  Edit Profile{" "}
                </a>
              </div>
              <div className="">
                <a href="#!" className="hover:text-blue-400 font-semibold ">
                  Activity{" "}
                </a>
              </div>

              <div className=" italic ofnt-semibold">
                Birthday: <span> May 29 </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeading;

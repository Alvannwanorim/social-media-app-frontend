import React from "react";

import {
  BsFillPeopleFill,
  BsFillBookmarkFill,
  BsQuestionCircle,
  BsBriefcase,
  BsChatSquareQuoteFill,
} from "react-icons/bs";
import { BiRss, BiCalendarEvent, BiBookAlt } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";

const ProfileLeftBar = () => {
  return (
    <div className=" ">
      <div className="p-4">
        <div className="mt-3 ">
          <div className="flex flex-row space-x-4  rounded-lg w-2/3 items-center bg-gray-100">
            <BiRss className="w-6 h-6 hover:text-red-700" />
            <a href="#!" className="text-lg  font-roboto ">
              Feeds
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BsChatSquareQuoteFill className="w-6 h-6 hover:text-indigo-500  " />
            <a href="#!" className="text-lg  font-roboto ">
              Chats
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <AiOutlinePlayCircle className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Videos
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BsFillPeopleFill className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Groups
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <HiStatusOnline className="w-6 h-6 hover:text-red-700 " />
            <a href="#!" className="text-lg  font-roboto ">
              Live
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BsFillBookmarkFill className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Bookmarks
            </a>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BsQuestionCircle className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Questions
            </a>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BsBriefcase className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Jobs
            </a>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BiCalendarEvent className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Events
            </a>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex flex-row space-x-4 items-center  rounded-lg  hover:rounded-lg w-2/3 hover:bg-gray-100">
            <BiBookAlt className="w-6 h-6 hover:text-indigo-500 " />
            <a href="#!" className="text-lg  font-roboto ">
              Courses
            </a>
          </div>
        </div>

        <div className=" flex flex-row  mt-3 border-b-2 border-gray-300 w-4/5 ">
          <div className="">
            <div className="flex flex-row space-x-2 py-1 px-4  items-center  rounded-lg  hover:rounded-lg w-full bg-gray-100 mb-3">
              <a href="#!" className="text-lg  font-roboto  hover:cursor-point">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftBar;

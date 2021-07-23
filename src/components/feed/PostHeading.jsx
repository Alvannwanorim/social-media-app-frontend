import React from "react";

import { AiFillTag, AiTwotoneHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const PostHeading = () => {
  return (
    <>
      <div className="mt-3 shadow-lg rounded-2xl">
        <div>
          <div className="flex flex-col p-2">
            <div className="flex flex-row  mb-3">
              <div className="relative w-2/12 ">
                <div className="w-16 h-16 rounded-full shadow-lg ">
                  <img
                    src="/assets/person/1.jpeg"
                    className="p-1 w-16 h-16 rounded-full "
                    alt=""
                  />
                </div>
              </div>
              <div className="w-10/12 bg-gray-300 ">
                <div className="flex flex-col w-full bg-white">
                  <div>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-16 bg-gray-50"
                      placeholder={`what's on your mind?`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between py-2 w-full border-t-2 border-gray-200">
              <div className="flex flex-row items-center space-x-2">
                <BsImages className="w-8 h-6 text-red-800" />
                <span>Photo and Videos</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <AiFillTag className="w-8 h-6 text-blue-600" />
                <span>Tags</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <HiLocationMarker className="w-8 h-6 text-green-900" />
                <span>Location</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <AiTwotoneHeart className="w-8 h-6 text-red-800" />
                <span>Feeling</span>
              </div>
              <div className="flex flex-row items-center">
                <button className="bg-green-900 p-1  outline-none mr-1 text-gray-50 font-semibold rounded-lg focus:outline-none">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeading;

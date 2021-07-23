import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BiDislike, BiHeart, BiLike, BiSquare } from "react-icons/bi";

const Post = () => {
  return (
    <div className="p-2 shadow-lg rounded-2xl pb-4 mb-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="w-16 h-16 rounded-full shadow-lg  ">
            <img
              src="/assets/person/1.jpeg"
              className="p-1 w-16 h-16 rounded-full "
              alt=""
            />
          </div>
          <div className="flex flex-col p-1 w-4/5">
            <div>First Last</div>
            <div className="text-gray-400">@username</div>
          </div>
          <div className="flex justify-end">
            <AiOutlineMore className="ml-3 w-4 h-4" />
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic
            iusto molestiae nesciunt, ex voluptate dicta laudantium aut unde
            omnis.
          </p>
        </div>
        <div className="w-full h-80">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2">
          <div className="flex flex-row justify-between items-center">
            <div className="px-2">
              <div className="flex flex-row space-x-2">
                <div className="flex flex-row pr-2 ">
                  <span>
                    <BiLike className="w-6 h-6 text-blue-500 cursor-pointer" />
                  </span>
                  <span>
                    <BiDislike className="w-6 h-6 text-blue-500 cursor-pointer" />
                  </span>
                  <span>
                    <BiHeart className="w-6 h-6 text-red-500 cursor-pointer" />
                  </span>
                  <span className="ml-2">32 Reactions </span>
                </div>
                <div className="flex flex-row pr-2">
                  <span>
                    <BiSquare className="w-6 h-6 text-green-500 cursor-pointer" />
                  </span>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="px-2 space-x-2">
                <span>2</span>
                <span className="text-purple-700 font-semibold cursor-pointer">
                  Comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

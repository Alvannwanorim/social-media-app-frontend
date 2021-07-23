import React from "react";

const Friends = () => {
  return (
    <div className=" ml-2 mt-4 font-roboto ">
      <div>
        <a href="#!" className="font-semibold pb-2 hover:text-blue-400">
          Followers
        </a>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="assets/person/1.jpeg"
              className="w-24 h-24 rounded-md object-cover"
              alt=""
            />
            {/* <span className="bg-green-600 absolute w-3 h-3 border-2 border-gray-50 top-0 right-1 rounded-full"></span> */}
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold">James Author </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="assets/person/2.jpeg"
              className="w-24 h-24 rounded-md object-cover"
              alt=""
            />
            {/* <span className="bg-green-600 absolute w-3 h-3 border-2 border-gray-50 top-0 right-1 rounded-full"></span> */}
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold">James Author </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="assets/person/3.jpeg"
              className="w-24 h-24 rounded-md object-cover"
              alt=""
            />
            {/* <span className="bg-green-600 absolute w-3 h-3 border-2 border-gray-50 top-0 right-1 rounded-full"></span> */}
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold">James Author </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="assets/person/4.jpeg"
              className="w-24 h-24 rounded-md object-cover"
              alt=""
            />
            {/* <span className="bg-green-600 absolute w-3 h-3 border-2 border-gray-50 top-0 right-1 rounded-full"></span> */}
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold">James Author </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

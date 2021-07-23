import React from "react";

const MutualFriends = () => {
  return (
    <div className="ml-3 mt-4  font-roboto  ">
      <div className="flex flex-col space-y-3">
        {/* online template */}
        <div className="flex flex-row pb-3 ">
          <div className="relative">
            <img
              src="assets/person/1.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-semibold">James Author </span>
            <span className="text-gray-400">@jamesauthor </span>
          </div>
        </div>
        {/* end of online template */}
        {/* online template */}
        <div className="flex flex-row pb-3">
          <div className="relative">
            <img
              src="assets/person/1.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-semibold">James Author </span>
            <span className="text-gray-400">@jamesauthor </span>
          </div>
        </div>
        {/* end of online template */}
        {/* online template */}
        <div className="flex flex-row pb-3">
          <div className="relative">
            <img
              src="assets/person/1.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-semibold">James Author </span>
            <span className="text-gray-400">@jamesauthor </span>
          </div>
        </div>
        {/* end of online template */}
        {/* online template */}
        <div className="flex flex-row">
          <div className="relative">
            <img
              src="assets/person/1.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-semibold">James Author </span>
            <span className="text-gray-400">@jamesauthor </span>
          </div>
        </div>
        {/* end of online template */}
      </div>
    </div>
  );
};

export default MutualFriends;

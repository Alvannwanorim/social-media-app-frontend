import React from "react";

const Conversations = () => {
  return (
    <div>
      <div className="mt-4 font-roboto  ">
        <div className=" p-4 mt-4 ">Active Friends</div>
        <div className="flex flex-col space-y-3">
          {/* online template */}
          <div className="flex flex-row">
            <div className="relative">
              <img
                src="assets/person/2.jpeg"
                className="w-12 h-12 rounded-full contain"
                alt=""
              />
              {/* <span className="bg-green-600 absolute w-3 h-3 border-2 border-gray-50 top-0 right-1 rounded-full"></span> */}
            </div>
            <div className="flex flex-col ml-2">
              <span className="font-semibold">James Author </span>
              <span className="text-gray-400 font-small"> 5 minutes ago </span>
            </div>
          </div>
          {/* end of online template */}
        </div>
      </div>
    </div>
  );
};

export default Conversations;

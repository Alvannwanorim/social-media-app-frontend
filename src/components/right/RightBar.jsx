import React from "react";
import Online from "../online/Online";

const RightBar = () => {
  return (
    <div className="mt-4 h-screen overflow-scroll scrollbar-hide">
      <div className="flex flex-col space-y-4">
        <div>
          <div className="flex flex-row items-center ">
            <img src="/assets/gift.png" className="w-8 h-8" alt="" />

            <div className="px-2">
              <span className="font-semibold">James Author</span>
              <span>
                {" "}
                and <span className="font-semibold">3 other Friends</span> have
                a Birthday today
              </span>
            </div>
          </div>
          <div className="mt-4 mr-3">
            <div className="p-2 rounded-xl">
              <img src="/assets/ad.png" className="rounded-xl" alt="" />
            </div>
          </div>
        </div>
        <div>friends suggestion</div>
        <div>
          <Online />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RightBar;

import React, { Fragment, useState } from "react";
import {
  BsBell,
  BsFillPersonPlusFill,
  BsFillChatSquareQuoteFill,
  BsBoxArrowInRight,
  BsSearch,
  BsChevronDown,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
const Topbar = () => {
  const [opened, setOpened] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleMenu = () => {
    setOpened(!opened);
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className="m-0 ">
      <div className="hidden lg:block w-screen h-12 shadow-lg bg-blue-500">
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/6 flex flex-row space-x-2">
            <span>image</span>
            <span>text</span>
          </div>
          <div className="w-3/6">
            <div className="flex flex-row py-2 items-center">
              <div className="bg-gray-100 rounded-xl flex p-1 w-full">
                <BsSearch className="w-6 h-6 mx-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for friend, posts and places..."
                  className="flex flex-grow focus:outline-none bg-gray-100  "
                />
              </div>
            </div>
          </div>
          <div className="w-2/6">
            <div className="flex flex-row justify-around text-gray-200 font-bold">
              <div className="hidden sm:block ">
                <div className="flex flex-row space-x-2  ">
                  <div>
                    <a href="#!">Home</a>
                  </div>
                  <div>
                    <a href="#!">TimeLine</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-row  relative">
                  <a href="#!">
                    <BsFillChatSquareQuoteFill className="w-6 h-6" />
                  </a>

                  <div className="w-4 h-4 bg-red-500 rounded-full p-2 absolute bottom-4 left-3   ">
                    {" "}
                    <span className=" text-xs font-bold absolute top-0 left-1">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex flex-row relative ">
                  <a href="#!">
                    <HiStatusOnline className="w-6 h-6" />
                  </a>
                  <div className="w-4 h-4 bg-red-500 rounded-full p-2 absolute bottom-4 left-3   ">
                    {" "}
                    <span className=" text-xs font-bold absolute top-0 left-1">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex flex-row relative">
                  <a href="#!">
                    <BsFillPersonPlusFill className="w-6 h-6" />
                  </a>
                  <div className="w-4 h-4 bg-red-500 rounded-full p-2 absolute bottom-4 left-3   ">
                    {" "}
                    <span className=" text-xs font-bold absolute top-0 left-1">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex flex-row relative ">
                  <a href="#!">
                    <BsBell className="w-6 h-6" />
                  </a>
                  <div className="w-4 h-4 bg-red-500 rounded-full p-2 absolute bottom-4 left-3   ">
                    {" "}
                    <span className=" text-xs font-bold absolute top-0 left-0 ">
                      10
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2 ">
                <div className="cursor-pointer">
                  <img
                    src="/assets/person/1.jpeg"
                    alt="profile  "
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="w-screen bg-blue-500 lg:hidden m-0 p-0">
        <div className="flex flex-col p-2 text-gray-200 font-bold pr-2">
          <div className="flex flex-row w-full justify-between items-center">
            <a href="#!" className="text-lg font-bold font-serif">
              Home
            </a>
            <div onClick={handleMenu}>
              <FaBars className="w-8 h-8 pr-2" />
            </div>
          </div>
          {opened && (
            <>
              <div className=" bg-blue-500 rounded-lg">
                <div className="flex flex-row justify-between p-1  ">
                  <div>
                    <span>Friends</span>
                  </div>
                  <div className="flex flex-row ">
                    <a href="#!">
                      <BsFillPersonPlusFill className="w-6 h-6 " />
                    </a>
                    <div className="w-4 h-4 bg-red-500 rounded-full p-2 relative  ">
                      {" "}
                      <span className=" text-xs font-bold absolute top-0 left-1">
                        1
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between p-1">
                  <div>
                    <span>Live</span>
                  </div>
                  <div className="flex flex-row ">
                    <a href="#!">
                      <HiStatusOnline className="w-6 h-6" />
                    </a>
                    <div className="w-4 h-4 bg-red-500 rounded-full p-2 relative  ">
                      {" "}
                      <span className=" text-xs font-bold absolute top-0 left-1">
                        1
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between p-1">
                  <div>
                    <span>Messages</span>
                  </div>
                  <div className="flex flex-row ">
                    <a href="#!">
                      <BsFillChatSquareQuoteFill className="w-6 h-6" />
                    </a>
                    <div className="w-4 h-4 bg-red-500 rounded-full p-2 relative  ">
                      {" "}
                      <span className=" text-xs font-bold absolute top-0 left-1">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div>
                    <span>Notifications</span>
                  </div>
                  <div className="flex flex-row ">
                    <a href="#!">
                      <BsBell className="w-6 h-6" />
                    </a>
                    <div className="w-4 h-4 bg-red-500 rounded-full p-2 relative  ">
                      {" "}
                      <span className=" text-xs font-bold absolute top-0 left-1">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div>
                    <span>Logout</span>
                  </div>
                  <div className="flex flex-row ">
                    <a href="#!">
                      <BsBoxArrowInRight className="w-6 h-6 mr-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className=" mt-2">
                <div className="flex flex-row justify-between  ">
                  <img
                    src="/assets/person/1.jpeg"
                    className="w-8 h-8 rounded-full "
                    alt=""
                  />
                  <div>
                    <BsChevronDown
                      className="w-6 h-6 mr-4"
                      onClick={handleProfile}
                    />
                  </div>
                </div>
                {profile && (
                  <>
                    <div>hello</div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

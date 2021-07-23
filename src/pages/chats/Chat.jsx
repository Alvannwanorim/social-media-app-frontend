import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Conversations from "./Conversations";
import Online from "../../components/online/Online";
const Chat = () => {
  return (
    <div className="m-0 p-0 h-screen bg-gray-50 overflow-x-hidden">
      <Topbar />
      <div className="mt-4">
        <div className="flex flex-row">
          <div className="w-3/12">
            <div>
              <Conversations />
            </div>
          </div>
          <div className="w-6/12">hello</div>
          <div className="w-3/12">
            <Online />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

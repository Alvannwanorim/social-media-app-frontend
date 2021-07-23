import React from "react";

const Details = () => {
  return (
    <div className="mt-4">
      <div className="p-2 space-y-2">
        <div>
          <h2 className="font-bold pb-2">User Information</h2>
        </div>
        <div className="flex flex-row">
          <span className="mr-2 font-semibold">City:</span>{" "}
          <span>New York</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-2 font-semibold ">From: </span> <span> USA</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-2 font-semibold ">Gender: </span>{" "}
          <span> Female</span>
        </div>

        <div className="flex flex-row">
          <span className="mr-2 font-semibold ">Relationship status: </span>{" "}
          <span> complicated</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-2 font-semibold ">Hobby </span>{" "}
          <span> Swimming</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-2 font-semibold ">Profession </span>{" "}
          <span> Laywer</span>
        </div>
      </div>
    </div>
  );
};

export default Details;

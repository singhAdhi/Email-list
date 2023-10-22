import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorite = () => {
  const list = useSelector((store) => store.mark?.data);
  console.log(list);
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="user flex border border-solid border-gray-300 p-5 rounded-md bg-[#f4f5f9] mb-5 cursor-pointer">
        <div
          dangerouslySetInnerHTML={{ __html: list[0] }}
          className="text-left content"
        ></div>
      </div>
    </div>
  );
};

export default Favorite;

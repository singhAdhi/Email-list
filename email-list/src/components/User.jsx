import React from "react";

const User = ({ subject, name, email, desc, date }) => {
  return (
    <div>
      <div className="user flex border border-solid border-gray-300 p-5 rounded-md bg-[#f4f5f9] mb-5 cursor-pointer">
        <div className="userName w-12 h-12 rounded-full bg-[#E54065] flex items-center justify-center text-white font-semibold">
          A
        </div>
        <div className="data flex justify-start items-start flex-col px-3">
          <p className="pb-2">
            From:<span className="font-semibold pl-2">{name}</span>
            <span className="font-semibold pl-2">{email}</span>
          </p>
          <p className="pb-2 ">
            Subject: <span className="pl-2 font-semibold">{subject}</span>
          </p>
          <p className="text-left pb-2">{desc}</p>
          <p className="pb-2">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

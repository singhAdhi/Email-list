import React, { useState, useEffect } from "react";
import { addMark } from "../utils/markSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Body = () => {
  const [body, setBody] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    getBody();
  }, []);

  const getBody = async () => {
    const response = await fetch(
      `https://flipkart-email-mock.now.sh/?id=${params.id}`
    );
    const value = await response.json();
    setBody(value);
  };
  function handleClick() {
    dispatch(addMark(body.body));
  }
  console.log(body);
  return (
    <div>
      <div className="user flex border border-solid border-gray-300 p-5 rounded-md bg-[#f4f5f9] mb-5 cursor-pointer">
        <div>
          <div className="userName w-12 h-12 rounded-full bg-[#E54065] flex items-center justify-center text-white font-semibold">
            A
          </div>
        </div>
        <div className="data flex justify-start items-start flex-col px-3">
          <div className="top flex justify-between w-full">
            <h1 className="font-bold text-2xl">Lorem ipsum</h1>
            <button
              className="bg-[#E54065] rounded-lg text-white p-2"
              onClick={handleClick}
            >
              Mark as Favorite
            </button>
          </div>
          <div className="middle">
            <p className="pb-2 text-lg">10/10/2997</p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: body.body }}
            className="text-left content"
          ></div>
        </div>
        <Link to="/">
          <button className="bg-[#E54065] rounded-lg text-white p-2">
            back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;

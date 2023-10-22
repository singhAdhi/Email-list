import React, { useEffect, useState } from "react";
import User from "../components/user";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../utils/dataSlice";

const EmailList = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = async () => {
    const resp = await fetch("https://flipkart-email-mock.now.sh/");
    const val = await resp.json();
    setData(val.list);
    dispatch(addData(val.list));
  };
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl ">OUTLOOK</h1>
      <div className="flex items-center">
        <p>Filter by:</p>
        <Link to="/favorite">
          <p className="pl-2 font-medium text-xl border solid p-1 mb-3 ml-3 rounded-lg">
            Favorite
          </p>
        </Link>
      </div>
      {data.map((x) => {
        const { email, name } = x.from;
        return (
          <Link to={`/${x.id}`} key={x.id}>
            <User
              key={x.id}
              subject={x.subject}
              name={name}
              email={email}
              desc={x.short_description}
              date={x.date}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default EmailList;

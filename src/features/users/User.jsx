import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Buttons from "../../components/Buttons";
const User = () => {
  const users = useSelector((store) => store.users);
  const renderCard = () =>
    users.map((users) => (
      <div key={users.id}>
        <div className="bg-gray-900 p-5 flex items-center justify-between rounded-md hover:bg-gray-300 cursor-pointer ">
          <div>
            <h3 className="font-bold text-lg text-gray-700">{users.name}</h3>
            <span className="font-normal text-gray-600">{users.lastname}</span>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <Link to="/add-user">
          <Buttons>Add users</Buttons>
        </Link>
        {console.log(users)}
        <div className="grid gap-5 md:grid-cols-2">
          {users.length ? (
            renderCard()
          ) : (
            <p className="text-center col-span-2 text-gray-700 font-semibold">
              No users here
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default User;

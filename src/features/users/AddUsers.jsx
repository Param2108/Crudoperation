import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import uuid from "react-uuid";
import Buttons from "../../components/Buttons";
import Textfield from "../../components/Textfield";
import { addUsers } from "./userSlice";

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    lastname: "",
  });
  const handleAddUser = () => {
    if (value.name.length >= 8 && value.lastname.length >= 5) {
      setValue({ name: "", lastname: "" });
      navigate("/");
      dispatch(
        addUsers({
          id: uuid(),
          name: value.name,
          lastname: value.lastname,
        })
      );
    } else {
      alert("Please enter the valid minum 8 letter word length");
    }
  };
  const handlechange = (e) => {
    setValue({ ...value, name: e.target.value });
  };
  return (
    <>
      <form>
        <Textfield
          label="Name"
          value={value.name}
          onChange={handlechange}
          inputProps={{ type: "text", placeholder: "First Name" }}
        />
        <Textfield
          label="Last Name"
          inputProps={{ type: "text", placeholder: "Last Name" }}
          onChange={(e) => setValue({ ...value, lastname: e.target.value })}
          value={value.lastname}
        />

        <Buttons onClick={handleAddUser}>Submit</Buttons>
      </form>
    </>
  );
};
export default AddUsers;

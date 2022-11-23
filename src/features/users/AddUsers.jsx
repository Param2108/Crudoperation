import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import uuid from "react-uuid";
import { useForm } from "react-hook-form";
import Buttons from "../../components/Buttons";
import Textfield from "../../components/Textfield";
import { addUsers } from "./userSlice";
import Error from "../../components/Error";

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    lastname: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddUser = (data) => {
    setValue({ name: "", lastname: "" });
    navigate("/");
    dispatch(
      addUsers({
        id: uuid(),
        name: data.name,
        lastname: data.lastname,
      })
    );
  };
  const handlechange = (e) => {
    setValue({ ...value, name: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <Textfield
          label="name"
          value={value.name}
          onChange={handlechange}
          inputProps={{ type: "text", placeholder: "First Name" }}
          register={register}
        />
        f
        <Error errors={errors} fieldName={"name"} />
        <Textfield
          label="lastname"
          register={register}
          inputProps={{ type: "text", placeholder: "Last Name" }}
          onChange={(e) => setValue({ ...value, lastname: e.target.value })}
          value={value.lastname}
        />
        <Error errors={errors} fieldName={"lastname"} />
        <Buttons onClick={handleAddUser}>Submit</Buttons>
      </form>
    </>
  );
};
export default AddUsers;

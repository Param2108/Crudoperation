import React from "react";

const Error = ({ errors, fieldName }) => {
  return (
    <>
      {errors[fieldName]?.type === "required" && (
        <p role="alert" className="text-red-500">
          Last name is required
        </p>
      )}
      {errors[fieldName]?.type === "minLength" && (
        <p role="alert" className="text-red-500">
          !Minimum length of letters should be 5
        </p>
      )}
      {errors[fieldName]?.type === "maxLength" && (
        <p role="alert" className="text-red-500">
          !The word can't go beyond the 20 letters
        </p>
      )}
      {errors[fieldName]?.type === "pattern" && (
        <p role="alert" className="text-red-500">
          !In name you can't use special character and number try to escape
          these ones
        </p>
      )}
    </>
  );
};
export default Error;

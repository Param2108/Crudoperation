import React from "react";

const Textfield = ({
  label,
  inputProps,

  register,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2  text-base text-gray-800">{label}</label>
        <input
          className="bg-gray-300 py-200 px-3 border-2 outline-none"
          {...inputProps}
          {...register(label, {
            required: true,
            maxLength: 20,
            minLength: 1,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
      </div>
    </>
  );
};
export default Textfield;

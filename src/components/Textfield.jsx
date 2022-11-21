import React from "react";

const Textfield = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2  text-base text-gray-800">{label}</label>
      <input
        className="bg-gray-300 py-200 px-3 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
        required
        minLength={10}
      />
    </div>
  );
};
export default Textfield;

import React from "react";

const Buttons = ({ onClick, children }) => {
  return (
    <>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-6 my-10 rounded hover:bg-indigo-800"
        // onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Buttons;

import React from "react";

const Input = (props) => {
  return (
    <div >
      <input className="border-2 border-black-300"
        type="text"
        value={props.value}
        onChange={(event) => console.log("value changed!")}
      />
    </div>
  );
};

export default Input;
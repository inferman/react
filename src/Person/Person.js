import React from "react";

const date = _ => new Date().getFullYear();
const age = year => date() - +year;

const person = props => {
  return (
    <div>
      <p>
        Some Person, name is {props.name} and spec is {props.spec}
      </p>
      <div>{age(props.nums)}</div>
      <p>{props.children}</p>
      <button type="button">Action</button>
    </div>
  );
};

export default person;

import React from "react";
import "./Person.css";

const date = _ => new Date().getFullYear();
const age = year => date() - +year;

const person = props => {
  return (
    <div className="Person">
      <p>
        Some Person, name is {props.name} and spec is {props.spec}
      </p>
      <div>{age(props.nums)}</div>
      <p>{props.children}</p>
      <button type="button" onClick={props.click}>
        Action
      </button>
      <input type="text" onChange={props.changed} value={props.spec} />
    </div>
  );
};

export default person;

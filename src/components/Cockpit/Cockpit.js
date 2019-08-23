import React from "react";

const cockpit = props => {
  return (
    <div className="Cockpit">
      <h1 className="testing classnames">test headline</h1>
      <p>first component</p>
      <button type="button" onClick={props.nameChange}>
        Switch Name
      </button>
      <button onClick={props.togglePersons}>Toggle persons list</button>
    </div>
  );
};

export default cockpit;

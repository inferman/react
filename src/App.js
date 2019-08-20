import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Neo", spec: "choosen one" },
      { name: "Morfius", spec: "recruiter", yearOfB: "1964" },
      { name: "Trinity", spec: "white rabbit" }
    ]
  });

  const [otherState, setOtherState] = useState("simple string");

  const switchNameHandler = _ => {
    setPersonsState({
      persons: [
        { name: "Neo", spec: "choosen one" },
        { name: "Morfius", spec: "recruiter", yearOfB: "1964" },
        { name: "Trinity", spec: "killer" }
      ]
    });
    personsState.persons[2].name = "Some name";
  };

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1 className="testing classnames">test headline</h1>
      <p>first component</p>
      <button type="button" onClick={switchNameHandler}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[1].name}
        spec={personsState.persons[1].spec}
        nums={personsState.persons[1].yearOfB}
      />
      <Person name="Neo" spec="choosen one" nums="1971">
        Some inner text
      </Person>
      <Person
        name={personsState.persons[2].name}
        spec={personsState.persons[2].spec}
        nums="1983"
      />
    </div>
  );
};

export default app;

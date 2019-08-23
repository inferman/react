import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        clicked={() => props.click(person.id)}
        name={person.name}
        spec={person.spec}
        nums={person.yearOfB}
        changed={e => props.changes(e, person.id, index)}
        key={person.id}
      />
    );
  });

export default persons;

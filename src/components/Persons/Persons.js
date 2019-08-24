import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return (
      this.props.persons.map((person, index) => {
        return (
          <Person
            clicked={() => this.props.click(person.id)}
            name={person.name}
            spec={person.spec}
            nums={person.yearOfB}
            changed={e => this.props.changes(e, person.id, index)}
            key={person.id}
          />
        )
      })
    )
  }
  
}

export default Persons;

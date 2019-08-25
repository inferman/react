import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // constructor() {super()}
  shouldComponentUpdate(nextProp, nextState) {
    console.log('[Persons.js], shouldComponentUpdate', nextProp.persons !== this.props.persons)
    return nextProp.persons !== this.props.persons;
  }

  render() {
    console.log('[Persons.js], render')
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

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

const classList = [];

class App extends Component {
  state = {
    persons: [
      { id: "wqer", name: "Neo", spec: "choosen one", yearOfB: "1964" },
      { id: "asdf", name: "Morfius", spec: "recruiter", yearOfB: "1971" },
      { id: "zxcv", name: "Trinity", spec: "white rabbit", yearOfB: "1983" }
    ],
    isListVisible: true
  };
  switchNameHandler = newProp => {
    const persons = [...this.state.persons];
    persons.forEach(person => (person.spec = newProp));
    this.setState({ persons });
  };

  specChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Neo", spec: "choosen one" },
        { name: "Morfius", spec: "recruiter", yearOfB: "1964" },
        { name: "Trinity", spec: event.target.value }
      ]
    });
  };

  togglePersonsList = () => {
    const visibility = this.state.isListVisible;
    this.setState({ isListVisible: !visibility });
  };

  setClassList = () => {
    switch (this.state.persons.length) {
      case 3:
        classList.push("App", "red", "bold");
        return classList.join(" ");
      case 2:
        classList.push("App", "red", "bold", "bg-grey");
        return classList.join(" ");
      case 1:
        classList.push("App", "bg-grey");
        return classList.join(" ");
      default:
        classList.push("App", "red", "bg-grey");
        return classList.join(" ");
    }
  };

  onNameChange = (e, id) => {
    const person = this.state.persons.find(item => item.id === id);
    const i = this.state.persons.indexOf(person);
    const persons = [...this.state.persons];
    persons[i] = person;
    this.setState({ persons });
  };

  deletePersonHandler = id => {
    const persons = this.state.persons.filter(item => item.id !== id);
    this.setState({ persons });
    console.log(this.state.persons);
  };

  render() {
    let persons = null;

    if (this.state.isListVisible) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                click={() => this.deletePersonHandler(person.id)}
                name={person.name}
                spec={person.spec}
                nums={person.yearOfB}
                changed={event => this.onNameChange(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className={this.setClassList()}>
        <h1 className="testing classnames">test headline</h1>
        <p>first component</p>
        <button
          type="button"
          onClick={() => this.switchNameHandler("totally new property")}
        >
          Switch Name
        </button>
        <button onClick={this.togglePersonsList}>Toggle persons list</button>

        {persons}
      </div>
    );
  }
}

export default App;

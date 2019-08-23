import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  onNameChange = (event, id, i) => {
    const person = this.state.persons.find(item => item.id === id);
    person.spec = event.target.value;
    const persons = [...this.state.persons];
    persons[i] = person;
    this.setState({ persons });
  };

  deletePersonHandler = id => {
    const persons = this.state.persons.filter(item => item.id !== id);
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.isListVisible) {
      persons = (
        <Persons
          click={this.deletePersonHandler}
          persons={this.state.persons}
          changes={this.onNameChange}
        />
      );
    }
    return (
      <div className={this.setClassList()}>
        <Cockpit
          nameChange={() => this.switchNameHandler("totally new property")}
          togglePersons={this.togglePersonsList}
        />
        {persons}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

const classList = [];

class App extends Component {
  state = {
    persons: [
      { name: "Neo", spec: "choosen one" },
      { name: "Morfius", spec: "recruiter", yearOfB: "1964" },
      { name: "Trinity", spec: "white rabbit" }
    ]
  };
  switchNameHandler = newProp => {
    //console.log(event);
    this.setState({
      persons: [
        { name: "Neo", spec: "choosen one" },
        { name: "Morfius", spec: "recruiter", yearOfB: "1964" },
        { name: "Trinity", spec: newProp }
      ]
    });
    this.state.persons[2].name = "Some name";
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

  render() {
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
        <Person
          name={this.state.persons[1].name}
          spec={this.state.persons[1].spec}
          nums={this.state.persons[1].yearOfB}
          click={this.switchNameHandler.bind(this, "killer")}
        />
        <Person name="Neo" spec="choosen one" nums="1971">
          Some inner text
        </Person>
        <Person
          name={this.state.persons[2].name}
          spec={this.state.persons[2].spec}
          nums="1983"
          changedArrr={this.specChangeHandler}
        />
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import "./Person.css";

const date = _ => new Date().getFullYear();
const age = year => date() - +year;

class Person extends Component {
  render() {
    return (
      <div className="Person">
      <p>
        Some Person, name is {this.props.name} and spec is {this.props.spec}
      </p>
      <div>{age(this.props.nums)}</div>
      <p>{this.props.children}</p>
      <button type="button" onClick={this.props.clicked}>
        Action
      </button>
      <input type="text" onChange={this.props.changed} value={this.props.spec} />
    </div>
    )
  }
}

export default Person;

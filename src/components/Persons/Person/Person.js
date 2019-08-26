import React, {Component, Fragment} from "react";
import "./Person.css";

import withClass from '../../../containers/withClass/withClass';

const date = _ => new Date().getFullYear();
const age = year => date() - +year;

class Person extends Component {
  render() {
    console.log('[Person!!!!!!!!.js], render')
    return (
      <Fragment>
        <p>
          Some Person, name is {this.props.name} and spec is {this.props.spec}
        </p>
        <div>{age(this.props.nums)}</div>
        <button type="button" onClick={this.props.clicked}>
          Action
        </button>
        <input type="text" onChange={this.props.changed} value={this.props.spec} />
      </Fragment>
    )
  }
}

export default withClass(Person, 'Person');

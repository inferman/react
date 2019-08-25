import React, {Component} from 'react';
import Auxiliary from '../../containers/hoc/Auxiliary';

class Sample extends Component {
  render() {
    console.log("[Sample.js], render")
    return (
      <Auxiliary>
        <p>Simple component</p>
        <p>Also this component wrapped with Auxiliary component, to pass html nodes without any wrapper node (as "div")</p>
      </Auxiliary>
    )
  }
}

export default Sample;
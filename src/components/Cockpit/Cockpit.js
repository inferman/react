import React, {useEffect} from "react";

const cockpit = props => {
  
  useEffect(() => {
    console.log("[Cockpit.js], useEffect");
    console.log(props);
    return () => { console.log("[Cockpit.js], useEffect cleanup"); }

  }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.js], useEffect");
  //   console.log(props);
  //   setTimeout(()=>{
  //     alert('useEffect in action');
  //   }, 1000);
  // }, [props.persons]);

  return (
    <div className="Cockpit">
      <h1 className="testing classnames">test headline</h1>
      <p>first component</p>
      <button type="button" onClick={props.nameChange}>
        Switch Name
      </button>
      <button onClick={props.togglePersons}>Toggle persons list</button>
    </div>
  );
};

export default cockpit;

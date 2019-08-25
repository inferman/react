import React, {useEffect} from "react";

const cockpit = props => {
  
  //Only once before destroy
  useEffect(() => () => console.log("[Cockpit.js], useEffect cleanup"), []);

  // Each time when persons get update
  // useEffect(() => {
  //   console.log("[Cockpit.js], useEffect #2");
  //   // setTimeout(()=>{
  //   //   alert('useEffect in action');
  //   // }, 1000);
  // }, [props.personsLength]);

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

// export default React.memo(cockpit);
export default cockpit;


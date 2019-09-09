import React, {
  useState
} from "react";
import "./App.css";

// const[]
const BottomRow = () => {
  // const [pen, setPen]= useState(0);

  return (

    <
    div className = "bottomRow" >
    <
    div className = "down" >
    <
    h3 className = "down__title" > Penalties < /h3> <
    div className = "down__value" > {
      pen
    } < /div> <
    /div> <
    div className = "toGo" >
    <
    h3 className = "toGo__title" > To Go < /h3> <
    div className = "toGo__value" > 7 < /div> <
    /div> <
    div className = "ballOn" >
    <
    h3 className = "ballOn__title" > Ball on < /h3> <
    div className = "ballOn__value" > 21 < /div> <
    /div> <
    div className = "quarter" >
    <
    h3 className = "quarter__title" > Half < /h3> <
    div className = "quarter__value" > 4 < /div> <
    /div> <
    /div>
  );
};

export default BottomRow;
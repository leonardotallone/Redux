// import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch, modifyValue } from "../store/ExampleSlice";

const ComponentA = () => {
  //   const [state, setState] = useState("OFF");
  const flip = useSelector((state) => state.example.flip);
  const numericValue = useSelector((state) => state.example.numericValue);
  const dispatch = useDispatch();

  //   const handleState = () => {
  //     if (state === "ON") {
  //       setState("OFF");
  //     } else {
  //       setState("ON");
  //     }
  //   };
  console.log("FLIP", flip);
  console.log("NUMERIC VALUE", numericValue);
  return (
    <div>
      <h1> A Component</h1>

      <button onClick={() => dispatch(modifyValue(1))}>increment</button>
      <button onClick={() => dispatch(modifyValue(-1))}>Decrease</button>
      <h1>{numericValue}</h1>
      {/* <button onClick={handleState}>Change State</button> */}
      <button onClick={() => dispatch(toggleSwitch())}>Change State</button>
      <h1>{flip}</h1>
      <Link to="/b_component">Go to B_Component</Link>
    </div>
  );
};

export default ComponentA;

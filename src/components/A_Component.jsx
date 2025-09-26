// import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleState } from "../store/exampleSlice";

const A_Component = () => {
  //   const [state, setState] = useState("OFF");
  const state = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  //   const handleState = () => {
  //     if (state === "ON") {
  //       setState("OFF");
  //     } else {
  //       setState("ON");
  //     }
  //   };
  console.log(state);
  return (
    <div>
      <h1>A_Component</h1>
      {/* <button onClick={handleState}>Change State</button> */}
      <button onClick={() => dispatch(toggleState())}>Change State</button>
      <h1>{state}</h1>
      <Link to="/b_component">Go to B_Component</Link>
    </div>
  );
};

export default A_Component;

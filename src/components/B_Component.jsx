import { useSelector } from "react-redux";

const ComponentB = () => {
  const flip = useSelector((state) => state.example.flip);
  const numericValue = useSelector((state) => state.example.numericValue);


  return (
    <div>
      <h1> "{flip}" Flip from A_Component</h1>
      <h1> "{numericValue}" Numeric Value from A_Component</h1>
    </div>
  );
};

export default ComponentB;

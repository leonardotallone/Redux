import { useSelector } from "react-redux";

const B_Component = () => {
  const state = useSelector((state) => state.example.value);

  return (
    <div>
      <h1> "{state}" from A_Component</h1>
    </div>
  );
};

export default B_Component;

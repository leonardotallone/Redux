
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch, modifyValue } from "../store/ExampleSlice";
import { fetchAllUsers } from "../store/GetAllUsersSlice";

const ComponentA = () => {

  const flip = useSelector((state) => state.example.flip);
  const numericValue = useSelector((state) => state.example.numericValue);
  const allUsers = useSelector((state) => state.appUsers.allUsers);

  const dispatch = useDispatch();

  return (
    <div>
      <h1> A Component</h1>

      <button onClick={() => dispatch(modifyValue(-1))}>-</button>
      <button onClick={() => dispatch(modifyValue(1))}>+</button>
      <h1>{numericValue}</h1>
      <button onClick={() => dispatch(toggleSwitch())}>Change State</button>
      <h1>{flip}</h1>
      {/* <h1>{String(flip)}</h1> */}
      <button onClick={() => dispatch(fetchAllUsers())}>Get All Users</button>
      <ul>
        {allUsers && allUsers.length > 0 ? (
          allUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
      <Link to="/b_component">Go to B Component</Link>
    </div>
  );
};

export default ComponentA;

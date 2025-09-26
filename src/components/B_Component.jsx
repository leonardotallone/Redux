import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ComponentB = () => {

  const flip = useSelector((state) => state.example.flip);
  const numericValue = useSelector((state) => state.example.numericValue);
  const allUsers = useSelector((state) => state.appUsers.allUsers);

  return (
    <div>
      <h1> "{flip}" Flip from A_Component</h1>
      <h1> "{numericValue}" Numeric Value from A_Component</h1>
       <h4>      <ul>
        {allUsers && allUsers.length > 0 ? (
          allUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul> All Users from A_Component</h4>


      <Link to="/">Go to ===  A_Component</Link>
    </div>
  );
};

export default ComponentB;

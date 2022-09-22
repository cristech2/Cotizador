import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "../context/userProvider"

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
console.log(user)
  if (!user) {
    return <Navigate to="/Login" />;
  }
  return children;
};

export default RequireAuth;
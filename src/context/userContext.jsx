import { createContext, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(false);

  const createUser = (user, password) => {
    createUserWithEmailAndPassword(auth, user, password);
  };

  return (
    <UserContext.Provider value={(user, setUser,createUser)}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

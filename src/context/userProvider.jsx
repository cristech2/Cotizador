import { createContext, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

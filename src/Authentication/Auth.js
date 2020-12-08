import React, { useEffect, useState } from "react";
import { fire } from "../config/fire";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    fire.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <h3> Please wait ...</h3>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

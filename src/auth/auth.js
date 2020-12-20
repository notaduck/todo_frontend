import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/auth.js";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <>
      {children}
    </>
  );

};

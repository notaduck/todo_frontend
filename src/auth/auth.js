import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { jwtState, userState } from "../atoms/auth.js";
import app from "./base.js";

export const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [jwt, setJwt] = useRecoilState(jwtState);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setJwt(app.auth().currentUser.getIdToken())
      console.log(jwt)
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

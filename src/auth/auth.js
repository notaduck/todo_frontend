import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { jwtState, userState } from "../atoms/auth.js";
import app from "./base.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [jwt, setJwt] = useRecoilState(jwtState);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      // user.refreshToken();
      setCurrentUser(user)
      // user && setJwt(await user.getIdToken())
      // console.log(user)
      setPending(false)
    });
  }, []);

  if (pending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader
          type="ThreeDots"
          color="#FCA5A5"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  );

};

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const createRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
   const createLogOut = () =>{
    return signOut(auth);
   }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser)
    })
    return () =>{unsubscribe()};
  },[])
  const authInfo = {
    user,
    createRegister,
    createLogin,
    createLogOut
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProviders;

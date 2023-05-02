/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const createRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createGoogle = () =>{
   return signInWithPopup(auth, googleProvider)
  
  }
   const createLogOut = () =>{
    return signOut(auth);
   }
   const CreateResetPass = (email) =>{
    return sendPasswordResetEmail(auth,email)
   }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser)
    })
    return () =>{unsubscribe()};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const authInfo = {
    user,
    createRegister,
    createLogin,
    createGoogle,
    createLogOut,
    CreateResetPass
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProviders;

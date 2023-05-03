/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
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
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const createRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const createGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };
  const createLogOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const CreateResetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      
    });
    return () => { 
       return unsubscribe();
       };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authInfo = {
    user,
    loading,
    createRegister,
    createLogin,
    createGoogle,
    createGithub,
    createLogOut,
    CreateResetPass,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProviders;

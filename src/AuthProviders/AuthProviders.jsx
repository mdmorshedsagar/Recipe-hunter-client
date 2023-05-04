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

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  
 
 
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
 
  const CreateResetPass = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
     
      setUser(currentUser);
      setLoading(false);
      
    });
    return () =>{
      return unsubscribe();
    }
    
  }, []);
  const createLogOut = () => {
    setLoading(true)
    return signOut(auth);
  };
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

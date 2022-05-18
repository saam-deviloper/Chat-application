import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Auth } from "../firebase/firebase";

export const UserContext = createContext();

export function AppContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  //google auth provider
  const GoogleProvider = new GoogleAuthProvider();


  const [alert,setAlert] =useState({
    type:'',
    message:'',
  })
 
  //when comp mount
  useEffect(() => {
      onAuthStateChanged(Auth,user=>{
        if(user)setCurrentUser(user);
        else setCurrentUser(null)
      })
  }, [currentUser]);

  //signup method
  const signUpUser =  (email, pass) => {
    return  createUserWithEmailAndPassword(Auth, email, pass);
  };
  //log in user
  const signInUser =  (email, pass) => {
    return  signInWithEmailAndPassword(Auth, email, pass);
  };
  const signInGoogleUser =  () => {
    signInWithPopup(Auth,GoogleProvider)
    .then( (result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      return user;
    }
    )
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };

  return (
    <UserContext.Provider value={{ currentUser, signUpUser, setCurrentUser,setAlert,alert,signInUser,signInGoogleUser }}>
      {children}
    </UserContext.Provider>
  );
}

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

// social auth providers
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  //github signIn

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  //Logout
  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    singInUser,
    googleSignIn,
    githubSignIn,
    Logout,
    user,
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default FirebaseProvider;

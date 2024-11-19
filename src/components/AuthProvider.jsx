import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

    const [user,setUser]= useState(null)

    const [loading,setLoading]= useState(true)

    const handleRegister = (email,password,name,image)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    
    const handleGoogleLogin = ()=>{
       return signInWithPopup(auth,googleProvider)
    }

    // const manageProfile = (user)=>{
    //    return updateProfile(auth.currentUser,{
    //         displayName:user?.name,photoUrl:user?.image
    //     })
    // }

    const handleLogout =()=>{
        signOut(auth)
    }

    const authInfo ={
        handleLogin,
        handleLogout,
        handleRegister,
        handleGoogleLogin,
        // manageProfile,
        user,
        setUser,
        loading
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                
            }
            else{
                setUser(null)
            }
            setLoading(false)
            return()=>{
                unsubscribe()
            }
        })
    },[])
    return (
        <div>
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;
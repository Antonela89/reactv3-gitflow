import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase'

export const authContext =  createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('No hay Auth Provider');
    return context;
}

export function AuthProvider ({children}) {
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
   
return (
        <authContext.Provider value= {{signup, login}}>{children}</authContext.Provider>
    );  
}
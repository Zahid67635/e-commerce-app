/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { createContext, useEffect, useState } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const updateUser = (data) => {
        setLoading(true)
        return updateProfile(auth.currentUser, data)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()


    }, [])

    const authInfo = { user, loading, createUser, login, logout, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
export default UserContext;
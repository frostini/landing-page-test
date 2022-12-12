import React, { createContext, useState, useContext, useEffect } from 'react'
import { Auth } from 'aws-amplify'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
          try {
            await Auth.currentAuthenticatedUser().then((user)=> {
              setUser(user)
              setLoading(false)
            })
          } catch (error) {
              console.log('error signing in', error);
          }
        }
        if (user) {
          setLoading(false)
        }
        loadUserFromCookies()

    }, [user])

    const login = async (username, password) => {
      try {
        const user = await Auth.signIn(username, password)
        if (user) {
          setUser(user)
          setLoading(false)
        }
        console.log('new login user: ', user)
        return user
      } catch (error) {
        console.log('error signing in', error);
      }
    }

    const logout = async (email, password) => {
      try {
        await Auth.signOut();
        setUser(null)
      } catch (error) {
        console.log('error logging out: ', error)
      }
    }
    return (
        <AuthContext.Provider value={{ 
          isAuthenticated: !!user,
          user,
          login,
          loading,
          logout
        }}>
          {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
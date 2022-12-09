import React, { createContext, useState, useContext, useEffect } from 'react'
import { Amplify, Hub, Auth } from 'aws-amplify'
import Router, { useRouter } from 'next'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
          try {
            await Auth.currentAuthenticatedUser().then((user)=> {
              setUser(user)
            })
          } catch (error) {
              console.log('error signing in', error);
          }

            // const token = Cookies.get('token')
            // if (token) {
            //     console.log("Got a token in the cookies, let's see if it is valid")
            //     api.defaults.headers.Authorization = `Bearer ${token}`
            //     const { data: user } = await api.get('users/me')
            //     if (user) setUser(user);
            // }
            if (user) {
              setLoading(false)
            }
        }
        loadUserFromCookies()
    }, [])
    // if (user) {
    //   debugger
    // }

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
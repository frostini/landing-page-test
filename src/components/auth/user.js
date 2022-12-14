import React, { createContext, useState, useContext, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    async function loadUserFromCookies() {
      try {
        await Auth.currentAuthenticatedUser().then((user)=> {
          setUser(user)
          setLoading(false)
        })
      } catch (error) {
          console.log('error signing n', error);
      }
    }
    useEffect(() => {
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

    const signUp = async (values) => {
      const { email: username, password } = values
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: username,          // optional
                    'custom:kindOf': 'government' ////[1]
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            setUser(user)
            setLoading(false)
            console.log('new user: ', user);  
            return user
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    const resetConfirmCode = async ({username}) => {
      try {
        await Auth.resendSignUp(username)
        console.log('code resent successfully');
      } catch (err) {
        console.log('error re-sending confirmation code: ', err)

      }
    }
    const confirmSignUp = async ({username, code}) => {
      try {
        return await Auth.confirmSignUp(username, code)
        
      } catch (error) {
          console.log('error confirming sign up', error);
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
          signUp,
          confirmSignUp,
          resetConfirmCode,
          loading,
          logout
        }}>
          {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { clearUser, readUser, writeUser } from '../utils/userStorage';

export type User = {
    id: number
    email:string
    name:string
}

type AuthContextType = {
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user,setUser] = useState<User|null>(()=>{
    const loggedInUser = readUser()
    return loggedInUser ? JSON.parse(loggedInUser) : null
  })

  const setAuth = (authUser: User|null) => {
    setUser(authUser)
    if (authUser) {
      writeUser(JSON.stringify(authUser))
    } else { 
      clearUser()
    }
  }

  return (
    <AuthContext.Provider value={{ user, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for accessing the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}
export default AuthProvider
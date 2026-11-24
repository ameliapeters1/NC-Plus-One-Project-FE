import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type User = {
    email:string
}

type AuthContextType = {
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User|null>(null)
  const setAuth = (authUser: User|null) => {
    setUser(authUser)
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
        throw new Error("something bad")
    }

    return context
}
export default AuthProvider
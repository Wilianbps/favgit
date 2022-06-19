import { createContext, useState, ReactNode, useContext } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface IAuthContext {
  logged: boolean
  loading: boolean
  setLoading: any
  signIn(email: string, password: string): void
  signOut(): void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = sessionStorage.getItem('@wil:logged')
    return !!isLogged
  })

  const [loading, setLoading] = useState(false)

  async function signIn(email: string, password: string) {
    if (email === 'favgit@gmail.com' && password === 'favgit') {
      sessionStorage.setItem('@wil:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválido')
      setLoading(false)
    }
  }

  const signOut = async () => {
    sessionStorage.removeItem('@wil:logged')
    setLogged(false)
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        logged,
        signIn,
        signOut,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)

  return context
}

export { useAuth }

import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext
} from 'react'

import api from '../services/api'

interface RepositoriesProviderProps {
  children: ReactNode
}

interface Repositories {
  name: string
  html_url: string
  owner: {
    id: number
    avatar_url: string
  }

  stargazers_count: number
  sucess: boolean
}

interface RepositoriesContextData {
  repositories: Repositories[]
  setRepositories: any
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData
)

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([])

  async function loadRepositories() {
    await api
      .get('')
      .then((response: any) => setRepositories(response.data.items))
      .catch((error: any) => console.log(error))
  }

  useEffect(() => {
    loadRepositories()
  }, [])

 
  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        setRepositories
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}

export function useRepositories() {
  const context = useContext(RepositoriesContext)

  return context
}

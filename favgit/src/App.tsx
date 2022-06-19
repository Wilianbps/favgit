import { AuthProvider } from './hooks/auth'
import { RepositoriesProvider } from './hooks/useRepo'
import { RoutesApp } from './routes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <AuthProvider>
      <RepositoriesProvider>
        <GlobalStyle />
        <RoutesApp />
      </RepositoriesProvider>
    </AuthProvider>
  )
}

export default App

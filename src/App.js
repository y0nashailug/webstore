import { useRoutes } from 'react-router-dom'
import { tokenService } from './services/storageService'
import routes from './router'
import './App.css'

function App() {
  const loggedIn = !!tokenService.getToken()
  const routing = useRoutes(routes(loggedIn))

  return (
    <>{routing}</>
  )
}

export default App

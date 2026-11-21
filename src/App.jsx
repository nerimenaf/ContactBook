import UserList from './components/UserList.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <span className="header-logo" aria-hidden="true">📇</span>
          <div>
            <h1>ContactBook</h1>
            <p>Tous vos contacts, réunis au même endroit.</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <UserList />
      </main>

      <footer className="app-footer">
        Données fournies par l'API JSONPlaceholder
      </footer>
    </div>
  )
}

export default App

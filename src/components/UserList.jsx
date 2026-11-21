import { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard.jsx'

function UserList() {
  // États gérés avec useState
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  // Une seule requête au moment du montage du composant
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data) // response.data contient la liste des utilisateurs
        setLoading(false)
      })
      .catch(() => {
        setError('Une erreur est survenue lors du chargement des contacts.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="status">Chargement des contacts…</p>
  }

  if (error) {
    return <p className="status status-error">{error}</p>
  }

  // Filtrage des contacts selon la recherche (insensible à la casse)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <section className="contacts">
      <div className="toolbar">
        <div className="search-box">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher un contact…"
            aria-label="Rechercher un contact par nom"
          />
        </div>
        <p className="total">
          Nombre total de contacts : <strong>{users.length}</strong>
        </p>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="status">Aucun contact ne correspond à votre recherche.</p>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
              address={`${user.address.street}, ${user.address.city}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default UserList

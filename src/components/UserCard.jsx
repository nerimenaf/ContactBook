// Carte réutilisable : elle affiche les informations d'un contact reçues par props.
function UserCard({ name, username, email, phone, website, company, address }) {
  // Premières lettres du nom, utilisées comme avatar.
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="user-card">
      <div className="user-card-header">
        <div className="avatar" aria-hidden="true">
          {initials}
        </div>
        <div>
          <h2 className="user-name">{name}</h2>
          <p className="user-username">@{username}</p>
        </div>
      </div>

      <ul className="contact-list">
        <li>
          <span className="contact-icon" aria-hidden="true">✉</span>
          <div>
            <span className="contact-label">Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </li>
        <li>
          <span className="contact-icon" aria-hidden="true">☎</span>
          <div>
            <span className="contact-label">Téléphone</span>
            <span>{phone}</span>
          </div>
        </li>
        <li>
          <span className="contact-icon" aria-hidden="true">🌐</span>
          <div>
            <span className="contact-label">Site web</span>
            <a href={`https://${website}`} target="_blank" rel="noreferrer">
              {website}
            </a>
          </div>
        </li>
        <li>
          <span className="contact-icon" aria-hidden="true">📍</span>
          <div>
            <span className="contact-label">Adresse</span>
            <span>{address}</span>
          </div>
        </li>
      </ul>

      <span className="company-tag">{company}</span>
    </article>
  )
}

export default UserCard

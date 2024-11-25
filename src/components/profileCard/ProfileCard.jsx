import './ProfiCard.css'

function ProfileCard({user}) {
  return(
    
  <div className="profile-card">
    <img
      src={user.avatar}
      alt={`${user.firstName} ${user.lastName}`}
      className="img-conteiner"
    />
    <h2>{`${user.firstName} ${user.lastName}`}</h2>
    <p>Род деятельности:{user.occupation}</p>
    <p>Хобби: {user.hobbies.join(", ")}</p>
  </div>
  )
}

export default ProfileCard;
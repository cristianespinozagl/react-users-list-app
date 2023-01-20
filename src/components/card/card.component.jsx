import './card.style.css';

const Card = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className='card-container'>
      <img className='user-image' alt='user' src={require(`../../../public/users/${id}.jpg`)} />
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};


export default Card;
import Card from '../card/card.component'
import './card-list.style.css';

const CardList = ({ users }) => {
  return (
    <div className='card-list'>
      {
        users.map((user) => {
          return (
            <Card key={user.id} user={user} />
          )
        })
      }
    </div>
  )
}

export default CardList;
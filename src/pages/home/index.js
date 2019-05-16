import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    name: 'React',
    id: 1,
    path: '/react/overview',
  },
  {
    name: 'Modern JavaScript',
    id: 2,
    path: '/modern-javascript/overview',
  },
  {
    name: 'Modern Web Development',
    id: 3,
    path: '/modern-web-development/overview',
  },
]

const TrainingCard = ({ card }) => (
  <Link to={card.path}>
    <div>{card.name}</div>
  </Link>
)
const renderTrainingCards = cards => {
  return cards.map(card => <TrainingCard key={card.id} card={card} />)
}

const HomePage = () => {
  return <main>{renderTrainingCards(cards)}</main>
}

export default HomePage

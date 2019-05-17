import React from 'react'
import { Link } from 'react-router-dom'
import trainingCardStyles from './trainingCard.module.scss'

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
  <section>
    <Link to={card.path} className={trainingCardStyles.link}>
      <section className={trainingCardStyles.card}>
        <p className={trainingCardStyles.text}>{card.name}</p>
      </section>
    </Link>
  </section>
)
const renderTrainingCards = cards => {
  return cards.map(card => <TrainingCard key={card.id} card={card} />)
}

const HomePage = () => {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '30px',
      }}
    >
      {renderTrainingCards(cards)}
    </main>
  )
}

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'
import trainingCardStyles from './trainingCard.module.scss'

const cards = [
  {
    name: 'Modern JavaScript',
    id: 1,
    path: '/modern-javascript/overview',
  },
  {
    name: 'Modern Web Development',
    id: 2,
    path: '/modern-web-development/overview',
  },
  {
    name: 'React',
    id: 3,
    path: '/react/overview',
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
    <main>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        {renderTrainingCards(cards)}
      </section>
    </main>
  )
}

export default HomePage

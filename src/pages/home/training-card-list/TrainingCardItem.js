import React from 'react'
import { Link } from 'react-router-dom'
import trainingCardStyles from './trainingCard.module.scss'

const TrainingCardItem = ({ card }) => (
  <section>
    <Link to={card.path} className={trainingCardStyles.link}>
      <section className={trainingCardStyles.card}>
        <p className={trainingCardStyles.text}>{card.name}</p>
      </section>
    </Link>
  </section>
)

export default TrainingCardItem

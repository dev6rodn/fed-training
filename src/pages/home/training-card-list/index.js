import React from 'react'
import trainingCardStyles from './trainingCard.module.scss'
import TrainingCardItem from './TrainingCardItem'

const TrainingCardList = ({ cardsConfig }) => {
  return (
    <section className={trainingCardStyles.container}>
      {cardsConfig.map(card => (
        <TrainingCardItem key={card.id} card={card} />
      ))}
    </section>
  )
}

export default TrainingCardList

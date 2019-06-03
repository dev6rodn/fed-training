import React from 'react'
import TrainingCardList from './training-card-list'
import { cardsConfig } from './cards-config'

const HomePage = () => {
  return (
    <main>
      <TrainingCardList cardsConfig={cardsConfig} />
    </main>
  )
}

export default HomePage

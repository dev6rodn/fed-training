import React from 'react'
import TrainingCardList from './training-card-list'
import { modulesConfig } from '../modules-config'

const HomePage = () => {
  return (
    <main>
      <TrainingCardList cardsConfig={modulesConfig} />
    </main>
  )
}

export default HomePage

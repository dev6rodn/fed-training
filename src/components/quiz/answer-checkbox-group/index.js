import React, { useState, useEffect } from 'react'
import answerFormStyles from './formStyles.module.scss'
const AnswerCheckboxGroup = ({ answers, updateAnswerSubmission }) => {
  const [answersList, setAnswersList] = useState([])

  useEffect(() => {
    const updatedAnswersList = answers.map(answer => {
      return { ...answer, checked: false }
    })

    setAnswersList(updatedAnswersList)
  }, [answers])

  const handleChange = indexOfAnswer => {
    const updatedState = answersList.map((item, i) =>
      indexOfAnswer === i ? { ...item, checked: !item.checked } : item
    )

    setAnswersList(updatedState)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    updateAnswerSubmission(answersList)
  }

  const checkboxes = answersList.map((answerItem, i) => (
    <label key={answerItem.text}>
      <input
        type="checkbox"
        id={answerItem.text}
        checked={answerItem.checked}
        onChange={() => handleChange(i)}
      />
      <span>{answerItem.text}</span>
    </label>
  ))

  return (
    <form className={answerFormStyles.content} onSubmit={handleFormSubmit}>
      {checkboxes}
      <button>Submit</button>
    </form>
  )
}

export default AnswerCheckboxGroup

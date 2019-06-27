import React, { useState } from 'react'
import AnswerCheckboxGroup from './answer-checkbox-group'

const QuizItem = props => {
  const [quizItem, setQuizItem] = useState(0)

  const { question, answers } = props.data[quizItem]

  const handleAnswerSubmission = questionResponses => {
    // validateQuestion(answer)

    // provideFeedbackToUser

    //proceedToNextQuizItem
    console.log(questionResponses)
    if (quizItem < props.data.length - 1) {
      setQuizItem(quizItem + 1)
    }
  }

  return (
    <main>
      <h3>{question.text}</h3>
      {question.image && <img src={question.image} alt="code view" />}
      <AnswerCheckboxGroup
        answers={answers}
        updateAnswerSubmission={handleAnswerSubmission}
      />
    </main>
  )
}

export default QuizItem

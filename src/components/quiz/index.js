import React, { useState } from 'react'
import AnswerCheckboxGroup from './answer-checkbox-group'
import { isCorrectAnswer } from './helpers/question-answer'

const QuizItem = props => {
  const [quizItem, setQuizItem] = useState(0)

  const { questions } = props.data[quizItem]

  const handleAnswerSubmission = questionResponses => {
    console.log('the question response', questionResponses)

    const hasCorrectAnswer = isCorrectAnswer(questionResponses)
    console.log('the correct answer', hasCorrectAnswer)
    // provideFeedbackToUser

    //proceedToNextQuizItem
    if (quizItem < props.data.length - 1) {
      setQuizItem(quizItem + 1)
    }
  }

  return (
    <main>
      <h3>{questions[quizItem].text}</h3>
      {questions[quizItem].image && (
        <img src={questions[quizItem].image} alt="code view" />
      )}
      <AnswerCheckboxGroup
        answers={questions[quizItem].answers}
        updateAnswerSubmission={handleAnswerSubmission}
      />
    </main>
  )
}

export default QuizItem

import React, { useState } from 'react'
import AnswerCheckboxGroup from './answer-checkbox-group'
import { isCorrectAnswer } from './helpers/question-answer'
import assessmentStyles from './assessmentStyles.module.scss'

const QuizItem = ({ moduleAssessmentData }) => {
  const [quizItem, setQuizItem] = useState(0)
  const { questions } = moduleAssessmentData

  const handleAnswerSubmission = questionResponses => {
    console.log('the question response', questionResponses)

    const hasCorrectAnswer = isCorrectAnswer(questionResponses)
    console.log('the correct answer', hasCorrectAnswer)
    // provideFeedbackToUser

    //proceedToNextQuizItem
    if (quizItem < questions.length - 1) {
      setQuizItem(quizItem + 1)
    }
  }

  return (
    <section className={assessmentStyles.content}>
      <h1>{questions[quizItem].text}</h1>
      <img src={questions[quizItem].codeImg} alt="code view" />
      <AnswerCheckboxGroup
        answers={questions[quizItem].answers}
        updateAnswerSubmission={handleAnswerSubmission}
      />
    </section>
  )
}

export default QuizItem

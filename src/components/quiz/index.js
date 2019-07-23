import React, { useState } from 'react'
import AnswerCheckboxGroup from './answer-checkbox-group'
import { isCorrectAnswer } from './helpers/question-answer'
import assessmentStyles from './assessmentStyles.module.scss'

const QuizItem = ({ moduleAssessmentData = {} }) => {
  const [quizItemIndex, setQuizItemIndex] = useState(0)
  const { questions } = moduleAssessmentData

  const handleAnswerSubmission = questionResponses => {
    console.log('the question response', questionResponses)

    const hasCorrectAnswer = isCorrectAnswer(questionResponses)
    console.log('the correct answer', hasCorrectAnswer)
    // provideFeedbackToUser

    //proceedToNextQuizItem
    if (quizItemIndex < questions.length - 1) {
      setQuizItemIndex(quizItemIndex + 1)
    }
  }

  return questions ? (
    <section className={assessmentStyles.content}>
      <h1>{questions[quizItemIndex].text}</h1>
      <img src={questions[quizItemIndex].codeImg} alt="code view" />
      <AnswerCheckboxGroup
        answers={questions[quizItemIndex].answers}
        updateAnswerSubmission={handleAnswerSubmission}
      />
    </section>
  ) : (
    <section>Pending module assessment, come back later :) </section>
  )
}

export default QuizItem

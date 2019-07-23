import React, { useState } from 'react'
import AnswerCheckboxGroup from './answer-checkbox-group'
import {
  isCorrectAnswer,
  computeActualAssessmentScore,
} from './helpers/question-answer'
import assessmentStyles from './assessmentStyles.module.scss'

const QuizItem = ({ questions, moduleName, totalPointsAllowed }) => {
  const [quizItemIndex, setQuizItemIndex] = useState(0)
  const [buttonText, setButtonText] = useState('Submit')
  const [questionAnswers, setQuestionAnswers] = useState([])
  console.log({ questions })
  const handleAssessmentCompletion = (currentQuestionData, userAnswers) => {
    const actualAssessmentScore = computeActualAssessmentScore(questionAnswers)
    const results = questions.map((question, index) => {
      return {
        codeImg: question.codeImg,
        resource: question.resource,
        score: question.score,
        text: question.text,
        answers: questionAnswers[index],
      }
    })
    const sendToGraphQL = {
      module: moduleName,
      totalPointsAllowed,
      totalPointsAchieved: actualAssessmentScore,
      studyPlan: 'studyPlan',
      results: results,
    }
    console.log(sendToGraphQL)
  }

  const handleAnswerSubmission = (userAnswers, currentQuestionData) => {
    console.log('the question response', userAnswers)
    console.log('the question data', currentQuestionData)

    const hasCorrectAnswer = isCorrectAnswer(userAnswers)
    console.log('the correct answer', hasCorrectAnswer)
    //Todo: provideFeedbackToUser

    if (buttonText === 'Complete Assessment') {
      handleAssessmentCompletion(currentQuestionData, userAnswers)
    } else {
      //proceedToNextQuizItem
      if (quizItemIndex < questions.length - 1) {
        setQuizItemIndex(quizItemIndex + 1)
      } else {
        setButtonText('Complete Assessment')
      }
    }

    //Add to questionAnswers array
    setQuestionAnswers([...questionAnswers, userAnswers])
  }

  return (
    <section className={assessmentStyles.content}>
      <h1>{questions[quizItemIndex].text}</h1>
      <img src={questions[quizItemIndex].codeImg} alt="code view" />
      <AnswerCheckboxGroup
        answers={questions[quizItemIndex].answers}
        updateAnswerSubmission={userAnswers => {
          handleAnswerSubmission(userAnswers, questions[quizItemIndex])
        }}
        submitButtonText={buttonText}
      />
    </section>
  )
}

export default QuizItem

export const isCorrectAnswer = answerList => {
  return answerList.every(answerItem => {
    return answerItem.isCorrect === answerItem.checked
  })
}

export const computeActualAssessmentScore = questionAnswers => {
  const actualAssessmentScores = computeAssessmentScores(questionAnswers)

  return actualAssessmentScores.reduce((accum, score) => accum + score, 0)
}

const computeAssessmentScores = questionAnswers => {
  return questionAnswers.map(answers => {
    const score = answers.reduce((answerAccum, answer) => {
      const singleQuestionScore = answer.isCorrect && answer.checked ? 1 : 0
      return answerAccum + singleQuestionScore
    }, 0)
    return score
  })
}

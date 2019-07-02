export const isCorrectAnswer = answerList => {
  return answerList.every(answerItem => {
    return answerItem.isCorrect === answerItem.checked
  })
}

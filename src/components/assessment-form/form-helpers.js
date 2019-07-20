export const transformQuestionValues = values => {
  const answers = [
    { text: values.correctAnswer, isCorrect: true },
    { text: values.answer2, isCorrect: (values.answer2Checkbox = false) },
    { text: values.answer3, isCorrect: (values.answer3Checkbox = false) },
    { text: values.answer4, isCorrect: (values.answer4Checkbox = false) },
  ]
  return {
    text: values.question,
    score: values.score,
    resource: values.resource,
    codeImg: values.codeImg,
    answers,
  }
}

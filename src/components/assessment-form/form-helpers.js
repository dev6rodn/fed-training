export const transformQuestionValues = values => {
  const answers = [
    { text: values.correctAnswer, isCorrect: true, checked: true },
    {
      text: values.answer2,
      isCorrect: (values.answer2Checkbox = false),
      checked: (values.answer2Checkbox = false),
    },
    {
      text: values.answer3,
      isCorrect: (values.answer3Checkbox = false),
      checked: (values.answer3Checkbox = false),
    },
    {
      text: values.answer4,
      isCorrect: (values.answer4Checkbox = false),
      checked: (values.answer4Checkbox = false),
    },
  ]

  const score = answers.reduce((accum, answer) => {
    const score = answer.isCorrect ? 1 : 0
    return accum + score
  }, 0)
  return {
    text: values.question,
    score: score,
    resource: values.resource,
    codeImg: values.codeImg,
    answers,
  }
}

import React from 'react'

const QuestionList = ({ onAddFormItemsClick, itemCount }) => {
  const renderQuestionSet = () => {
    const questionItems = Array(itemCount)
    console.log(questionItems)
    console.log('rendered')
    return questionItems.map(elem => {
      return (
        <React.Fragment>
          <input />
          <input />
          <input />
          <input />
        </React.Fragment>
      )
    })
  }
  return (
    <section>
      {renderQuestionSet()}
      <span onClick={onAddFormItemsClick}>+</span>
    </section>
  )
}

export default QuestionList

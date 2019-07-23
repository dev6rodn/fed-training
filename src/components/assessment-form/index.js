import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField, SimpleFileUpload } from 'formik-material-ui'
import { Button } from '@material-ui/core'
import AnswerList from './answer-list'
import { transformQuestionValues } from './form-helpers'

const FormList = ({ handleFormSubmit }) => {
  const handleSubmit = async (values, { resetForm }) => {
    const newStructure = transformQuestionValues(values)
    const file = values.codeImg

    handleFormSubmit(file, newStructure)
    resetForm({
      question: '',
      codeImg: undefined,
      score: undefined,
      resource: '',
      correctAnswer: '',
      answer2: '',
      answer2Checkbox: false,
      answer3: '',
      answer3Checkbox: false,
      answer4: '',
      answer4Checkbox: false,
    })
  }

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Formik onSubmit={handleSubmit}>
        {({ submitForm, isSubmitting, values, setFieldValue }) => {
          return (
            <Form>
              <Field
                required
                name={`question`}
                label="Question"
                type="text"
                component={TextField}
              />

              <Field
                required
                name={`codeImg`}
                accept="image/.jpg"
                label="Image"
                type="file"
                component={SimpleFileUpload}
              />

              <br />
              <Field
                required
                name={`resource`}
                label="Learning Resource URL"
                type="text"
                component={TextField}
              />
              <br />

              <AnswerList />
              <Field
                required
                name={`score`}
                label="Score: # correct answers"
                type="number"
                component={TextField}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Add Question to Assessment
              </Button>
            </Form>
          )
        }}
      </Formik>
    </main>
  )
}

export default FormList

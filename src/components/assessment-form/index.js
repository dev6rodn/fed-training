import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField, SimpleFileUpload } from 'formik-material-ui'
import { Button } from '@material-ui/core'
import AnswerList from './answer-list'
import { transformQuestionValues } from './form-helpers'

const FormList = ({ updateModuleTest }) => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)

          const newStructure = transformQuestionValues(values)
          console.log('new structure', newStructure)
          updateModuleTest(oldstate => [...oldstate, newStructure])
        }, 500)
      }}
    >
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

            <Field
              required
              name={`score`}
              label="Score"
              type="number"
              component={TextField}
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

            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Confirm Question Item
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormList

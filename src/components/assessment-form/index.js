import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField, SimpleFileUpload } from 'formik-material-ui'
import { Button } from '@material-ui/core'
import uuid from 'uuid/v4'
import AnswerList from './answer-list'
import { transformQuestionValues } from './form-helpers'
import { Storage } from 'aws-amplify'
import config from '../../aws-exports'

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config

const FormList = ({ updateModuleTest, moduleName }) => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    console.log(values.codeImg)
    console.log(values.codeImg.name)
    const newStructure = transformQuestionValues(values)
    const file = values.codeImg

    const extension = file.name.split('.')[1]
    const { type: mimeType } = file
    const key = `images/${moduleName}${uuid()}.${extension}`
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
    newStructure.codeImg = url

    try {
      await Storage.put(key, file, {
        contentType: mimeType,
      })
    } catch (err) {
      console.log('error: ', err)
    }
    updateModuleTest(oldstate => [...oldstate, newStructure])
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

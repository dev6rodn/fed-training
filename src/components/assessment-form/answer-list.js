import React from 'react'
import { Field } from 'formik'
import { TextField, Checkbox } from 'formik-material-ui'

const AnswerList = () => {
  return (
    <React.Fragment>
      <Field
        required
        name={`correctAnswer`}
        label="Correct Answer"
        type="text"
        component={TextField}
      />

      <section>
        <Field
          required
          name={`answer2`}
          label="Other Answer"
          type="text"
          component={TextField}
        />
        <Field required name={`answer2Checkbox`} component={Checkbox} />
      </section>
      <section>
        <Field
          required
          name={`answer3`}
          label="Other Answer"
          type="text"
          component={TextField}
        />
        <Field required name={`answer3Checkbox`} component={Checkbox} />
      </section>
      <section>
        <Field
          required
          name={`answer4`}
          label="Other Answer"
          type="text"
          component={TextField}
        />
        <Field required name={`answer4Checkbox`} component={Checkbox} />
      </section>
    </React.Fragment>
  )
}

export default AnswerList

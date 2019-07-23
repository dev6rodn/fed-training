import React, { useState, useEffect } from 'react'
import FormList from '../../components/assessment-form'
import uuid from 'uuid/v4'
import { createModuleTest, updateModuleTest } from '../../graphql/mutations'
import { Storage } from 'aws-amplify'
import API, { graphqlOperation } from '@aws-amplify/api'
import config from '../../aws-exports'
import { modulesConfig } from '../modules-config'
import { searchModuleTests } from '../../graphql/queries'
API.configure(config)

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config

const AdminPortalPage = () => {
  const [moduleTest, setModuleTest] = useState([])
  const [moduleName, setModuleName] = useState('modern-javascript')

  useEffect(() => {
    API.graphql(
      graphqlOperation(searchModuleTests, {
        filter: { id: { eq: moduleName } },
      })
    ).then(({ data }) => {
      const savedQuestions = data.searchModuleTests.items.map(
        item => item.questions
      )

      setModuleTest([...savedQuestions][0])
    })
  }, [moduleName])
  const handleFormSubmit = async (file, moduleQuestion) => {
    const totalPointsAllowed = [...moduleTest, moduleQuestion].reduce(
      (accum, item) => accum + item.score,
      0
    )

    if (file) {
      const [name, extension] = file.name.split('.')
      const { type: mimeType } = file
      const key = `images/${moduleName}-${name}-${uuid()}.${extension}`
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
      moduleQuestion.codeImg = url

      await Storage.put(key, file, {
        contentType: mimeType,
      }).catch(err => console.log('Saving img to S3 error: ', err))
    }

    const inputData = {
      id: moduleName,
      module: moduleName,
      totalPointsAllowed,
      questions: [...moduleTest, moduleQuestion],
    }

    await API.graphql(graphqlOperation(updateModuleTest, { input: inputData }))
      .catch(async err => {
        console.log('error updating module, attempting to create... ', err)
        await API.graphql(
          graphqlOperation(createModuleTest, {
            input: inputData,
          })
        ).catch(err => console.log('error creating module...', err))
      })
      .finally(() => {
        console.log('all done processing, safely turn off spinner.')
      })

    setModuleTest(oldstate => [...oldstate, moduleQuestion])
  }
  return (
    <main>
      <select
        value={moduleName}
        onChange={e => {
          setModuleName(e.target.value)
          setModuleTest([])
        }}
      >
        {modulesConfig.map(module => {
          return (
            <option key={module.id} value={module.urlName}>
              {module.name}
            </option>
          )
        })}
      </select>
      <FormList handleFormSubmit={handleFormSubmit} />
    </main>
  )
}

export default AdminPortalPage

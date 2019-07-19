import React, { useState } from 'react'
import FormList from '../../components/assessment-form'

const AdminPage = () => {
  const [moduleTest, setModuleTest] = useState([])

  console.log(moduleTest)
  return <FormList updateModuleTest={setModuleTest} />
}

export default AdminPage

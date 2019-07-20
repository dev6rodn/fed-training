import React, { useState } from 'react'
import FormList from '../../components/assessment-form'

const AdminPortalPage = () => {
  const [moduleTest, setModuleTest] = useState([])
  const [moduleName, setModuleName] = useState('modern-javascript')

  console.log('moduleInfo in AdminPortal', {
    id: moduleName,
    module: moduleName,
    questions: moduleTest,
  })
  return (
    <main>
      <select
        value={moduleName}
        onChange={e => {
          setModuleName(e.target.value)
          setModuleTest([])
        }}
      >
        <option value="modern-javascript">Modern JavaScript</option>
        <option value="modern-web-development">Modern Web Development</option>
        <option value="react">React</option>
        <option value="redux">Redux</option>
      </select>
      <FormList updateModuleTest={setModuleTest} />
    </main>
  )
}

export default AdminPortalPage

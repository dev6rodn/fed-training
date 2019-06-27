import React, { useState } from 'react'

const AdminPortalPage = () => {
  const [moduleName, setModuleName] = useState('')
  const [questionText, setQuestionText] = useState('')
  const [questionScore, setQuestionScore] = useState(0)
  const [learningResource, setLearningResource] = useState('')
  const [codePicUrl, setCodePicUrl] = useState('')
  const [answer1Text, setAnswer1Text] = useState('')
  const [answer2Text, setAnswer2Text] = useState('')
  const [answer3Text, setAnswer3Text] = useState('')
  const [answer4Text, setAnswer4Text] = useState('')

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)

  const handleCheck1 = () => setCheck1(!check1)
  const handleCheck2 = () => setCheck2(!check2)
  const handleCheck3 = () => setCheck3(!check3)
  const handleCheck4 = () => setCheck4(!check4)

  const handleSubmit = () => {}

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <section>
          <label>
            Module Name
            <input
              value={moduleName}
              onChange={e => setModuleName(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Question Score
            <input
              type="number"
              value={questionScore}
              onChange={e => setQuestionScore(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Learning Resource
            <input
              value={learningResource}
              onChange={e => setLearningResource(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Question
            <input
              value={questionText}
              onChange={e => setQuestionText(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Code Pic Url
            <input
              value={codePicUrl}
              onChange={e => setCodePicUrl(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Answer 1
            <input
              value={answer1Text}
              onChange={e => setAnswer1Text(e.target.value)}
            />
            <label>
              correct answer?
              <input type="checkbox" onChange={handleCheck1} />
            </label>
          </label>
        </section>
        <section>
          <label>
            Answer 2
            <input
              value={answer2Text}
              onChange={e => setAnswer2Text(e.target.value)}
            />
            <label>
              correct answer?
              <input type="checkbox" onChange={handleCheck2} />
            </label>
          </label>
        </section>
        <section>
          <label>
            Answer 3
            <input
              value={answer3Text}
              onChange={e => setAnswer3Text(e.target.value)}
            />
            <label>
              correct answer?
              <input type="checkbox" onChange={handleCheck3} />
            </label>
          </label>
        </section>
        <section>
          <label>
            Answer 4
            <input
              value={answer4Text}
              onChange={e => setAnswer4Text(e.target.value)}
            />
            <label>
              correct answer?
              <input type="checkbox" onChange={handleCheck4} />
            </label>
          </label>
        </section>

        <button>Submit</button>
      </form>
    </main>
  )
}

export default AdminPortalPage

// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateModuleTest = `subscription OnCreateModuleTest {
  onCreateModuleTest {
    id
    module
    totalPointsAllowed
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
        checked
      }
    }
  }
}
`
export const onUpdateModuleTest = `subscription OnUpdateModuleTest {
  onUpdateModuleTest {
    id
    module
    totalPointsAllowed
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
        checked
      }
    }
  }
}
`
export const onDeleteModuleTest = `subscription OnDeleteModuleTest {
  onDeleteModuleTest {
    id
    module
    totalPointsAllowed
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
        checked
      }
    }
  }
}
`
export const onCreateUserAssessment = `subscription OnCreateUserAssessment {
  onCreateUserAssessment {
    id
    username
    employer
    assessments {
      moduleName
      totalPointsAllowed
      totalPointsAchieved
      studyPlan
      results {
        score
        text
        resource
        codeImg
      }
    }
  }
}
`
export const onUpdateUserAssessment = `subscription OnUpdateUserAssessment {
  onUpdateUserAssessment {
    id
    username
    employer
    assessments {
      moduleName
      totalPointsAllowed
      totalPointsAchieved
      studyPlan
      results {
        score
        text
        resource
        codeImg
      }
    }
  }
}
`
export const onDeleteUserAssessment = `subscription OnDeleteUserAssessment {
  onDeleteUserAssessment {
    id
    username
    employer
    assessments {
      moduleName
      totalPointsAllowed
      totalPointsAchieved
      studyPlan
      results {
        score
        text
        resource
        codeImg
      }
    }
  }
}
`

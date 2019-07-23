// eslint-disable
// this is an auto generated file. This will be overwritten

export const createModuleTest = `mutation CreateModuleTest($input: CreateModuleTestInput!) {
  createModuleTest(input: $input) {
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
export const updateModuleTest = `mutation UpdateModuleTest($input: UpdateModuleTestInput!) {
  updateModuleTest(input: $input) {
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
export const deleteModuleTest = `mutation DeleteModuleTest($input: DeleteModuleTestInput!) {
  deleteModuleTest(input: $input) {
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
export const createUserAssessment = `mutation CreateUserAssessment($input: CreateUserAssessmentInput!) {
  createUserAssessment(input: $input) {
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
        answers {
          text
          isCorrect
          checked
        }
      }
    }
  }
}
`
export const updateUserAssessment = `mutation UpdateUserAssessment($input: UpdateUserAssessmentInput!) {
  updateUserAssessment(input: $input) {
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
        answers {
          text
          isCorrect
          checked
        }
      }
    }
  }
}
`
export const deleteUserAssessment = `mutation DeleteUserAssessment($input: DeleteUserAssessmentInput!) {
  deleteUserAssessment(input: $input) {
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
        answers {
          text
          isCorrect
          checked
        }
      }
    }
  }
}
`

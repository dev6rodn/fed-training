// eslint-disable
// this is an auto generated file. This will be overwritten

export const createModuleTest = `mutation CreateModuleTest($input: CreateModuleTestInput!) {
  createModuleTest(input: $input) {
    id
    module
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
      }
    }
  }
}
`;
export const updateModuleTest = `mutation UpdateModuleTest($input: UpdateModuleTestInput!) {
  updateModuleTest(input: $input) {
    id
    module
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
      }
    }
  }
}
`;
export const deleteModuleTest = `mutation DeleteModuleTest($input: DeleteModuleTestInput!) {
  deleteModuleTest(input: $input) {
    id
    module
    questions {
      score
      text
      resource
      codeImg
      answers {
        text
        isCorrect
      }
    }
  }
}
`;
export const createUserAssessment = `mutation CreateUserAssessment($input: CreateUserAssessmentInput!) {
  createUserAssessment(input: $input) {
    id
    username
    results {
      moduleName
      moduleScore
      quizItems {
        score
        text
        resource
        codeImg
      }
    }
    studyPlan
  }
}
`;
export const updateUserAssessment = `mutation UpdateUserAssessment($input: UpdateUserAssessmentInput!) {
  updateUserAssessment(input: $input) {
    id
    username
    results {
      moduleName
      moduleScore
      quizItems {
        score
        text
        resource
        codeImg
      }
    }
    studyPlan
  }
}
`;
export const deleteUserAssessment = `mutation DeleteUserAssessment($input: DeleteUserAssessmentInput!) {
  deleteUserAssessment(input: $input) {
    id
    username
    results {
      moduleName
      moduleScore
      quizItems {
        score
        text
        resource
        codeImg
      }
    }
    studyPlan
  }
}
`;

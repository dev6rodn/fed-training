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
      }
    }
  }
}
`;
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
      }
    }
  }
}
`;
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
      }
    }
  }
}
`;
export const onCreateUserAssessment = `subscription OnCreateUserAssessment {
  onCreateUserAssessment {
    id
    username
    employer
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
export const onUpdateUserAssessment = `subscription OnUpdateUserAssessment {
  onUpdateUserAssessment {
    id
    username
    employer
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
export const onDeleteUserAssessment = `subscription OnDeleteUserAssessment {
  onDeleteUserAssessment {
    id
    username
    employer
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

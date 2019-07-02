// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateModuleTest = `subscription OnCreateModuleTest {
  onCreateModuleTest {
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
export const onUpdateModuleTest = `subscription OnUpdateModuleTest {
  onUpdateModuleTest {
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
export const onDeleteModuleTest = `subscription OnDeleteModuleTest {
  onDeleteModuleTest {
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
export const onCreateUserAssessment = `subscription OnCreateUserAssessment {
  onCreateUserAssessment {
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
export const onUpdateUserAssessment = `subscription OnUpdateUserAssessment {
  onUpdateUserAssessment {
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
export const onDeleteUserAssessment = `subscription OnDeleteUserAssessment {
  onDeleteUserAssessment {
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

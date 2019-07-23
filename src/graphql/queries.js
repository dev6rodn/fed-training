// eslint-disable
// this is an auto generated file. This will be overwritten

export const getModuleTest = `query GetModuleTest($id: ID!) {
  getModuleTest(id: $id) {
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
export const listModuleTests = `query ListModuleTests(
  $filter: ModelModuleTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listModuleTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`
export const getUserAssessment = `query GetUserAssessment($id: ID!) {
  getUserAssessment(id: $id) {
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
export const listUserAssessments = `query ListUserAssessments(
  $filter: ModelUserAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserAssessments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      employer
      assessments {
        moduleName
        totalPointsAllowed
        totalPointsAchieved
        studyPlan
      }
    }
    nextToken
  }
}
`
export const searchModuleTests = `query SearchModuleTests(
  $filter: SearchableModuleTestFilterInput
  $sort: SearchableModuleTestSortInput
  $limit: Int
  $nextToken: Int
) {
  searchModuleTests(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`
export const searchUserAssessments = `query SearchUserAssessments(
  $filter: SearchableUserAssessmentFilterInput
  $sort: SearchableUserAssessmentSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUserAssessments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      employer
      assessments {
        moduleName
        totalPointsAllowed
        totalPointsAchieved
        studyPlan
      }
    }
    nextToken
  }
}
`

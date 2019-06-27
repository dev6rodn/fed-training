// eslint-disable
// this is an auto generated file. This will be overwritten

export const getModuleTest = `query GetModuleTest($id: ID!) {
  getModuleTest(id: $id) {
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
export const listModuleTests = `query ListModuleTests(
  $filter: ModelModuleTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listModuleTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      module
      questions {
        score
        text
        resource
        codeImg
      }
    }
    nextToken
  }
}
`;
export const getUserAssessment = `query GetUserAssessment($id: ID!) {
  getUserAssessment(id: $id) {
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
export const listUserAssessments = `query ListUserAssessments(
  $filter: ModelUserAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserAssessments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      results {
        moduleName
        moduleScore
      }
      studyPlan
    }
    nextToken
  }
}
`;
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
      questions {
        score
        text
        resource
        codeImg
      }
    }
    nextToken
  }
}
`;
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
      results {
        moduleName
        moduleScore
      }
      studyPlan
    }
    nextToken
  }
}
`;

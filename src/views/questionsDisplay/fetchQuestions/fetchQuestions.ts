import type { Router } from 'vue-router'
import type { QuestionData } from '../QuizQuestions.vue'

// based on category and limit return url for api call
export const determineApiUrl = (chosenCategory: string, chosenLimit: number) => {
  const apiURL: string = import.meta.env.VITE_API_URL
  const apiKey: string = import.meta.env.VITE_API_KEY

  return chosenCategory === 'Randomize'
    ? `${apiURL}?apiKey=${apiKey}&limit=${chosenLimit}&multiple=false`
    : `${apiURL}?apiKey=${apiKey}&category=${chosenCategory}&limit=${chosenLimit}&multiple=false`
}

// fetch questions based on api link, return data or undefined(for error handling)
export const fetchQuizQuestions = async (
  chosenCategory: string,
  chosenLimit: number
): Promise<QuestionData[]> => {
  const apiCallURL = determineApiUrl(chosenCategory, chosenLimit)
  const response = await fetch(apiCallURL)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data || undefined
}

export function loadErrorPage(router: Router, error: unknown) {
  console.error('Error fetching quiz questions:', error)
  router.push({ name: 'error' })
}

// to extract what answer is correct from the api response (search for key with value 'true')
export function getCorrectAnswer(questionData: QuestionData) {
  const correctAnswerKey = Object.keys(questionData.correct_answers).find(
    key => questionData.correct_answers[key] === 'true'
  )
  return correctAnswerKey ? correctAnswerKey.replace('_correct', '') : ''
}

// in api response questions have answers up until f, even if they are null, this function is to eliminate those questions
//  returns array of answers (keys) where value is not null or empty string
export function filterAnswers(questionData: QuestionData) {
  return Object.entries(questionData.answers).reduce(
    (acc, [key, value]) => {
      if (value && value !== null && value.trim() !== '') {
        acc[key] = value as string
      }
      return acc
    },
    {} as Record<string, string>
  )
}

export function transformQuestionData(questionData: QuestionData) {
  const correctAnswer = getCorrectAnswer(questionData)
  const filteredAnswers = filterAnswers(questionData)

  return {
    id: questionData.id,
    question: questionData.question,
    answers: filteredAnswers,
    correctAnswer
  }
}

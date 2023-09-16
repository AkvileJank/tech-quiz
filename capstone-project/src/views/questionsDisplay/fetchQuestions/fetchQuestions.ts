import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { QuestionData } from '../QuizQuestions.vue'

export const determineApiUrl = (chosenCategory: string, chosenLimit: number) => {
  const apiURL: string = import.meta.env.VITE_API_URL
  const apiKey: string = import.meta.env.VITE_API_KEY

  return chosenCategory === 'Randomize'
    ? `${apiURL}?apiKey=${apiKey}&limit=${chosenLimit}&multiple=false`
    : `${apiURL}?apiKey=${apiKey}&category=${chosenCategory}&limit=${chosenLimit}&multiple=false`
}

export const fetchQuizQuestions = async (
  chosenCategory: string,
  chosenLimit: number,
  dataLoaded: Ref<boolean>,
  router: Router
) => {
  try {
    const apiCallURL = determineApiUrl(chosenCategory, chosenLimit)
    const response = await fetch(apiCallURL)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    dataLoaded.value = true
    return data
  } catch (error) {
    console.error('Error fetching quiz questions:', error)
    router.push({ name: 'error' })
    return null
  }
}

export function getCorrectAnswer(questionData: QuestionData) {
  const correctAnswerKey = Object.keys(questionData.correct_answers).find(
    key => questionData.correct_answers[key] === 'true'
  )
  return correctAnswerKey ? correctAnswerKey.replace('_correct', '') : ''
}

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


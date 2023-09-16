import { expect, it, describe } from 'vitest'
import { ref } from 'vue'
import router from '@/router'
import * as fetchQuestions from './fetchQuestions'
import type { QuestionData } from '../QuizQuestions.vue'

const apiURL: string = import.meta.env.VITE_API_URL
const apiKey: string = import.meta.env.VITE_API_KEY

describe('returning api url', () => {
  it('should return api url with given category and limit', () => {
    const category = 'Linux'
    const limit = 5
    const result = fetchQuestions.determineApiUrl(category, limit)
    const expectedResult = `${apiURL}?apiKey=${apiKey}&category=Linux&limit=5&multiple=false`
    expect(result).toBe(expectedResult)
  })

  it('should return api url without category if category is `Randomize`', () => {
    const category = 'Randomize'
    const limit = 10
    const result = fetchQuestions.determineApiUrl(category, limit)
    const expectedResult = `${apiURL}?apiKey=${apiKey}&limit=10&multiple=false`
    expect(result).toBe(expectedResult)
  })
})

describe('fetching questions data from api', () => {
  const category = 'Linux'
  const limit = 5
  const dataLoaded = ref(false)

  it('fetch 5 questions from api', async () => {
    const dataToTest: QuestionData[] = await fetchQuestions.fetchQuizQuestions(
      category,
      limit,
      dataLoaded,
      router
    )
    const result = dataToTest.length
    expect(result).toBe(5)
  })

  it('finding correct answer from fetched data', () => {
    const questionData: QuestionData = {
      id: 33,
      question: 'In Linux, the priority of a running process can be changed using which command?',
      answers: {
        answer_a: 'priority',
        answer_b: 'renice',
        answer_c: 'ps -A',
        answer_d: 'passwd'
      },
      correct_answers: {
        answer_a_correct: 'false',
        answer_b_correct: 'true',
        answer_c_correct: 'false',
        answer_d_correct: 'false'
      }
    }
    expect(fetchQuestions.getCorrectAnswer(questionData)).toBe('answer_b')
  })
})

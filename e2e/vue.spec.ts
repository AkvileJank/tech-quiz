import { test, expect } from '@playwright/test'

test('landing to homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('greeting')).toBeVisible()

  await page.getByTestId('toScoresButton').click()
  await expect(page).toHaveURL(/.*scores/)

  await page.goto('/')
  await page.getByTestId('toQuizButton').click()
  await expect(page).toHaveURL(/.*configure/)
})

test('quiz configuration', async ({ page }) => {
  await page.goto('/configure')
  await expect(page.getByRole('button', { name: 'Start quiz' })).toBeDisabled()
  await page.getByTestId('categorySelector').selectOption('Linux')
})

test('quiz questions loaded', async ({ page }) => {
  await page.goto('/quiz')
  await expect(page.getByRole('button', { name: 'Finish quiz' })).toBeDisabled()

  const answerOptions = page.locator('#answer_a')
  const count = await answerOptions.count()

  await expect(count).toBe(20)

  for (let i = 0; i <= 19; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await page.getByTestId(`question-${i}-answer_a`).locator('#answer_a').check()
  }
  await expect(page.getByRole('button', { name: 'Finish quiz' })).toBeEnabled()
  await page.getByRole('button', { name: 'Finish quiz' }).click()
})

test('seeing quiz result', async ({ page }) => {
  await page.goto('/quiz')
  for (let i = 0; i <= 19; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await page.getByTestId(`question-${i}-answer_a`).locator('#answer_a').check()
  }
  await page.getByRole('button', { name: 'Finish quiz' }).click()
  await expect(page).toHaveURL('/result')
  await expect(page.getByTestId('score')).toBeVisible()

  const questions = page.locator('h2')
  const count = await questions.count()
  expect(count).toBe(20)

  await page.getByTestId('returnHome').click()
  await expect(page).toHaveURL(/.*/)
})

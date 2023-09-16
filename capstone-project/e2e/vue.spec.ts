import { test, expect } from '@playwright/test'

test('landing to homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('greeting')).toBeVisible

  await page.getByTestId('toScoresButton').click()
  await expect(page).toHaveURL(/.*scores/)

  await page.goto('/')
  await page.getByTestId('toQuizButton').click()
  await expect(page).toHaveURL(/.*configure/)
})

test('quiz configuration', async ({ page }) => {
  await page.goto('/configure')
  await expect(page.getByRole('button', { name: 'Start quiz' })).toBeDisabled
  await page.getByTestId('categorySelector').selectOption('Linux')
})

test('quiz questions loaded', async ({ page }) => {
  await page.goto('/quiz')
  await expect(page.getByRole('button', { name: 'Finish quiz' })).toBeDisabled

  const radioButtons = await page.$$('input[type="radio"]')
  await radioButtons.forEach(radioButton => radioButton.check())
  await expect(page.getByRole('button', { name: 'Finish quiz' })).toBeEnabled
})

test('seeing quiz result', async ({ page }) => {
  await page.goto('/result')
  await expect(page.getByTestId('score')).toBeVisible
  await expect(page.getByTestId('questionsAnswersDisplay')).toBeVisible
  await page.getByRole('button', { name: 'Return home' }).click()
  await expect(page).toHaveURL('/')
})

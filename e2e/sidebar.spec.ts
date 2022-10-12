import { test, expect } from '@playwright/test'

test('homepage has Enekofolio in title and book a call linking to the sidebar', async ({
  page
}) => {
  await page.goto('http://localhost:3000/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Enekofolio/)

  // create a locator
  const bookACall = page.getByTitle(/Book a Call/i)

  // Expect an attribute "to be strictly equal" to the value.
  await expect(bookACall).toHaveAttribute('href', '#')

  // Click the get started link.
  await bookACall.click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*Book/)
})

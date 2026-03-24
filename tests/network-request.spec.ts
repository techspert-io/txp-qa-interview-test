import { expect, test } from '@playwright/test';

test(
  'can retrieve a random question and reveal the answer',
  async ({ page }) => {
    // Increase timeout because the code has a forced delay of 7-13 seconds,line 31 from question.tsx
    test.setTimeout(20000);

    await page.goto('/network-request');

    // Click to get the question
    await page.getByRole('button', { name: 'Get a question' }).click();

    // Wait for the CircularProgress to disappear or the question to appear
    // The question text is inside an Alert with role 'alert'.
    const questionAlert = page.locator('.MuiAlert-root.MuiAlert-standardInfo');
    await expect(questionAlert).toBeVisible({ timeout: 15000 });

    // Verify that the reveal answer button is available
    const revealButton = page.getByRole('button', { name: 'Reveal answer' });
    await expect(revealButton).toBeVisible();

    // Show the answer
    await revealButton.click();

    // Verify that the answer appears (Success Alert, answer is random)
    const answerAlert = page.locator('.MuiAlert-root.MuiAlert-standardSuccess');
    await expect(answerAlert).toBeVisible();
  },
);

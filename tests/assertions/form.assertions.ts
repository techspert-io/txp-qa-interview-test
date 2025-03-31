import { Page, expect } from '@playwright/test';
import { FormPage } from '../pageObject/form.page';

export class FormAssertions {
  private formPage: FormPage;

  constructor(page: Page) {
    this.formPage = new FormPage(page);
  }

  async verifySubmittedValues({
    fullName,
    email,
    dateOfBirth,
    experience,
    education,
  }: {
    fullName: string;
    email: string;
    dateOfBirth: string;
    experience: string;
    education: string;
  }) {
    await expect(this.formPage.submittedName).toHaveText(fullName);
    await expect(this.formPage.submittedEmail).toHaveText(email);
    await expect(this.formPage.submittedDob).toHaveText(dateOfBirth);
    await expect(this.formPage.submittedExperience).toHaveText(experience);
    await expect(this.formPage.submittedEducation).toHaveText(education);
  }

  async verifyValidationErrorsPresent() {
    await expect(this.formPage.alert).toBeVisible();
    await expect(this.formPage.alert).toHaveText(
      'Review the highlighted errors and try again',
    );
  }

  async verifyInvalidEmailErrorPresent() {
    await this.verifyValidationErrorsPresent();
    await expect(
      this.formPage.getInputHelperText('emailAddress'),
    ).toBeVisible();
    await expect(this.formPage.getInputHelperText('emailAddress')).toHaveText(
      'Please enter a valid email address',
    );
  }
}

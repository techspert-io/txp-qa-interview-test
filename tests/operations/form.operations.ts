import { Page } from '@playwright/test';
import { FormPage } from '../pageObject/form.page';

export class FormOperations {
  private formPage: FormPage;

  constructor(page: Page) {
    this.formPage = new FormPage(page);
  }

  async fillForm({
    firstName,
    lastName,
    email,
    dateOfBirth,
    experience,
    education,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    experience: string;
    education: string;
  }) {
    await this.formPage.firstName.fill(firstName);
    await this.formPage.lastName.fill(lastName);
    await this.formPage.emailAddress.fill(email);
    await this.formPage.dateOfBirth.fill(dateOfBirth);
    await this.formPage.yearsOfExperience.fill(experience);
    await this.formPage.educationLevel.click();
    await this.formPage.page.getByText(education).click();
  }

  async submit() {
    await this.formPage.submitButton.click();
  }
}

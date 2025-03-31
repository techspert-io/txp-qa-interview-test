import { Locator, Page } from '@playwright/test';

export class FormPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly emailAddress: Locator;
  readonly dateOfBirth: Locator;
  readonly yearsOfExperience: Locator;
  readonly educationLevel: Locator;
  readonly submitButton: Locator;
  readonly alert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.emailAddress = page.locator('#emailAddress');
    this.dateOfBirth = page.locator('#dateOfBirth');
    this.yearsOfExperience = page.locator('#yearsOfExperience');
    this.educationLevel = page.locator('#educationLevel');
    this.submitButton = page.locator("button[type='submit']");
    this.alert = page.locator('form [role=alert]');
  }

  getValueByLabel(label: string): Locator {
    return this.page.locator(`ul > div > li:has-text("${label}") p`).nth(1);
  }

  get submittedName(): Locator {
    return this.getValueByLabel('Name');
  }

  get submittedEmail(): Locator {
    return this.getValueByLabel('Email address');
  }

  get submittedDob(): Locator {
    return this.getValueByLabel('Date of birth');
  }

  get submittedExperience(): Locator {
    return this.getValueByLabel('Years of experience');
  }

  get submittedEducation(): Locator {
    return this.getValueByLabel('Highest education level');
  }

  getInputHelperText(input: string): Locator {
    return this.page.locator(`#${input}-helper-text`);
  }
}

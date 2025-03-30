import { test } from '@playwright/test';
import { FormAssertions } from './assertions/form.assertions';
import { FormInputData } from './Interfaces/form.interface';
import { FormOperations } from './operations/form.operations';


let formOperations: FormOperations;
let formAssertions: FormAssertions;
let formData: FormInputData;

test.beforeEach(async ({ page }) => {
  await page.goto('/form');
  formOperations = new FormOperations(page);
  formAssertions = new FormAssertions(page);
  formData = {
    firstName: 'Marko',
    lastName: 'Vasquez',
    email: 'marko.vasquez@test.com',
    dateOfBirth: '1990-10-08',
    experience: '4',
    education: `Bachelor's degree`,
  };
});

test('[Form] can submit the form with minimal data', async () => {
  await formOperations.fillForm(formData);
  await formOperations.submit();
  await formAssertions.verifySubmittedValues({
    fullName: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    dateOfBirth: formData.dateOfBirth,
    experience: formData.experience,
    education: formData.education,
  });
});


test('[Form] cannot submit the form with an invalid email address',
  async () => {
    formData = {
      ...formData,
      email: 'marko.vasquez'
    };
    await formOperations.fillForm(formData);
    await formOperations.submit();
    await formAssertions.verifyInvalidEmailErrorPresent();
  },
);

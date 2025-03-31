import { request, test } from '@playwright/test';
import { NetworkAssertions } from './assertions/network.assertions';
import { NetworkOperations } from './operations/network.operations';

//Note: I am not sure if do you want me to get the fact thorugh the API or the UI so I am to do both for this one.

let networkAssertions: NetworkAssertions;
let networkOperations: NetworkOperations;

test.beforeEach(async ({ page }) => {
  networkAssertions = new NetworkAssertions(page);
  networkOperations = new NetworkOperations(page);
});

test('[Network-req] can retrieve a random fact using UI', async ({ page }) => {
  await page.goto('/network-request');
  await networkOperations.getRandomFact();
  await networkAssertions.verifyRandomFactAlert();
});

test('[Network-req] can retrieve a random fact from the API', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://dogapi.dog/api/v2/facts');
  const body = await response.json();
  const fact = body.data[0];
  const attributes = fact.attributes;

  networkAssertions.verifyDogFactsAPIResponseBody(attributes.body);
  console.log('Dog fact:', attributes.body);
});

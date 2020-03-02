const { Given, When, Then } = require("cucumber");

const mockDates = require("./dates");

Given("the date {int}-{int}-{int}", (year, month, day) => {
  mockDates.setTargetDate(new Date(year, month - 1, day));
});

When("I compare with target date", () => {
  mockDates.compareDates();
})

Then("the result should be {string}", (result) => {
  return mockDates.result === result;
})

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// Case 2: Number Cards (2-10)
test(`Should return the numerical value when given a number card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Invalid Cards (["11♠", "JX", "♠A"])
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("JX")).toThrow();
  expect(() => getCardValue("♠A")).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

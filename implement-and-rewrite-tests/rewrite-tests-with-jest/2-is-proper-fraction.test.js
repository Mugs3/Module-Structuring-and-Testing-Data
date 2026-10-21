import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is One
test(`should return true when denominator is two`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// Special case: numerator is two
test(`should return false when denominator is 2`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

// Special case: numerator is negative number
test(`should return false when the negative numerator's magnitude equals the denominator)`, () => {
  expect(isProperFraction(-1, 1)).toEqual(false);
});

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

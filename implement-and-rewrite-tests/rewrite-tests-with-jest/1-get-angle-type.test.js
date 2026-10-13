import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when (angle === 90)`, () => {
  // Test various right angles, including boundary cases
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (angle > 90 && angle < 180)`, () => {
  // Test various obtuse angles, including boundary cases
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
  expect(getAngleType(169)).toEqual("Obtuse angle");
  expect(getAngleType(101)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  // Test various straight angles, including boundary cases
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
test(`should return "Reflex angle" when (angle > 180 && angle < 360)`, () => {
  // Test various reflex angles, including boundary cases
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
  expect(getAngleType(305)).toEqual("Reflex angle");
  expect(getAngleType(200)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
test(`should return "Invalid angle" when (angle === Invalid)`, () => {
  // Test various invalid angles, including boundary cases
  expect(getAngleType(361)).toEqual("Invalid angle");
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-181)).toEqual("Invalid angle");
});

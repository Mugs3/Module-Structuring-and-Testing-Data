import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Valid single-digit card", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Valid single-digit card", () => {
  assert.equal(getCardValue("7♦"), 7);
});

test("Valid Valid numeric vale", () => {
  assert.equal(getCardValue("J♣"), 10);
});

test("Valid numeric vale", () => {
  assert.equal(getCardValue("K♣"), 10);
});

test("Valid numeric vale", () => {
  assert.equal(getCardValue("Q♦"), 10);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("Invalid"),
    /The card you entered is invalid\. Please enter a valid card\./,
    "Expected a clear error for an invalid card"
  );
});

// TODO: What other invalid card cases can you think of?

test("Invalid string", () => {
  assert.throws(() => getCardValue("11♠"), /The card you entered is invalid/);
});

test("Invalid string", () => {
  assert.throws(() => getCardValue("1♥"), /The card you entered is invalid/);
});

test("Invalid string", () => {
  assert.throws(() => getCardValue("JX"), /The card you entered is invalid/);
});

test("Invalid string", () => {
  assert.throws(() => getCardValue("♠A"), /The card you entered is invalid/);
});

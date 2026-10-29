import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midday", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly convert midnight", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert 2 hours before 12:00", function () {
  assert.equal(formatAs12HourClock("10:00"), "10:00 am");
});

test("can correctly convert 30 minutes before 12:00", function () {
  assert.equal(formatAs12HourClock("11:30"), "11:30 am");
});

test("can correctly convert time at the beginning of noon", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});

test("can correctly convert half hour before midnight", function () {
  assert.equal(formatAs12HourClock("23:30"), "11:30 pm");
});

test("can correctly convert 1 minute before midnight", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("can correctly convert half past midnight", function () {
  assert.equal(formatAs12HourClock("00:30"), "12:30 am");
});

test("can correctly convert 1 minute before midday", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("can correctly convert 1 hour after midday", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

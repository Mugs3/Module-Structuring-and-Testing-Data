function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  if (time == "00") {
    return `12:00:${minutes} am`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else if (hours === 12) {
    return `12:${minutes} pm`;
  } else {
    return `${time} am`;
  }
}

console.log(formatAs12HourClock("23:00"));
console.log(formatAs12HourClock("14:00"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("08:15"));
console.log(formatAs12HourClock("00:00"));

export { formatAs12HourClock };

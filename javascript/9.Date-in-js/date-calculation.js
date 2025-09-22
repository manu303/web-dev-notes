//my approach -approximate

/*
const startDate = new Date();
const endDate = new Date(2026, 2, 4, 0, 0, 0, 0);

const timeDifference = endDate - startDate;

const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));
const months = Math.floor((timeDifference / (1000 * 60 * 60 * 24 * 30)) % 12);
const days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 30);
const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
const seconds = Math.floor((timeDifference / 1000) % 60);
const milliseconds = Math.floor(timeDifference % 1000);

console.log(
  `years : ${years},months : ${months},days : ${days},hours : ${hours},minutes : ${minutes},seconds : ${seconds},milliseconds : ${milliseconds}`
);
*/

//accurate approach
function calculateTimeDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();
  let milliseconds = end.getMilliseconds() - start.getMilliseconds();

  // Handle negative values by borrowing from higher units
  if (milliseconds < 0) {
    milliseconds += 1000;
    seconds--;
  }
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds, milliseconds };
}

const startDate = new Date();
const endDate = new Date(2026, 2, 4); // 4 March 2026
console.log(calculateTimeDifference(startDate, endDate));

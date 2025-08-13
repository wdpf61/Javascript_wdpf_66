// date-time-examples.js
// 1. Create a date object for current date and time
const now = new Date();
// console.log("Current Date & Time:", now);

// 2. Create a specific date
// const birthday = new Date('2000-01-01');
// console.log("Specific Date (Birthday):", birthday);

// // 3. Extract parts of the date
// console.log("Year:", now.getFullYear());
// console.log("Month (0-11):", now.getMonth());
// console.log("Date (Day of Month):", now.getDate());
// console.log("Day of Week (0-6):", now.getDay());
// console.log("Hours:", now.getHours());
// console.log("Minutes:", now.getMinutes());
// console.log("Seconds:", now.getSeconds());

// // 4. Modify parts of the date
// let futureDate = new Date();
// futureDate.setFullYear(2030);
// futureDate.setMonth(11); // December
// futureDate.setDate(25);
// console.log("Modified Future Date:", futureDate);

// // 5. Date to timestamp (milliseconds since Jan 1, 1970)
// const timestamp = now.getTime();
// console.log("Timestamp (ms):", timestamp);

// // 6. Difference between two dates
// const startDate = new Date('2025-01-01');
// const endDate = new Date('2025-03-16');
// const diffMs = endDate - startDate;
// const diffDays = diffMs / (1000 * 60 * 60 * 24);
// console.log(`Difference: ${diffDays} days`);

// // 7. Formatting dates
// console.log("Date String:", now.toDateString());
// console.log("Time String:", now.toTimeString());
// console.log("ISO Format:", now.toISOString());
// console.log("Locale Date:", now.toLocaleDateString());
// console.log("Locale Time:", now.toLocaleTimeString());

// // 8. Countdown example (until New Year)
const newYear = new Date('2026-01-01');
const timeLeftMs = newYear - now;
const daysLeft = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
// console.log(`Days until New Year 2026: ${daysLeft} days`);

//9. Real-time clock (updates every second)

// setInterval(() => {
//     const time = new Date();
//     console.log("⏰ 🍟🍟Time Now:", time.toLocaleTimeString());
// }, 2000);  // Run every 1 second


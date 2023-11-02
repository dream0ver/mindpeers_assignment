// Let's say we're measuring time in minutes. Here's the data we have:
// The total of all the values in the chartData should be 1440 minutes because there are 1440 minutes in 24 hours.
// In the array of objects below, when the isUsage flag is true, it means the time is spent actively using the app. Otherwise, it's time spent away from the app.
// I've tried to make the logic simple because this is mostly a frontend task.
export const chartData = [
  { value: 200, fill: "#737DFE", isUsage: true },
  { value: 350 },
  { value: 100, fill: "#737DFE", isUsage: true },
  { value: 90 },
  { value: 250, fill: "#737DFE", isUsage: true },
  { value: 110 },
  { value: 200, fill: "#737DFE", isUsage: true },
  { value: 240 },
];

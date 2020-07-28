const cliInputs = process.argv.slice(2);
const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else if (key.name === "b") {
    process.stdout.write("\x07");
  }
});

const timer = (timerDurations) => {
  timerDurations.forEach((duration, idx) => {
    if (duration < 0 || isNaN(duration)) {
      return;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`Timer set for ${duration} seconds is done !`);
    }, duration * 1000);
    console.log(`Setting timer for ${duration} seconds!`);
  });
};

timer(cliInputs);

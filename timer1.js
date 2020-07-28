const cliInputs = process.argv.slice(2);

const timer = (timerDurations) => {
  timerDurations.forEach((duration, idx) => {
    console.log(`${duration} ${typeof duration}`);
    if (duration < 0 || isNaN(duration)) {
      return;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`Timer set for ${duration} seconds is done !`);
    }, duration * 1000);
  });
};

timer(cliInputs);

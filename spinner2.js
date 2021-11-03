const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ', '\n'];
let delay = 100;
for (const symb of spinner) {
  setTimeout(() => {
    process.stdout.write(symb);
  }, delay);
  delay += 200;
};


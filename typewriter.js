const sentence = "hello there from lighthouse labs";
for (let x = 0; x < sentence.length; x++) {
  if (x !== sentence.length - 1) {
  setTimeout(() => {
    process.stdout.write(sentence[x])
  }, (50 * x));
}
 else if (x === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[x] + '\n')
    }, (50 * x));
  }
};
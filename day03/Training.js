let sentence =
  "The quick brown fox jumped under the nearby tree. What the fox did next surprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree.";

let words = sentence
  .toLowerCase()
  .replace(/[^a-z0-9\s]/g, "")
  .split(" ");

let wordCount = new Map();

for (let word of words) {
  if (wordCount.has(word)) {
    wordCount.set(word, wordCount.get(word) + 1);
  } else {
    wordCount.set(word, 1);
  }
}

for (let [word, count] of wordCount) {
  if (count > 1) {
    console.log(`${word}: ${count} times`);
  }
}

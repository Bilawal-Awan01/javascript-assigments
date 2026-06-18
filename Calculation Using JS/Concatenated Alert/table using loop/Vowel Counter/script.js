function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" || text[i] === "e" || text[i] === "i" ||
      text[i] === "o" || text[i] === "u" ||
      text[i] === "A" || text[i] === "E" || text[i] === "I" ||
      text[i] === "O" || text[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}

let input = prompt("Enter a string:");
alert("Number of vowels: " + countVowels(input));
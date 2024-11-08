const wordList = [
  "HEART",
  "KART",
  "RED",
  "CAT",
  "WAIST",
  "SWEAR",
  "MELON",
  "BRAIN",
  "AUDIO",
  "BLADE",
  "CRAZE",
];
const letters = document.querySelector(".letters"),
  reset = document.querySelector(".reset"),
  wrongs = document.querySelector(".wrong span"),
  remaining = document.querySelector(".remaining span"),
  typing = document.querySelector(".typing");

let word,
  incorrects = [],
  corrects = [],
  randIndexes = [],
  allowedGuesses;

function randWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  allowedGuesses = 5;
  incorrects = [];
  corrects = [];
  randIndexes = [];
  randIndexes[0] = Math.floor(Math.random() * word.length);
  randIndexes[1] = Math.floor(Math.random() * word.length);
  while (randIndexes[0] === randIndexes[1]) {
    randIndexes[1] = word[Math.floor(Math.random() * word.length)];
  }

  wrongs.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    if (i === randIndexes[0] || i === randIndexes[1]) {
      html += `<input type="text" value="${word[i]}" disabled>`;
      corrects.push(word[i]);
    } else {
      html += '<input type="text" disabled>';
    }
  }
  remaining.innerText = allowedGuesses;
  letters.innerHTML = html;
}
randWord();

function initGame(e) {
  let key = e.target.value;
  key = key.toUpperCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          letters.querySelectorAll("input")[i].value = key;
          corrects.push(key);
        }
      }
    } else {
      allowedGuesses--;
      incorrects.push(` ${key}`);
    }
    remaining.innerText = allowedGuesses;
  }
  wrongs.innerText = incorrects;
  typing.value = "";

  setTimeout(() => {
    if (corrects.length === word.length) {
      alert("Congratulations! You guessed correctly");
    } else if (allowedGuesses < 1) {
      alert("You didn't guess the word.");
      for (let i = 0; i < word.length; i++) {
        letters.querySelectorAll("input")[i].value = word[i];
      }
    }
  });
}

reset.addEventListener("click", randWord);
typing.addEventListener("input", initGame);
letters.addEventListener("click", () => typing.focus());
document.addEventListener("keydown", () => typing.focus());

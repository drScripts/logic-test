const arrayKaoskaki = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];

function canSellSocks(array) {
  const counts = {};
  let length = 0;
  array.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (let key in counts) {
    let obj = counts[key];
    if (obj % 2 != obj) {
      const value = Math.floor(obj / 2);
      length += value;
    }
  }

  return length;
}

function getWordLength(string) {
  let counter = 0;
  const format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;

  string.split(" ").forEach((data) => {
    if (!format.test(data)) {
      counter++;
    }
  });

  return counter;
}

console.log(canSellSocks(arrayKaoskaki));
console.log(canSellSocks([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(canSellSocks([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(canSellSocks([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

console.log("WORD");
console.log(getWordLength("Kemarin Shopia per[gi ke mall."));
console.log(getWordLength("Saat meng*ecat tembok, Agung dib_antu oleh Raihan"));
console.log(getWordLength("Berapa u(mur minimal[ untuk !mengurus ktp?"));
console.log(
  getWordLength("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")
);

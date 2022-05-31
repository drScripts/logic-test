const arrayKaoskaki = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];

function canSellSocks(array) {
  const counts = {};
  let length = 0;
  array.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (let key in counts) {
    if (!counts.hasOwnProperty(key)) continue;

    let obj = counts[key];
    if (obj % 2 != obj) {
      length++;
    }
  }

  return length;
}

function getLetterLength(string) {
  let counter = 0;
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  string.split(" ").forEach((data) => {
    if (!format.test(data)) {
      counter++;
    }
  });

  return counter;
}

console.log(canSellSocks(arrayKaoskaki));

console.log(getLetterLength("Kemarin Shopia per[gi ke mall."));

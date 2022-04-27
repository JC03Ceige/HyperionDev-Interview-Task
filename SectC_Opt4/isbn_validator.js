let isbn = "";
let valid = false;

isbnValidator = (isbn) => {
  // We convert the ISBN into an Array for easier iteration and manipulation.
  let isbnArr = isbn.split("").map((num) => {
    return parseInt(num, 10);
  });

  console.log(isbnArr);

  // We check to see if it is a 10 digit ISBN
  if (isbnArr.length === 10) {
    let multiplier = 10;
    let tempArr = [];
    for (let i = 0; i < isbnArr.length; i++) {
      let numCheck = isbnArr[i] * multiplier;
      tempArr.push(numCheck);
      multiplier--;
      console.log(multiplier);
      console.log(tempArr);
    }
    let arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
    console.log(arrSum);

    while (!valid) {
      if (arrSum % 11 === 0) {
        valid = true;
        console.log(valid);
        return valid;
      } else {
        tempArr[9]++;
        arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
      }
      console.log(tempArr);
    }
    tempArr.unshift(978);

    isbn = tempArr.toString();
    console.log(isbn);
  }
  return isbn;
};

isbnValidator("8624593252");

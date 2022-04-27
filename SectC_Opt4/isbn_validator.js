let isbn = "";
let valid = false;

let isbnValidator = (isbn) => {
  // We convert the ISBN into an Array for easier iteration and manipulation.
  let isbnArr = isbn.split("").map((num) => {
    return parseInt(num, 10);
  });
  console.log(isbnArr);

  // We convert the digit array based on isbn check standards.
  let digitConvert = () => {
    // We check to see if it is a 10 digit ISBN
    if (isbnArr.length === 10) {
      let multiplier = isbnArr.length;
      let tempArr = [];
      for (let i = 0; i < isbnArr.length; i++) {
        let numCheck = isbnArr[i] * multiplier;
        tempArr.push(numCheck);
        multiplier--;
        console.log(multiplier);
        console.log(tempArr);
      }
    }

    let arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
    console.log(arrSum);

    while (!valid) {
      if (arrSum % 11 === 0) {
        valid = true;
        console.log(valid);
        //return valid;
      } else {
        isbnArr[9]++;
        console.log(isbnArr);
        let tempArr = [];
        for (let i = 0; i < isbnArr.length; i++) {
          let multiplier = isbnArr.length;

          let numCheck = isbnArr[i] * multiplier;
          tempArr.push(numCheck);
          multiplier--;
          console.log(multiplier);
          console.log(tempArr);
        }
        arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
      }
      console.log(tempArr);
    }
    tempArr.unshift(978);
    console.log(tempArr);

    isbn = tempArr.toString();
    console.log(isbn);
    // Removing all the commas
    var result = isbn.replace(/,/g, "");
    console.log(result);
  };
  return result;
};

isbnValidator("8624593252");

// We create an empty string variable for isbn and set a boolean value for validity.
let isbn = "";
let valid = false;

isbnValidator = (isbn) => {
  // We convert the ISBN into an Array for easier iteration and manipulation.
  let isbnArr = isbn.split("");
  if (isbnArr[isbnArr.length - 1].toLowerCase() === "x") {
    isbnArr[isbnArr.length - 1] = "10";
    isbnArr = isbnArr.map((num) => {
      return parseInt(num, 10);
    });
    isbnArr[isbnArr.length - 2] = isbnArr[isbnArr.length - 2] + 1;
    isbnArr[isbnArr.length - 1] = 0;
  } else {
    isbnArr = isbnArr.map((num) => {
      return parseInt(num, 10);
    });
    console.log(isbnArr);
  }

  console.log(isbnArr);

  // Next we need to see check if the ISBN is valid and if so, but is a 10
  // digit ISBN, then we need to convert it to a 13 digit ISBN.
  // We create a multiplier variable and a temporary array to hold the values.
  let multiplierTen = 10;
  let multiplierThrtn = 1;
  let tempArr = [];
  // We check to see if it is a 10 digit ISBN
  if (isbnArr.length === 10) {
    // This for statement iterates through the array and at each index multiplies
    // the number at the index with the multiplier.
    // With each iteration the multiplier is reduced by one, counting down from ten.
    for (let i = 0; i < isbnArr.length; i++) {
      let numCheck = isbnArr[i] * multiplierTen;
      tempArr.push(numCheck);
      multiplierTen--;
      // console.log(multiplierTen);
      // console.log(tempArr);
    }

    // Here the sum of the array is obtained by using the reduce method.
    let arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
    // console.log(arrSum);

    // Now we use the while loop to see if the sum of the array is devisable by 11.
    // If not, we need to increment the last number of the ISBN, which is the same
    // as that of the tempArr, and run the check again.
    while (!valid) {
      if (arrSum % 11 === 0) {
        valid = true;
        console.log(valid);
      } else {
        if (tempArr[9] === 10) {
          tempArr[8] = (tempArr[8] / 2 + 1) * 2;
          tempArr[9] = 0;
        } else {
          tempArr[9]++;
        }
        arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
      }
      console.log(tempArr);
    }

    // Once the isbn is valid we can convert the numbers back by reversing the
    // multiplier function and creating a new array.
    // We reset the multiplier and create a new ISBN array.
    multiplierTen = 10;
    let newIsbn = [];
    for (let i = 0; i < isbnArr.length; i++) {
      let numRevert = tempArr[i] / multiplierTen;
      newIsbn.push(numRevert);
      multiplierTen--;
      console.log(multiplierTen);
      console.log(newIsbn);
    }

    // To convert it the 10 digit ISBN, we add 978 to the start of the isbn.
    newIsbn.unshift(978);

    // Removing all the commas
    let result = newIsbn.toString().replace(/,/g, "");
    //console.log(result);
    alert(`Your 13-digit ISBN: ${result} is valid`);
  } else if (isbnArr.length === 13) {
    // This for statement iterates through the array and at each index multiplies
    // the number at the index with the multiplier.
    // With each iteration the multiplier is reduced by one, counting down from ten.
    for (let i = 0; i < isbnArr.length; i++) {
      // The multiplier for the 13 digit ISBN runs binary between 1 and 3. We can
      // accomplish this by check if the array index is odd or even.
      if (i % 2 !== 0) {
        multiplierThrtn = 3;
      } else {
        multiplierThrtn = 1;
      }
      let numCheck = isbnArr[i] * multiplierThrtn;
      tempArr.push(numCheck);
      console.log(multiplierThrtn);
      console.log(tempArr);
    }

    // Here the sum of the array is obtained by using the reduce method.
    let arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
    console.log(arrSum);

    // Now we use the while loop to see if the sum of the array is devisable by 11.
    // If not, we need to increment the last number of the ISBN, which is the same
    // as that of the tempArr, and run the check again.
    while (!valid) {
      if (arrSum % 10 === 0) {
        valid = true;
        console.log(valid);
        console.log(tempArr);
      } else {
        if (tempArr[12] === 10) {
          tempArr[11] = (tempArr[11] / 3 + 1) * 3;
          tempArr[12] = 0;
        } else {
          tempArr[12]++;
        }
        console.log(tempArr);
        arrSum = tempArr.reduce((total, currentValue) => total + currentValue);
      }
      console.log(tempArr);
    }

    // Once the isbn is valid we can convert the numbers back by reversing the
    // multiplier function and creating a new array.
    // We reset the multiplier and create a new ISBN array.
    multiplierThrtn = 1;
    let newIsbn = [];
    for (let i = 0; i < isbnArr.length; i++) {
      if (i % 2 !== 0) {
        multiplierThrtn = 3;
      } else {
        multiplierThrtn = 1;
      }
      let numRevert = tempArr[i] / multiplierThrtn;
      newIsbn.push(numRevert);
      console.log(multiplierThrtn);
      console.log(newIsbn);
    }

    // To convert it the 10 digit ISBN, we add 978 to the start of the isbn.
    //newIsbn.unshift(978);

    // Removing all the commas
    let result = newIsbn.toString().replace(/,/g, "");
    //console.log(result);
    alert(`Your 13-digit ISBN: ${result} is valid`);
  }
};

isbnValidator("978662459325X");

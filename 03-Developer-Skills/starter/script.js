// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Create a function that takes an array as the paramter
// return a string to the console
// count the days as the number of elements in the array
// prints all on same line

const temps = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  const forecastArray = [];
  for (let i = 0; i < arr.length; i++) {
    forecastArray.push(
      `${arr[i]} degrees celcius in ${i + 1} day${i === 0 ? `` : `s`}...`
    );
  }
  console.log(forecastArray.join(" "));
};

printForecast(temps);

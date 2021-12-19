// let calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// let checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No winner!`);
//     }
// };

// checkWinner(avgDolphins, avgKoalas);

// const calcTip = function (bill) {
//     if (bill <= 50 || bill >= 300) {
//         console.log(`The tip is ${bill * 0.15}`);
//     } else {
//         console.log(`The tip is ${bill * 0.2}`);
//     }
// }

// let calcTip = (bill) => bill <= 50 || bill >= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(`This is the tip for each bill: ${tips}`);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1]];
// console.log(`This is the total of each bill: ${total}`);

// const jeff = {
//     firstname: `Jeff`,
//     birthyear: 1986,
//     job: `designer`,
//     driverslicense: false,
//     calcAge: function () {
//         this.age = 2021 - this.birthyear;
//         return this.age;
//     },
//     determineLicense: function () {
//         if (this.driverslicense === true) {
//             return `a`;
//         } else {
//             return `no`;
//         }
//     }
// };

// console.log(`${jeff.firstname} is a ${jeff.calcAge()} year old ${jeff.job}, he has ${jeff.determineLicense()} drivers license.`);

// jeff.bestfriend = `Kelly`;

// console.log(`${jeff.firstname} has ${jeff.friends.length} friends and his best friend is ${jeff.bestfriend}.`);

// const Mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// const John = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }
// const compareBMI = function () {
//     if (John.calcBMI() > Mark.calcBMI()) {
//         console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})!`)
//     } else {
//         console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})!`)
//     }
// }

// compareBMI();

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

const calcTip = bill => (bill <= 50 || bill >= 300 ? bill * 0.15 : bill * 0.2);

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = calcTip(bills[i]) + bills[i];
  totals.push(total);
}

console.log(tips, totals);

let sum = 0;
let testArray = [10, 10, 10, 10, 10];

const calcAverage = function (arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
    console.log(sum);
  }
  const average = sum / arr.length;
  console.log(average);
};

calcAverage(testArray);

console.log("testsssss");

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(`This is the tip for each bill: ${tips}`);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1]];
// console.log(`This is the total of each bill: ${total}`);

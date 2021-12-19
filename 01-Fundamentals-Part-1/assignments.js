// let country = "USA";
// let continent = "North America";
// let population = "10,000,000";

// console.log(country, continent, population);

// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;

// let bmiReadout;

// if (markBMI > johnBMI) {
//     bmiReadout = `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`
// } else {
//     bmiReadout = `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
// }

// console.log(bmiReadout);

// const dolphinAverage = (265 + 91 + 89) / 3;
// const koalaAverage = (265 + 91 + 89) / 3;

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
//     console.log(`Dolphins win!`)
// } else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
//     console.log(`Koalas win!`)
// } else if (koalaAverage >= 100 && koalaAverage === dolphinAverage && dolphinAverage >= 100) {
//     console.log(`Tie!`)
// }
// else { console.log(`Not 100 points!`) };

// const day = `sunday`;

// switch (day) {
//     case `monday`:
//         console.log(`Case of the Mondays`);
//         break
//     case `tuesday`:
//     case `wednesday`:
//         console.log(`Taco Tuesday or Wednesday`);
//         break
//     case `thursday`:
//     case `friday`:
//         console.log(`Thursday Friday I'm in love`);
//     case `saturday`:
//     case `sunday`:
//         console.log(`Its the freakin weekend`);
//         break
//     default:
//         console.log(`Bruh what day is that?`);
// }

const bill = 20;

// if (bill > 50 && bill < 300) {
//     console.log(bill * 1.15);
// } else {
//     console.log(bill * 1.2);
// }

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip is ${tip}, the total value is ${bill + tip}`);
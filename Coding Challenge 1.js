var markMass, johnMass, markHeight, johnHeight, johnBMI, markBMI;
markMass = 80; //kg
markHeight = 5; //ft
markBMI = markMass / (markHeight * markHeight);
johnMass = 120; //kg
johnHeight = 6; //ft
johnBMI = johnMass / (johnHeight * johnHeight);
var maxHeight = markBMI > johnBMI;
console.log(markBMI , johnBMI);
console.log("Is Mark's BMI higher than John's?" + maxHeight);
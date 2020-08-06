var mark = {
    fullName : 'Mark',
    mass : 80, //KG
    height : 5, //ft
    calcBMI : function(){
        return this.mass / (this.height * this.height);
    }
};
var john = {
    fullName : 'John',
    mass : 120, //KG
    height : 6, //ft
    calcBMI : function(){
        return this.mass / (this.height * this.height);
    },
};
john.calcBMI();
mark.calcBMI();
console.log(mark,john);
if (john.calcBMI() > mark.calcBMI())
    console.log("John's BMI is greater than Mark's BMI");
else if (john.calcBMI() === mark.calcBMI())
    console.log("John's and Mark's BMI is Equall...");
else
    console.log("Mark's BMI is greater than John's BMI");
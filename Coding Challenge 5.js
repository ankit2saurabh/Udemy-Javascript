var John = {
    bills : new Array(124, 48, 268, 180, 42),
    calculateTip : function() {
        var tip = new Array();
        for (i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50)
                tip[i] = this.bills[i] * .2;
            else if (this.bills[i] >= 50 && this.bills[i] < 200)
                tip[i] = this.bills[i] * .15;
            else if (this.bills[i] >= 200)
                tip[i] = this.bills[i] * .1;
        }
        return tip;        
    }
}
console.log(John.calculateTip());
function calculateTotalTipMoney(bill , tip) {
    var total = new Array;
    for (i = 0; i < bill.length; i++)
        total[i] = bill[i] + tip[i];
    return total;
}
console.log(calculateTotalTipMoney(John.calculateTip(), John.bills));
var Mark = {
    bills : new Array(77, 375, 110, 45),
    calculateTip : function() {
        var tip = new Array();
        for (i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100)
                tip[i] = this.bills[i] * .2;
            else if (this.bills[i] >= 100 && this.bills[i] < 300)
                tip[i] = this.bills[i] * .15;
            else if (this.bills[i] >= 300)
                tip[i] = this.bills[i] * .1;
        }
        return tip;        
    }
}
function averageTips(tip) {
    var sum = 0;
    for (i = 0; i < tip.length; i++)
        sum = sum + tip[i];
    var average = sum / tip.length;
    return average;
}
console.log(averageTips(Mark.calculateTip()));
console.log(averageTips(John.calculateTip()));
if (averageTips(Mark.calculateTip()) > averageTips(John.calculateTip()))
    console.log ("Mark's Family Paid highest Tip");
else if (averageTips(Mark.calculateTip()) === averageTips(John.calculateTip()))
    console.log ("Both Pay Equall Amount");
else
    console.log ("John's Family Paid highest Tip");
function tipCalculator(johnBill){
    var percentage;
    if (johnBill < 50)
        percentage = .2;
    else if (johnBill >= 50 && johnBill < 200)
        percentage = .15;
    else
        percentage = .1;
    return percentage * johnBill;
}
var johnFamilyBill = new Array (124, 48, 268);
var tip = [tipCalculator(johnFamilyBill[0]), tipCalculator(johnFamilyBill[1]), tipCalculator(johnFamilyBill[2])];
console.log(tip);
var totalTip = [johnFamilyBill[0] + tip[0], johnFamilyBill[1] + tip[1], johnFamilyBill[2] + tip[2]];
console.log(totalTip);

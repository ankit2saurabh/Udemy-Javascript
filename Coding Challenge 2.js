var johnFirstMatch = 89;
var johnSecondMatch = 120;
var johnThirdMatch = 103;
var johnAverageScore = (johnFirstMatch + johnSecondMatch + johnThirdMatch) / 3;
var markFirstMatch = 116;
var markSecondMatch = 94;
var markThirdMatch = 123;
var markAverageScore = (markFirstMatch + markSecondMatch + markThirdMatch) / 3;
markAverageScore > johnAverageScore ? console.log("Marks's teams win the match with highest average Score = " + markAverageScore) : console.log("John's teams win the match with highest average Score = " + johnAverageScore);
var MaryFirstMatch = 97;
var MarySecondMatch = 134;
var MaryThirdMatch = 105;
var MaryAverageScore = (MaryFirstMatch + MarySecondMatch + MaryThirdMatch) / 3;
if (johnAverageScore > markAverageScore && johnAverageScore > MaryAverageScore)
    console.log("John's teams win the match with highest average Score = " + johnAverageScore);
else if (markAverageScore > johnAverageScore && markAverageScore > MaryAverageScore)
    console.log("Mark's teams win the match with highest average Score = " + markAverageScore);
else
    console.log("Mary's teams win the match with highest average Score = " + MaryAverageScore);
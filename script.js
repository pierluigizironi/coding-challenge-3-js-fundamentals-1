/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

1. Trovo la mediana di tutti e tre i punti di ciascuna squadra;
2. Uso l'if per determinare chi è il vincitore e lo notifico tramite console.log
3. Uso else per un possibile pareggio tra i due mediani

const dolphinFirstScore = 96;
const dolphinSecondScore = 108;
const dolphinThirdScore = 89;

const koalaFirstScore = 88;
const koalaSecondScore = 91;
const koalaThirdScore = 110;

if(dolphinAverageScore > koalaAverageScore) {
    console.log(`The Dolphins (${dolphinAverageScore}) have won over Kooalas (${koalaAverageScore})!`);
} else if(koalaAverageScore > dolphinAverageScore) {
    console.log(`The Koalas (${koalaAverageScore}) have won over Dolphins (${dolphinAverageScore})!`);
} else {
    console.log(`It's a draw!`);
}
*/


const dolphinFirstScore = 97;
const dolphinSecondScore = 112;
const dolphinThirdScore = 101;

const koalaFirstScore = 109;
const koalaSecondScore = 105;
const koalaThirdScore = 123;


const dolphinAverageScore = (dolphinFirstScore + dolphinSecondScore + dolphinThirdScore) / 3;
console.log(`dolphin ${dolphinAverageScore}`);
const koalaAverageScore = (koalaFirstScore + koalaSecondScore + koalaThirdScore) / 3;
console.log(`koala ${koalaAverageScore}`);

if(dolphinAverageScore && koalaAverageScore >= 100 && dolphinAverageScore > koalaAverageScore) {
    console.log(`The Dolphins (${dolphinAverageScore}) have won over Kooalas (${koalaAverageScore})!`);
} else if(dolphinAverageScore && koalaAverageScore >= 100 && koalaAverageScore > dolphinAverageScore) {
    console.log(`The Koalas (${koalaAverageScore}) have won over Dolphins (${dolphinAverageScore})!`);
} else {
    console.log(`It's a draw!`);
}
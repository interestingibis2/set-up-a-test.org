function testmaker() {
confirm("Hello and welcome to 'set-up-a-test.org'. Please answer the questions to set the test up.");
var parentName = prompt("Please enter your name.");
var childName = prompt("Thank you, " + parentName + ". Please enter the test-taker’s name.");
var noOfQuestions = prompt("Thank you, " + parentName + ". The test has a maximum of 10 questions. Please enter the number of questions you wish to ask " + childName + ".");
var question1 = prompt("Please enter the first question, for " + childName + ".");
var answer1 = prompt("Please enter the answer for the first question.");
if (noOfQuestions > 1) {
	var question2 = prompt("Please enter the second question, for " + childName + ".");
    var answer2 = prompt("Please enter the answer to the second question.");
}
if (noOfQuestions > 2) {
	var question3 = prompt("Please enter the third question, for " + childName + ".");
var answer3 = prompt("Please enter the answer to the third question.");
}
if (noOfQuestions > 3) {
	var question4 = prompt("Please enter the fourth question, for " + childName + ".");
var answer4 = prompt("Please enter the answer to the fourth question.");
}
if (noOfQuestions > 4) {
	var question5 = prompt("Please enter the fifth question, for " + childName + ".");
var answer5 = prompt("Please enter the answer to the fifth question.");
}
if (noOfQuestions > 5) {
	var question6 = prompt("Please enter the sixth question, for " + childName + ".");
var answer6 = prompt("Please enter the answer to the sixth question.");
}
if (noOfQuestions > 6) {
	var question7 = prompt("Please enter the seventh question, for " + childName + ".");
var answer7 = prompt("Please enter the answer to the seventh question.");
}
if (noOfQuestions > 7) {
	var question8 = prompt("Please enter the eigth question, for " + childName + ".");
var answer8 = prompt("Please enter the answer to the eigth question.");
}
if (noOfQuestions > 8) {
	var question9 = prompt("Please enter the ninth question, for " + childName + ".");
    var answer9 = prompt("Please enter the answer to the ninth question.");
}
if (noOfQuestions > 9) {
	var question10 = prompt("Please enter the tenth question, for " + childName + ".");
    var answer10 = prompt("Please enter the answer to the tenth question.");
}
confirm("The test is now ready. Please hand over to " + childName + " for the test.");
confirm("Hello, " + childName + ". " + parentName + " has set up a quiz for you. It has " + noOfQuestions + " questions. When you are ready, click OK.");
var childAnswer1 = prompt(question1);
if (noOfQuestions > 1) {
	var childAnswer2 = prompt(question2);
}
if (noOfQuestions > 2) {
	var childAnswer3 = prompt(question3);
}
if (noOfQuestions > 3) {
	var childAnswer4 = prompt(question4);
}
if (noOfQuestions > 4) {
	var childAnswer5 = prompt(question5);
}
if (noOfQuestions > 5) {
	var childAnswer6 = prompt(question6);
}
if (noOfQuestions > 6) {
	var childAnswer7 = prompt(question7);
}
if (noOfQuestions > 7) {
	var childAnswer8 = prompt(question8);
}
if (noOfQuestions > 8) {
	var childAnswer9 = prompt(question9);
}
if (noOfQuestions > 9) {
	var childAnswer10 = prompt(question10);
}
var score = 0;
if (childAnswer1 == answer1) {
	score = score + 1;
}
if (childAnswer2 == answer2 && noOfQuestions > 1) {
	score = score + 1;
}
if (childAnswer3 == answer3 && noOfQuestions > 2) {
	score = score + 1;
}
if (childAnswer4 == answer4 && noOfQuestions > 3) {
	score = score + 1;
}
if (childAnswer5 == answer5 && noOfQuestions > 4) {
	score = score + 1;
}
if (childAnswer6 == answer6 && noOfQuestions > 5) {
	score = score + 1;
}
if (childAnswer7 == answer7 && noOfQuestions > 6) {
	score = score + 1;
}
if (childAnswer8 == answer8 && noOfQuestions > 7) {
	score = score + 1;
}
if (childAnswer9 == answer9 && noOfQuestions > 8) {
	score = score + 1;
}
if (childAnswer10 == answer10 && noOfQuestions > 9) {
	score = score + 1;
}
confirm("Well done, " + childName + "! You scored " + score + "/" + noOfQuestions + "!");
confirm("Please pass over to " + parentName + ".");
confirm("Hello, " + parentName + ". " + childName + " just finished the test and scored " + score + "/" + noOfQuestions + ". Thank you for using this test making software.");
}

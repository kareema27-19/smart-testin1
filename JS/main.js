
 var userEmail = prompt("enter email")

 var userpass = prompt("enter password")
var number_of_tries =0
while(userEmail !="aaaa" || userpass !="45"){
    number_of_tries++
    if(number_of_tries < 3){
        userEmail = prompt("enter email")
        userEmail = prompt("enter password")
    }
    else{
        alert("you tried too many times")
        break
    }
}
if(userEmail=="aaaa" && userpass=="45"){

    alert("successfully logged in")
    var number_of_questions = +prompt("please enter your number of questions")
    var operators =["+","-","*","/","**","%"]
    var score=0
}
for(var i= 1 ; i <= number_of_questions ; i++){

    var num1 = Math.floor(Math.random() * 10)

    var num2 = Math.floor(Math.random() * 10)

    var operation = operators[ Math.floor(Math.random() * operators.length)]

    
    var useranswer= +prompt(`${ i } ${ num1 } ${ operation } ${ num2 } =`);}
  

    var correctanswer;

if (operation === "+") {
correctAnswer = num1 + num2;
} else if (operation === "-") {
correctanswer = num1 - num2;
} else if (operation === "*") {
correctanswer = num1 * num2;
} else if (operation === "**") {
correctanswer = num1 ** num2;
} else if (operation === "/") {

correctanswer = num1 / num2;
} else if (operation === "%") {
correctanswer = num1 % num2;}



if (useranswer == correctanswer) {
score++;

}
{

alert("Your total score is: " + score + " out of " + number_of_questions);

 }  


    
    







































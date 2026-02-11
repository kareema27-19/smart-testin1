// document.getElementById("btn").addEventListener("click",
//     function(){
//     alert("heloooo")
// }
// )
// var x=45
// console.log(x,typeof(x));
// var y="Kareema";
// console.log(y,typeof(y));
// var z= true
// console.log(z,typeof(z));



// console.log(s);



// console.log prompt(enter your name);

// var fname= prompt("enter first name")
// var lname= prompt("enter last name")
// var age=prompt("enter your age")
// console.log(`hello my firs name is ${fname} and my last name is ${lname} and my age is ${age}`);

// var num1= prompt("enter number1")
// var num2= prompt("enter number2")
// console.log(sum);


// var number=(prompt("enter any number"))


// var num1= +prompt("enter num1")
// var num2= +prompt("enter num2")
// console.log(num1+num2);

// var user = {
//     name: "Kareema", id: "4947176", city: "suwq", child: {
//         name: "Ahsha",
//         gender: "femail",
//         dob: "30-11-2009",
//         hobbies: {
//             sports:"football",
//             subjects:"math",
//             color:{

//             }
//         }
//     }

// }
// console.log(user.child.hobbies.subjects);

// var user1={
//     id:"15247",
//      name:"Yahia",
//      child:{
//         name:"ahmed",
//         gender:"male"



// }
// }
// console.log(user1["child"]["gender"]);

// var friends =["fales","salem","14724","mona","true","87489","salah"]
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[3]);
// console.log(friends[3]);

// var friends=[
//      {name:"yahiha"},
//     {id:"214721"},
//     {city:"sur"},
//     {phone:"94217300"},

// ]
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// var BigArray = [
// [[1,2,3],[1,2,3]],
// [[1,2,3],[1,2,3],["Talaal","Yousef"]],
// [["Ahemd","Eid","Saieed"],[1,2,3]],
// [["Mahmoud","Hassan","Soliman"],[1,2,3]],
// [[1,2,3],[1,2,3],

// [{name:"Monsef",id:[45,45,45,["SARA"]]}]],
// ]



// console.log(BigArray[4][2][0].name);

//4
//2
//0
// var num=81
// if(num>=0)
//     console.log("positive");
// else console.log("negative");



// sum=0;
// average=0;
// for(var i=1; i<=5; i+=1){
//     var mark = Number( prompt ("Enter mark"+1));

//         console.log("student " +i +"mark "+mark);

//          if(mark>=50)

//              console.log("student " +i +"mark "+ "pass");
//     else
//         console.log("student " +i +"mark "+ "fail");}
// sum=sum+mark;
// average=sum/5;
// console.log("total" +sum);
// console.log("average" +average);


// for(var i=1 ; i<=100; i+=1){

//     if(i%3==0 && i%5==0){
//         console.log("fizzbuzz")  
//     }
//     else if(i%3==0){
//          console.log("fizz")}
//     else if(i%5==0){
//         console.log("buzz")}
//         else
//             console.log(i);



// }
// for(var i=1 ; i<=100 ; i++){
//     console.log(i);

// }
// for(  ;   ;  ){
//     var x= Number (prompt("enter number"))
// if ( x==10 )
//     break
//     else{
//         console.log(x);

//      continue
// }
// }

// for(  ;   ;  ){
//     var x= Number (prompt("enter number"))
//      if ( x==10 )
//    break
//      else{
//          console.log(x);

//    continue
//  }
//  }

// for(  ;   ;  ){
//          var x= Number (prompt("enter number"))
//       if ( x==10 )
//     break
//      else{
//           console.log(x);

//     continue
//  }
//   }

// var random = Math.floor(Math.random() * 10);
// for(  ;   ;  ){
//     var number= number (prompt("enter number"))
// if(number==random)break
// console.log("randomnumber");

// }

// var random = Math.floor(Math.random() * 10)
// console.log(random)
// for (var i = 0; i < 5; i++) {
//     var x = +prompt("enter number")
//     if (x > random) {
//         console.log("too hot")
//         continue
//     }
//     else if (x < random) {
//         console.log("too cold")
//         continue
//     }
//     else {
//         console.log("Well done ");
//         break

//     }




// var userEmail = prompt("enter your email")

// var userpass = prompt("enter your password")

// Hilal = 0
//  attempts = 0;

// while (userEmail != "ahmed@gmail" || userpass != "12345A") {
//     Hilal++
//     if (Hilal <= 3) {
//         userEmail = prompt("enter your email")

//         userpass = prompt("enter your password")
 

//     }
//     else break


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


    
    






































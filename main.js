/*
+ 
-
*
/
% mod
==
!=
>=
<=
*/

//let number1 = '5';
//let number2 = '10';

//if - else condition

//if (number1 >= number2) {
 //   console.log('this is if');
//} else if (number1 == number2) {
//    console.log('this is else if');
//} else  {
  //  console.log('this is else');
//}

/*
>= 80 - A
>= 70 - B
>= 60 - C
>= 50 - D
< 50 - F
*/
// let score = prompt('Enter your score');
// console.log('Your score is ' + score);
// //if - else condition
// if (score >= 80) {
//     console.log('You are grade A');
// } else if (score >= 70) {
//     console.log('You are grade B');
// } else if (score >= 60) {
//     console.log('You are grade C');
// } else if (score >= 50) {
//     console.log('You are grade D');
// } else {
//     console.log('You are grade F');
// }


/*
&& - and
|| - or
! - not
*/

// let number1 = 5;
// let number2 = 8;
// //true && true = true
// let condition1 = number1 > 3 && number2 > 5;  
// console.log('resule of condition1', condition1);    

// //true || false = true
// let number1 = 5;
// let number2 = 8;
// let condition1 = number1 > 3 || number2 > 5;  
// console.log('resule of condition1', condition1);     


// let age = 30;
// let gender = 'male';

// //true && true = true
// if (age >=20 && gender == 'male') {
//     console.log('you are male adult');
// }

// let number = 29;

// if (!(number % 2 == 0)) {
//     console.log('you are even number');
// }

// let counter = 0;
// while (counter < 10) {//true
//     console.log('while loop');
//     counter = counter + 1;
// }

// for (let counter = 0; counter < 10; counter = counter + 1) {
//     console.log('for loop');
// }

/*
a
*/
// let age1 = 30;
// let age2 = 50;
// let age3 = 60;
// let age4 = 40;
// console.log(age1, age2, age3, age4);

// let ages = [30, 50, 60, 40];
// // console.log('array',ages[2],ages[3])
// console.log('new age', ages[2]);
// console.log('age list', ages);

// let ages = [30, 50, 60, 40];

// console.log(ages);
// ages.sort();
// console.log(ages);  

// let names_list= ['John', 'Doe', 'Jane', 'Smith'];
// names_list.push('Doe');
// console.log(names_list.length);
// console.log(names_list[0]);


// for (let i = 0; i < names_list.length; i++) {
//     console.log('names_list',names_list[i]);
// }

// let age1 = 100;
// let name1 = 'John';
// let grade1 = '100';

// let age2 = 50;
// let name2 = 'Doe';
// let grade2 = '50';

/*
object
*/
// let student1 = [{
// name : 'Doe',
// age :50,
// grade : 'A'
// },{
//     name : 'John',
//     age: 29,
//     grade : 'B'
// }];


// for (let i = 0; i < student1.length; i++) {
//     console.log('Student number',(i+1));
//     console.log('name',student1[i].name);
//     console.log('age',student1[i].age);
//     console.log('grade',student1[i].grade);
// }


/* 
object + array
*/

// let scores1 = 50
// let scores2 = 90
// let grade = ''
// //การประกาศ function 
// function calculateGrade(scores) {
//     if (scores >= 80) {
//         grade = 'A';
//     } else if (scores >= 70) {
//         grade = 'B';
//     } else if (scores >= 60) {
//         grade = 'C';
//     } else if (scores >= 50) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }
//     return grade;
// }
// let student1 = calculateGrade(scores1); 
// let student2 = calculateGrade(scores2);
// console.log('grade:',student1,student2);



// let scores = [10, 20, 30, 40];

// for (let i = 0; i < scores.length; i++) {
//     console.log('score', scores[i]);
// let newScores = scores.filter((s) => {
//     return s >= 30;{
//     }

// newScores.forEach((ns) => {
//     console.log('new score', ns);
// })


/*
object function
*/

let students = [
    {
name: "John",
score: 90,
grade: 'A',
},
{
name: "Doe",
score: 50,
grade: 'D',
},
{
name: "Smith",
score: 70,
grade: 'B',
 },
{
name: "Jane",
score: 60,
grade: 'C',
}
]
let student = students.find((s) => {
    if(s.name == 'Doe'){
        return true;
    }
});
let doubleScore_student = students.map((s) => {
    s.score = s.score * 2;
})
let highScore_student = students.filter((s) => {
    if(s.score >= 80){
        return true;
    }
})
console.log('student', student)
console.log('high score student', highScore_student)
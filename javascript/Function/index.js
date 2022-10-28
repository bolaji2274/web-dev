let num = [2,3,5,7,8,4];

let num1 = num.map(mutiply);

function mutiply(value){
    return value * 2;
}

console.log(num1);
document.getElementById('demo').innerHTML = num1;

let num2 = num.filter(check);

function check(value){
    return value > 4;
}
document.getElementById('demo').innerHTML = num2;

let num3 = num.reduce(sumOf);

function sumOf(value, sum){
    return sum + value;
}
document.getElementById('demo').innerHTML = num3;

        //  Object manipulation
let student = new Object();

student.name = 'Bolaji';
student.age = 20;
student.id = 28911
console.log(student);

// function obj(objects){
//     for (let i = 0; i < objects.length; i++){
//         objects[i] = prompt(`Enter the value for {objects[i]}`);
//     }
// }
// let arrays = [firstName, lastName, age, school, Status];
// let myObj = obj(arrays);

// console.log(myObj);
// function stud(name, age, studies) {
//     this.name = name;
//     this.age = age;
//     this.studies = studies;
// }

// let objs = stud('Bolaji Hammed', 22, 'EIT');
// console.log(objs.name);


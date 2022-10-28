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
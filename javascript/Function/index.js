let num = [2,3,5,7,8];

let num1 = num.map(mutiply);

function mutiply(value){
    return value * 2;
}

console.log(num1);
document.getElementById('demo').innerHTML = num1;
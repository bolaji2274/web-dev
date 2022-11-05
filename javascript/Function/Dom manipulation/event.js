const btnTwo = document.querySelector('.btn-2');
console.log(btnTwo);

// btnTwo.addEventListener("click", () => {
//     alert("Bolaji also love javascript");
// })

// or 

function alertBtn(){
    alert("I also love javascript Bro");
}
btnTwo.addEventListener("click", alertBtn);
let bg = false;
const newBack = document.querySelector('.box-3');
changeBtn = () => {
    newBack.style.backgroundColor = 'blue';
}
newBack.addEventListener("mouseover", changeBtn);
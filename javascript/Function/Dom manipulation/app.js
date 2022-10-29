// const myId = document.getElementById('min-heading');
// console.log(myId);  

// const myClass = document.getElementsByClassName('list-items');
// console.log(myClass);

// const listItem = document.getElementsByTagName('li');
// console.log(listItem);

// const container = document.querySelector('div');
// console.log(container);

// const container1 = document.querySelectorAll('div');
// console.log(container1);

//      styling element

const listItem = document.querySelectorAll('.list-items');

for (i = 0; i < listItem.length; i++){
    listItem[i].style.fontSize = '2rem';
}

const title = document.querySelector('#min-heading');
title.style.color = 'green';

// creating element

const ul = document.querySelector('ul');

const li = document.createElement('li');

//      adding element

ul.append(li);

// const firstLetter = document.querySelector('.list-items');

// console.log(firstLetter.innerText); 
// console.log(firstLetter.innerHTML);
// console.log(firstLetter.textContent);

// modify the innerText

li.innerText = 'DHRUVA';

// modify the Attributes && Classess

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

console.log(title.getAttribute('id'));
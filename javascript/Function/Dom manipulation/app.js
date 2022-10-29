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

const listItem = document.querySelectorAll('.list-items');

for (i = 0; i < listItem.length; i++){
    listItem[i].style.color = 'red';
}

console.log(listItem);

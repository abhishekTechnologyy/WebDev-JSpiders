console.log(document.head);
console.log(document.body);
console.log(document.title);
// console.log(document.h1);

// DOM methods:

//----------------

//1.id

// let h1 = document.getElementById('title')
// console.log(h1);

// let p = document.getElementById('desc')
// console.log(p);

//----------------------
//2.class

// let h2 = document.getElementsByClassName('title')
// console.log(h2);
// console.log(h2[0])

// let head2 = document.getElementsByClassName('title2')
// console.log(head2);

// let p1 = document.getElementsByClassName('desc')
// console.log(p1);

//3.element

// let h1 = document.getElementsByTagName('h1')
// console.log(h1);

// -------------------------- 4. Query Selector ------------------------------

// let element = document.querySelector('.title')
let element = document.querySelectorAll('.title')

console.log(element);

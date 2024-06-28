let title = document.getElementById('title')

// ------------------------------
// let change = () => {

//     console.log('hello all');
//     // manipulation
// title.textContent = 'new content'
// title.style.color = 'blue'
// title.style.backgroundColor = 'gold'
// }
// ------------------------------------


// let increase = () => {
//     title.textContent++
// }

// let decrease = () => {
//     title.textContent--
// }

// let reset = () => {
//     title.textContent = 0
// }

//-----------------------------

let card = document.getElementById('card')
let btn = document.getElementById('btn')

let select = () => {
   
    if (btn.textContent == "select") {
        card.style.border = '5px solid black'
        btn.textContent = "selected"
    } else {
        card.style.border = "1px solid black"
        btn.textContent = "select"
    }
}
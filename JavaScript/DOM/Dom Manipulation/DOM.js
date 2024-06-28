// let title = document.getElementById('title')

let title = document.getElementsByClassName('title')

// title[0].style.color = 'red'
// title[0].style.textAlign = 'center'

for (let i = 0; i < title.length; i++) {
    title[i].style.color = 'red'
    title[i].style.textAlign = 'center'    
}

// title[0].textContent = "updated content 1"
// title[1].textContent = "updated content 2"

// for (let i = 0; i < title.length; i++) {
    // title[i].textContent = "updated content "+(i+1);

//     if(i%2 == 0)
//     {
//         title[i].textContent = 1;
//     }
//     else
//     {
//         title[i].textContent = 0;
//     }
// }
// let image = document.getElementById('image')

//---------------------------------------
// for (let i = 0; i < title.length; i++)
// {
//     title[i].textContent = (i%3) + 1
// }
//------------------------------------------

// updating the content
// title.textContent = "updated content" 
// image.src = "Netflix Logo.png"

//---------------------------------------------
// otp generation

//------
// let value = Math.random()*9000+1000
// let otp = Math.trunc(value)
// console.log(otp);

//-------
// let value = Math.random() * 10000;
// if(value > 1000)
// {
//     let otp = Math.trunc(value);
//     console.log(otp);

// }
// else{
//     console.log(otp + 1000);
// }

//---------------------------------------------
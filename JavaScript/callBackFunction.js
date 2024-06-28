// let a = [1,2,3,4]

// for (let i = 0; i < a.length; i++) {
//     let square = a[i] ** 2
//     console.log(square);
    
// }

//-------------finding sqaure by call back method -------------------------------

// let a = [1,2,3,4,5]

// //-------make square function or directly use arrow function--------------
// function square(x)
// {
//     return x**2;
// }
// //--------------------------------------------------------------------

// let result = a.map((x) => x**2) //arrow function

// //----another way------

// let result2 = a.map(square) //done by normal function

// console.log(result);
// console.log(result2);

//---------------------------------------------------------
 
// let b = [1,2,3,4,5]
// let result3 = b.map( (x) =>
// {
//     return x>2;
// })
// console.log(result3);

//-----------------------------------------------2. filter()----------------------------------

// let a = [1,2,3,4,5]

// let result = a.filter((x) => 
// {
//     return x>2;
// })
// console.log(result);

//------------------------------------

// let a = [1,2,3,4,5]
// let result = a.filter((x) => x%2)
// console.log(result);

//--------------------------------------------------3. reduce()---------------------------------------------

let a = [1,2,3,4,5]
let result = a.reduce( (sum,x) => {
    return sum+= x;
} , 0)
console.log(result);